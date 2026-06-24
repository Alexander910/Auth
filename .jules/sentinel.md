## 2026-06-22 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint allows users to specify their own `role` (e.g., 'admin') in the request body, leading to privilege escalation.
**Learning:** Destructuring the entire `req.body` or passing through untrusted fields directly to database creation methods is a common source of Mass Assignment vulnerabilities.
**Prevention:** Always explicitly destructure only the allowed fields from the request body in the controller and enforce default values for sensitive fields in the service or schema.

## 2026-06-22 - Sensitive Data Exposure (Password Leak)
**Vulnerability:** The hashed password is included in the User object returned by the API because there are no Mongoose transformations to exclude it.
**Learning:** Mongoose models return all fields by default, including sensitive ones, unless specifically excluded in the schema transformations (`toJSON`/`toObject`).
**Prevention:** Implement `transform` functions in the schema's `toJSON` and `toObject` options to delete sensitive fields like `password` before the data is sent to the client.
