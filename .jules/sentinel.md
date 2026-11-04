# Sentinel Security Journal

## 2026-05-01 - Mass Assignment Privilege Escalation in Registration Flow
**Vulnerability:** The `/register` endpoint accepted a `role` field directly from the untrusted request payload (`req.body`), allowing users to register themselves with `role: "admin"` and bypass route protection guarded by `adminMiddleware`.
**Learning:** Request controllers and service layer functions allowed optional role overrides directly from client input (`role: role || "user"`). Even if frontend interfaces do not expose a role selector, malicious actors can send arbitrary JSON payloads.
**Prevention:** Apply defense-in-depth by explicitly destructuring only permitted user-creatable fields in controllers (`name`, `email`, `password`) and strictly hardcoding default authorization levels (`role: "user"`) in the service layer when creating standard user accounts.
