# Sentinel Journal

## 2025-05-22 - Mass Assignment in User Registration
**Vulnerability:** The registration endpoint (`/register`) was accepting a `role` field directly from the request body. This allowed any user to register themselves with 'admin' privileges by simply including `"role": "admin"` in their registration request.
**Learning:** Destructuring `req.body` without filtering or explicitly defining allowed fields can lead to Mass Assignment vulnerabilities, especially when those fields control application logic or permissions.
**Prevention:** Always explicitly destructure only the required fields from request bodies, or use a allow-list/validation schema to filter input. Ensure that sensitive fields like `role` are either not accepted from user input or are strictly validated against the current user's permissions.
