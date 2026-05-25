## 2025-05-22 - Sensitive Data Exposure in Mongoose Models
**Vulnerability:** User password hashes were being included in API responses when returning user objects directly from the database.
**Learning:** Returning Mongoose documents directly without transformation or selection leaks internal fields.
**Prevention:** Use `toJSON` and `toObject` transformations in the schema to automatically exclude sensitive fields like `password`.

## 2025-05-22 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint was destructuring the `role` field from `req.body` and passing it to the service, allowing anyone to register as an 'admin'.
**Learning:** Accepting all fields from the request body without explicit allowlisting leads to privilege escalation.
**Prevention:** Explicitly destructure only the intended fields from `req.body` in the controller layer.
