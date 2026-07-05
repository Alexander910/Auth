## 2025-05-14 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** The registration endpoint allowed users to specify their `role` (e.g., 'admin') in the request body, leading to unauthorized privilege escalation.
**Learning:** The application was directly passing destructured properties from `req.body` to the service layer without filtering for sensitive fields like `role`.
**Prevention:** Always explicitly destructure only the allowed fields from the request body in controllers and enforce default values for sensitive fields in the service layer or database schema.
