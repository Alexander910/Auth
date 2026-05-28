import { AuthService } from "./dist/auth/auth.service.js";
import { User } from "./dist/users/users.js";
import dotenv from "dotenv";
dotenv.config();
async function testVulnerabilities() {
    console.log("Testing for security vulnerabilities...");
    const authService = new AuthService();
    // 1. Check Mass Assignment in AuthService
    console.log("\n1. Checking Mass Assignment vulnerability in AuthService.register...");
    const registerMethod = authService.register.toString();
    if (registerMethod.includes("role") && (registerMethod.includes("role||") || registerMethod.includes("role ||"))) {
        console.log("❌ VULNERABILITY: AuthService.register accepts a 'role' parameter and uses it directly.");
    }
    else {
        console.log("✅ SUCCESS: AuthService.register seems to handle roles securely.");
    }
    // 2. Check Password Exposure in User model (via static analysis of dist file)
    console.log("\n2. Checking for Password Exposure in User model...");
    // Read the compiled users.js to see if transformations are present
    const fs = await import("fs");
    const usersJs = fs.readFileSync("./dist/users/users.js", "utf8");
    if (usersJs.includes("transform") || usersJs.includes("toJSON") || usersJs.includes("toObject")) {
        console.log("✅ SUCCESS: User model seems to have transformations (likely for security).");
    }
    else {
        console.log("❌ VULNERABILITY: User model lacks transformations to hide sensitive fields like password.");
    }
}
testVulnerabilities().catch(console.error);
