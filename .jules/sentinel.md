# Sentinel Security Journal

## 2026-10-31 - Mass Assignment Privilege Escalation in Registration
**Vulnerability:** The public user registration endpoint destructured `role` from `req.body` and passed it directly to `AuthService.register`, allowing untrusted users to register with `role: "admin"` and bypass administrative authorization checks.
**Learning:** Request bodies in user-facing registration endpoints should never trust client-provided privilege or role fields.
**Prevention:** Explicitly destructure only allowed registration fields (`name`, `email`, `password`) in the controller and enforce `role: "user"` in the registration service.
