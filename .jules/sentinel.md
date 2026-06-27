## 2025-05-15 - Mass Assignment and Sensitive Data Exposure
**Vulnerability:** The registration endpoint accepted a `role` field from the request body, allowing any user to register as an 'admin'. Additionally, User objects returned in API responses included the hashed password.
**Learning:** Untrusted input from `req.body` was directly passed to the user creation service without filtering, and the Mongoose model lacked transformations to hide sensitive fields during serialization.
**Prevention:** Always explicitly destructure only allowed fields from request bodies in controllers. Implement Mongoose `toJSON` and `toObject` transforms to ensure sensitive data like passwords are never leaked in API responses.
