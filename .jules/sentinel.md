## 2026-07-03 - Mass Assignment in Registration
**Vulnerability:** User registration endpoint accepted arbitrary `role` field from the request body, allowing privilege escalation to 'admin'.
**Learning:** Destructuring `req.body` directly into service calls without filtering allowed unintended fields to be persisted in the database.
**Prevention:** Explicitly destructure only allowed fields in controllers and enforce default roles in services (defense in depth).
