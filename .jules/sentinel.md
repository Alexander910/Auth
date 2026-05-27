## 2025-05-15 - [Password Leakage & Mass Assignment]
**Vulnerability:** User passwords were leaked in API responses, and the registration endpoint allowed users to assign themselves an 'admin' role via mass assignment.
**Learning:** Mongoose models do not automatically exclude sensitive fields like `password` when converted to JSON or plain objects unless explicitly configured. Furthermore, destructuring `req.body` without specifically picking allowed fields can lead to mass assignment vulnerabilities.
**Prevention:** Use Mongoose transformations (`toJSON`, `toObject`) to automatically exclude sensitive fields from all model outputs. Always explicitly destructure only the required and allowed fields from `req.body` in controllers to prevent unauthorized field updates.
