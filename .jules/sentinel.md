## 2026-10-18 - Mass Assignment in User Registration
**Vulnerability:** User registration endpoint (`/register`) accepted a `role` field directly from request body `req.body`, enabling unauthenticated callers to self-assign the `admin` role during account creation.
**Learning:** Passing unsanitized `req.body` properties or whole parameter objects to services/database models allows users to override unintended fields (privilege escalation).
**Prevention:** Controllers and services for public endpoints (such as registration) must explicitly destructure only allowed input fields (`name`, `email`, `password`) and strictly enforce standard system defaults (e.g. `role: "user"`).
