## 2025-05-14 - Mass Assignment and Sensitive Data Exposure in User Registration

**Vulnerability:** The registration endpoint allowed clients to specify their own `role`, enabling privilege escalation to `admin`. Additionally, the User model returned the `password` hash in API responses.

**Learning:** Express controllers that pass `req.body` directly to service methods without explicit destructuring are prone to Mass Assignment. Mongoose models require explicit transformations to prevent sensitive field leakage during serialization.

**Prevention:** Always explicitly destructure only allowed fields from request bodies in controllers. Implement `toJSON` and `toObject` transformations in Mongoose schemas to automatically exclude sensitive fields like `password`.
