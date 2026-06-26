## 2026-06-25 - Mass Assignment in Registration Flow
**Vulnerability:** The registration endpoint (`/register`) accepted a `role` field from the request body, allowing users to self-assign the 'admin' role.
**Learning:** Controllers that blindly pass `req.body` to services can introduce privilege escalation vulnerabilities if the schema contains sensitive fields like roles.
**Prevention:** Explicitly destructure only allowed fields in the controller or hardcode default roles in the service layer to ensure only authorized fields are processed.

## 2026-06-25 - Sensitive Data Exposure in User Model
**Vulnerability:** The `User` model included the `password` field in its default JSON and Object representations, leading to the exposure of hashed passwords in API responses.
**Learning:** Mongoose models return all schema fields by default unless transformations are defined to exclude sensitive data.
**Prevention:** Use `toJSON` and `toObject` transformations with object destructuring to remove sensitive fields like `password` before data is sent to the client.
