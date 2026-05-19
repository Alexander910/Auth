## 2025-05-22 - [Mass Assignment and Sensitive Data Exposure]
**Vulnerability:** Registration endpoint allowed clients to self-assign the 'admin' role via the `role` field in the request body (Mass Assignment). Additionally, user responses (register and login) included the bcrypt password hash (Sensitive Data Exposure).
**Learning:** Destructuring `req.body` without filtering allowed fields can lead to privilege escalation. Returning raw Mongoose documents without transformations can leak sensitive fields.
**Prevention:** Always explicitly destructure only allowed fields from request bodies. Use Mongoose `toJSON` and `toObject` transforms with the exclusion pattern (`const { password, ...rest } = ret; return rest;`) to globally protect sensitive data.
