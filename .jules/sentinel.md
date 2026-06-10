## 2025-05-15 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint allowed users to specify their own `role` in the request body, which was then passed directly to the database.
**Learning:** Destructuring `req.body` without explicitly filtering fields or hardcoding sensitive defaults in the service layer can lead to privilege escalation.
**Prevention:** Always use explicit destructuring of allowed fields in controllers and hardcode sensitive defaults (like roles) in the service layer.
