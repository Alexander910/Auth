# Sentinel's Journal

## 2025-05-15 - Mass Assignment and Sensitive Data Exposure
**Vulnerability:** The registration endpoint allowed users to specify their own `role`, potentially granting themselves 'admin' privileges. Additionally, user objects returned by the API included the `password` field.
**Learning:** Destructuring `req.body` without a whitelist (e.g., `{...req.body}`) or including sensitive fields like `role` in the destructuring list exposes the application to Mass Assignment. Mongoose models without explicit serialization transforms can leak sensitive internal fields like `password`.
**Prevention:** Always explicitly destructure only the required fields from `req.body` in controllers. Use Mongoose `toJSON` and `toObject` transforms to globally exclude sensitive fields from serialized output.
