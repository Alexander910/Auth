## 2025-05-15 - Initial Security Audit
**Vulnerability:** Identified Mass Assignment in registration and Sensitive Data Exposure (password hashes) in multiple endpoints.
**Learning:** The application was directly returning Mongoose documents to the client and destructuring all fields from `req.body` without filtering.
**Prevention:** Always filter user input during registration and ensure sensitive fields are removed from response objects.
