## 2025-05-15 - Mass Assignment and Sensitive Data Exposure

**Vulnerability:** The registration endpoint allowed users to specify their own `role`, leading to potential privilege escalation to `admin`. Additionally, API responses included the hashed `password` field, and login errors were specific enough to allow account enumeration.

**Learning:** Express controllers that pass `req.body` directly to services without strict destructuring or validation are prone to Mass Assignment. Mongoose models require explicit transformation configuration to prevent sensitive fields from being serialized in JSON responses.

**Prevention:** Always destructure only allowed fields from `req.body` in controllers. Use Mongoose's `toJSON` and `toObject` transforms to globally mask sensitive fields like `password`. Use generic error messages for authentication failures.
