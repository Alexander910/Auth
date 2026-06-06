## 2025-05-14 - Mass Assignment Vulnerability in Registration
**Vulnerability:** The registration controller was destructuring the `role` field directly from the request body and passing it to the authentication service. This allowed any user to register themselves with an 'admin' role.
**Learning:** Destructuring `req.body` without a strict whitelist of fields can lead to mass assignment vulnerabilities, especially in authentication and profile update flows.
**Prevention:** Always explicitly destructure only the fields that are intended to be user-controllable, or use a validation library (like Zod or Joi) to enforce a strict schema on incoming request data.

## 2025-05-14 - Sensitive Data Leakage in User Model
**Vulnerability:** The `User` model did not have any transformations to hide the hashed password when a user object was serialized to JSON (e.g., in an API response).
**Learning:** Mongoose models return all fields by default unless specified otherwise. Even hashed passwords should not be leaked to the client.
**Prevention:** Implement `toJSON` and `toObject` transformations in Mongoose schemas to remove sensitive fields like `password`, `__v`, etc., before sending the object to the client.
