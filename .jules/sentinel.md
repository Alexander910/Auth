## 2025-05-15 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint allowed users to specify their `role` (e.g., "admin") in the request body, which was directly passed to the database creation logic.
**Learning:** Destructuring `req.body` without an explicit allowlist or hardcoding sensitive defaults like `role` can lead to privilege escalation.
**Prevention:** Always explicitly destructure only the fields intended to be provided by the user, and enforce default values for sensitive fields like `role` in the service layer.
