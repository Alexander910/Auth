## 2026-03-30 - Privilege Escalation via Mass Assignment in Registration Controller
**Vulnerability:** The registration controller destructured `role` directly from `req.body` and passed it to the user registration service, allowing external clients to assign themselves the `admin` role during account creation.
**Learning:** Controllers that blindly forward properties from `req.body` without strict field whitelisting create Mass Assignment risks, especially when sensitive user properties like `role` or `permissions` are handled.
**Prevention:** Controllers and request handlers must explicitly destructure only allowed fields (`name`, `email`, `password`) from user requests and rely on server-defined defaults for sensitive fields.
