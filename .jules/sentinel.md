## 2025-05-15 - Mass Assignment and Sensitive Data Exposure in User Registration
**Vulnerability:** The registration endpoint allowed users to specify their own `role` (Mass Assignment), and the user object returned by the API included the hashed `password` (Sensitive Data Exposure).
**Learning:** Even when using a `UserService`, controllers must strictly destructure `req.body` to prevent attackers from injecting unauthorized fields. Additionally, Mongoose schemas should use `toJSON`/`toObject` transforms to ensure sensitive fields are never accidentally serialized.
**Prevention:** Always use allow-lists for request body destructuring in controllers and implement global or schema-level serialization filters for sensitive fields like passwords or internal flags.
