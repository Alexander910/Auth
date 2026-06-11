# Sentinel Journal

This journal tracks critical security learnings and vulnerability patterns discovered in this codebase.

## 2025-05-22 - Mass Assignment & Sensitive Data Exposure
**Vulnerability:** The registration endpoint allowed users to specify their own `role`, potentially granting themselves 'admin' privileges. Additionally, User objects returned from the database included the hashed `password` field.
**Learning:** Destructuring `req.body` directly into service methods without filtering allows for Mass Assignment. Mongoose models by default include all schema fields when converted to JSON.
**Prevention:** Always explicitly destructure only allowed fields from request bodies. Use Mongoose transforms or projection to exclude sensitive fields like passwords from responses.
