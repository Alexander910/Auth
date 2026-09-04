## 2025-03-05 - Mass Assignment in User Registration
**Vulnerability:** User registration allowed unauthenticated clients to specify `role: "admin"` in `req.body`, granting unauthorized administrative privileges during account creation.
**Learning:** Controllers that forward `req.body` directly or extract untrusted parameters without whitelist destructuring expose the application to privilege escalation when models accept role fields.
**Prevention:** Explicitly destructure only non-sensitive parameters (`name`, `email`, `password`) in registration controllers and hardcode default non-privileged roles in service layer methods.
