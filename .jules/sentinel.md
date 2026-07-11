## 2025-05-15 - Mass Assignment and Sensitive Data Exposure Prevention

**Vulnerability:** User registration allowed the `role` field to be passed in the request body, enabling privilege escalation to 'admin'. Additionally, User documents returned the `password` hash and `__v` field in API responses.

**Learning:** Express controllers that destructure the entire `req.body` or pass it directly to services are susceptible to Mass Assignment. Mongoose models return all fields by default unless transformations are applied.

**Prevention:**
1. Always explicitly destructure only allowed fields in controllers before passing them to services.
2. Hardcode sensitive fields (like `role`) to safe defaults in the service layer during creation.
3. Implement `toJSON` and `toObject` transforms in Mongoose schemas to globally exclude sensitive fields from serialization.
