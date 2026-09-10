## 2026-05-01 - Mass Assignment Privilege Escalation in User Registration

**Vulnerability:**
The user registration controller (`src/auth/auth.controller.ts`) extracted `role` directly from `req.body` and passed it to `AuthService.register`, allowing unauthenticated users to register as `admin` by specifying `"role": "admin"` in the request body.

**Learning:**
Passing raw request payloads or unvetted parameters directly to creation services introduces privilege escalation risks when fields like `role` are supported in lower-level model creation functions.

**Prevention:**
Always explicitly destructure only allowed fields (`name`, `email`, `password`) in controller layers for public endpoints, and hardcode default non-privileged role assignments in registration workflows.
