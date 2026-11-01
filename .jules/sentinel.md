# Sentinel Security Journal

## 2026-11-01 - Privilege Escalation via Mass Assignment in User Registration
**Vulnerability:** The `/register` endpoint accepted a `role` parameter from `req.body` and passed it directly to `AuthService.register()`, which defaulted to `"user"` only if undefined. This allowed any unauthenticated client to register an account with `role: "admin"` and access protected admin endpoints (`/administrador`).
**Learning:** Request bodies should never be blindly trusted or directly passed to models or services with privileged attributes. Even if schema defaults exist, allowing clients to provide sensitive fields like `role` undermines authorization controls.
**Prevention:** Explicitly destructure only allowed registration fields (`name`, `email`, `password`) in controller handlers, and enforce the default non-privileged role (`"user"`) within domain services during user creation.
