## 2026-08-12 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** Mass assignment in the user registration flow allowed a client to specify their own `role` (e.g., `'admin'`) during registration, bypassing role boundaries.
**Learning:** Destructuring variables dynamically or passing raw `req.body` attributes directly into Mongoose constructors or creation services without explicit sanitization/filtering is highly risky and often leads to unauthorized privilege escalation.
**Prevention:** Always explicitly destructure and whitelist input fields in controllers and handlers before passing them to internal creation functions. Hardcode default/safe properties inside backend services to act as a secondary guard.
