# Sentinel Security Journal

## 2025-05-22 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** The user registration flow accepted a `role` field from `req.body`, allowing unauthorized privilege escalation to 'admin'.
**Learning:** Destructuring request bodies without explicit filtering or validation can allow users to assign themselves administrative roles.
**Prevention:** Always explicitly destructure only allowed fields from request bodies in registration and update controllers (e.g., `const { name, email, password } = req.body`) and hardcode or validate sensitive fields on the server side.

## 2025-05-23 - Sensitive Data Exposure (Password Hash) in API Responses
**Vulnerability:** The authenticated user's details returned from `/register`, `/login`, and `/user` endpoints included the hashed password because the Mongoose document was serialized to JSON directly without filtering.
**Learning:** Express `res.json(document)` serializes the entire MongoDB document including private fields like passwords if no schema-level transformations or explicit projections are configured.
**Prevention:** Configure Mongoose `toJSON` and `toObject` transforms in `src/users/users.ts` to automatically exclude the `password` field from serialization. Use object destructuring (e.g., `const { password, ...rest } = ret; return rest;`) instead of the `delete` operator to ensure TypeScript type safety.
