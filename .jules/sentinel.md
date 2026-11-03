## 2025-05-18 - Mass Assignment Privilege Escalation in Registration

**Vulnerability:** The registration endpoint in `auth.controller.ts` extracted `role` directly from `req.body` and passed it to `AuthService.register()`, allowing an attacker to assign themselves the `admin` role upon registration and bypass authorization checks on administrative routes.
**Learning:** Even if the Mongoose schema defaults `role` to `'user'`, accepting raw or unvetted role parameters during registration compromises the authorization boundary.
**Prevention:** Strictly allowlist input fields at the controller layer and enforce default roles at the service layer rather than accepting privilege-defining attributes from untrusted client input.
