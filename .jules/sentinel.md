## 2025-05-15 - Mass Assignment Privilege Escalation in User Registration
**Vulnerability:** The registration controller and service previously destructured and accepted the `role` parameter directly from client input (`req.body`), allowing any registered user to elevate their privileges to `admin` during signup.
**Learning:** Accepting unvalidated fields from `req.body` directly in controllers or services can lead to severe privilege escalation if the database schema supports administrative properties (e.g., `role`).
**Prevention:** Always destructure only explicitly allowed fields in the controller (e.g., `const { name, email, password } = req.body`) and hardcode or enforce safe default roles (e.g., `"user"`) in the registration service.
