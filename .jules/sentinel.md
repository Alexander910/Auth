# Sentinel Journal - Critical Security Learnings

## 2025-05-14 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint allowed users to specify their `role` in the request body, which was then passed directly to the database.
**Learning:** Destructuring `req.body` without an explicit allowlist in both the controller and service layers allowed for privilege escalation.
**Prevention:** Always destructure only the required fields from `req.body` in controllers and hardcode sensitive defaults (like `role: 'user'`) in the service layer for public-facing registration methods.

## 2025-05-14 - Sensitive Data Exposure in API Responses
**Vulnerability:** Mongoose documents were being returned in API responses without filtering, exposing the `password` hash.
**Learning:** Default Mongoose serialization includes all fields defined in the schema.
**Prevention:** Use `toJSON` and `toObject` transformations in the Mongoose schema to explicitly remove sensitive fields like `password`. Use object destructuring (`const { password, ...rest } = ret; return rest;`) for cleaner code and to avoid TypeScript issues with the `delete` operator.
