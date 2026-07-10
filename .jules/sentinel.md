## 2025-05-15 - Mass Assignment in Registration
**Vulnerability:** Mass Assignment (Privilege Escalation) in the user registration endpoint.
**Learning:** The registration controller was destructuring the `role` field directly from `req.body` and passing it to the `AuthService.register` method, which then passed it to the database. This allowed attackers to grant themselves 'admin' privileges during signup.
**Prevention:** Always explicitly destructure only the allowed fields from user input in controllers and hardcode sensitive fields (like roles or permissions) to safe defaults in registration services.
