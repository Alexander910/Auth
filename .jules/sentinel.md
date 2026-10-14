## 2026-10-14 - Mass Assignment in User Registration

**Vulnerability:** The `/register` endpoint extracted the `role` property directly from `req.body` and passed it to the user creation service. This allowed unauthenticated users to register accounts with administrative privileges (`role: "admin"`).
**Learning:** Accepting unvalidated or raw request payloads directly into domain services creates privilege escalation and mass assignment risks.
**Prevention:** Controllers should explicitly destructure only allowed fields from request bodies, and core creation logic should enforce non-escalatable default permissions.
