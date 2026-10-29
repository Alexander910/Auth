## 2026-05-01 - Mass Assignment / Privilege Escalation in Registration

**Vulnerability:** Unauthenticated users could supply `"role": "admin"` in the JSON payload when registering via `POST /register`, allowing unauthorized privilege escalation to administrator status.

**Learning:** The registration controller destructured `role` from `req.body` and passed it directly to `AuthService.register`, which passed it to `UserService.createUser`. Accept-all or permissive input handling in public registration routes allows users to manipulate internal domain fields.

**Prevention:** Public registration endpoints should strictly destructure only user-controlled fields (`name`, `email`, `password`) and explicitly enforce lower-privilege default roles (`"user"`) within domain services.
