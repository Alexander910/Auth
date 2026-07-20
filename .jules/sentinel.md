# Sentinel Security Journal

## 2026-05-01 - Preventing Privilege Escalation via Mass Assignment in User Registration

**Vulnerability:** The application allowed clients to supply a `role` field directly in the registration request body. This `role` was passed directly to the registration service and Mongoose model without validation or sanitization, allowing malicious users to assign themselves the "admin" privilege during registration.

**Learning:** Destructuring optional parameters directly from `req.body` and passing them down to service/DB layers without explicit filtering or hardcoding defaults exposes the application to Mass Assignment and Privilege Escalation vulnerabilities.

**Prevention:** Always sanitize user input at the controller boundary. Ensure sensitive fields (like user roles, permissions, or balance) are either ignored entirely during registration, or hardcoded to safe, default values (e.g. "user") on the server side.
