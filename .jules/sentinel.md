# Sentinel Journal

## 2026-08-11 - Mass Assignment and Sensitive Data Exposure in User API
**Vulnerability:** User registration endpoint accepted the `role` parameter directly from client-supplied request bodies, enabling privilege escalation to "admin" status. Additionally, the database schema returned raw password hashes in JSON responses when serializing User documents.
**Learning:** These vulnerabilities occurred due to a lack of explicit parameter destructuring/filtering on the controller layer, combined with missing Mongoose serialization transforms (`toJSON`/`toObject`) at the database schema layer.
**Prevention:** Always explicitly destructure only safe, allowed fields from `req.body` in registration and update controllers. Implement defense-in-depth on the model layer using mongoose transformations to automatically strip sensitive credentials like `password` before returning documents to the caller.
