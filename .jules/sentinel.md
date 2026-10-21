## 2026-05-01 - Mass Assignment Privilege Escalation in Registration

**Vulnerability:** The registration controller and service previously accepted an optional `role` parameter directly from `req.body` without validation or sanitization, allowing attackers to self-assign the `admin` role upon registration.
**Learning:** Accepting full request bodies or unvalidated optional parameters in user creation/registration endpoints opens doors for Mass Assignment vulnerabilities and unintended privilege escalation.
**Prevention:** Always explicitly destructure only allowed fields (`name`, `email`, `password`) in controller endpoints and hardcode or strictly validate sensitive fields like roles on the backend service layer.
