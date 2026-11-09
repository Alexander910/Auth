## 2026-05-01 - User Registration Mass Assignment Privilege Escalation
**Vulnerability:** The `/register` endpoint accepted a `role` field directly from `req.body` and forwarded it through `AuthService.register` to user creation in MongoDB, allowing unauthenticated attackers to self-assign the `admin` role.
**Learning:** Request handlers should explicitly extract only permitted fields from user input, and sensitive authorization fields like `role` must be controlled exclusively by server-side business logic rather than client payloads.
**Prevention:** Whitelist accepted input fields in controllers and enforce default roles explicitly in auth services.
