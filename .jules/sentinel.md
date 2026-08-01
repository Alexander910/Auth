# Sentinel's Security Journal

## 2025-03-05 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** In the registration controller, the entire user-provided payload was accepted from `req.body` and passed directly to the registration service and database model, allowing users to specify a high-privilege `role` (e.g., "admin") during registration.
**Learning:** This occurred because the request body was destructured using `{ name, email, password, role }` and passed into the creation flow without input sanitization or filtering of sensitive fields.
**Prevention:** Implement strict destructuring in controllers to extract only non-sensitive user-provided properties. Always set sensitive attributes (such as `role` or privilege flags) directly to safe defaults (e.g., `"user"`) on the server side instead of accepting them from incoming requests.
