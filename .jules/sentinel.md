## 2025-05-14 - Mass Assignment in User Registration
**Vulnerability:** The registration endpoint was accepting the `role` field directly from the request body, allowing any user to register as an 'admin'.
**Learning:** Destructuring `req.body` without filtering allowed unexpected fields to reach the service layer.
**Prevention:** Explicitly destructure only allowed fields in controllers and hardcode sensitive defaults (like `role: 'user'`) in the service layer.

## 2025-05-14 - Sensitive Data Exposure (Password Leakage)
**Vulnerability:** User objects returned from the database included the hashed `password` field, which was then leaked in API responses (register, login, current user).
**Learning:** Mongoose models include all schema fields in JSON serialization by default.
**Prevention:** Use Mongoose `toJSON` transformations to globally exclude sensitive fields like `password` from all API responses.
