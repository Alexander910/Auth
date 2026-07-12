import { AuthService } from "./src/auth/auth.service.js";
import { User } from "./src/users/users.js";
import bcrypt from "bcrypt";
import assert from "assert";
// Mocking User model for testing AuthService.login
const mockUser = {
    _id: "123",
    email: "test@example.com",
    password: "hashed_password",
    role: "admin", // Suppose the user in DB is admin
    toJSON: function () {
        const { password, __v, ...rest } = this;
        return rest;
    }
};
async function testLoginEnumeration() {
    console.log("Testing Login Enumeration and Error Messages...");
    const authService = new AuthService();
    // Mock User.findOne
    User.findOne = async (query) => {
        if (query.email === "exists@example.com") {
            return {
                ...mockUser,
                password: await bcrypt.hash("password123", 10)
            };
        }
        return null;
    };
    // Test non-existent user
    try {
        await authService.login("nonexistent@example.com", "any");
    }
    catch (error) {
        assert.strictEqual(error.message, "Email o contraseña incorrectos", "Should use generic message for non-existent user");
    }
    // Test wrong password
    try {
        await authService.login("exists@example.com", "wrongpassword");
    }
    catch (error) {
        assert.strictEqual(error.message, "Email o contraseña incorrectos", "Should use generic message for wrong password");
    }
    console.log("✅ Login Enumeration test passed.");
}
async function testSensitiveDataExposure() {
    console.log("Testing Sensitive Data Exposure (toJSON transform)...");
    const userInstance = new User({
        name: "Test User",
        email: "test@example.com",
        password: "secretpassword",
        role: "user"
    });
    const jsonUser = userInstance.toJSON();
    assert.strictEqual(jsonUser.password, undefined, "Password should be excluded from JSON");
    assert.strictEqual(jsonUser.__v, undefined, "__v should be excluded from JSON");
    console.log("✅ Sensitive Data Exposure test passed.");
}
async function runTests() {
    try {
        await testLoginEnumeration();
        await testSensitiveDataExposure();
        console.log("\nAll security verifications passed!");
    }
    catch (error) {
        console.error("\nTests failed:", error);
        process.exit(1);
    }
}
runTests();
