## 2025-08-03 - Mass Assignment Vulnerability in User Registration

**Vulnerability:** The application was extracting `role` from `req.body` during user registration and passing it to `userService.createUser()`, allowing any user to register themselves as an administrator.

**Learning:** Unsanitized user inputs and unconstrained destructuring of `req.body` directly mapped to model properties create an easy pathway for privilege escalation.

**Prevention:** Always explicitly destructure only allowed and expected parameters (`name`, `email`, `password`) in controller endpoints. In addition, backend service logic should explicitly hardcode sensitive fields like `role` to a secure default (e.g., `'user'`) during the creation flow rather than relying on optional parameters or user payload inputs.

## 2025-08-03 - Sensitive Data Exposure via Password Hash Leakage

**Vulnerability:** Responses from `/register`, `/login`, and `/user` endpoints returned the entire User document, including the hashed password string, exposing password hashes over the network.

**Learning:** Returning raw database documents or model instances without explicit schema transformations/serialization defaults can leak sensitive properties like credentials, facilitating offline brute-force attacks if a request is intercepted or logged.

**Prevention:** Configure Mongoose schema `toJSON` and `toObject` transformations to strip sensitive fields (using object destructuring rather than `delete` operators to maintain TypeScript safety) prior to serialization.
