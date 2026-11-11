## 2025-05-18 - Privilege Escalation via Registration Mass Assignment
**Vulnerability:** The registration controller destructured the `role` field directly from untrusted user input in `req.body` and forwarded it to `AuthService.register()`, allowing unauthenticated users to register accounts with administrative privileges (`role: "admin"`).
**Learning:** Even when Mongoose schema defaults `role` to `"user"`, passing an untrusted `role` field from the request payload will override the default and allow privilege escalation if authorization boundaries are not enforced at controller and service layers.
**Prevention:** Always explicitly whitelist allowed parameters in controller endpoints and hardcode initial roles (e.g., `role: "user"`) at the service layer for public registration flows.
