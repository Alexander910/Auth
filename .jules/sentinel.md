## 2025-05-18 - Mass Assignment and Sensitive Data Exposure
**Vulnerability:** Mass Assignment allowed users to register with the 'admin' role by providing it in the request body. Additionally, hashed passwords were being leaked in API responses.
**Learning:** Hardcoding default roles in the service layer and implementing centralized data transformations in the Mongoose schema is more robust than manual filtering in controllers. Using the `delete` operator in TypeScript on non-optional fields causes compilation errors (TS2790); object destructuring is a safer alternative.
**Prevention:** Always explicitly destructure only required fields from `req.body` and use Mongoose schema transformations to protect sensitive fields like `password`.
