## 2025-05-15 - [Mass Assignment and Sensitive Data Exposure]
**Vulnerability:** Mass Assignment in registration endpoint allowed users to self-assign the 'admin' role. Also, sensitive data (password) was being leaked in API responses.
**Learning:** Destructuring `req.body` without explicitly selecting allowed fields can lead to privilege escalation. Mongoose models should have `toJSON` and `toObject` transforms to ensure sensitive fields are excluded by default.
**Prevention:** Always use explicit destructuring for user-provided input and implement model-level transformations for sensitive data exclusion.
