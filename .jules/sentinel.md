## 2026-03-31 - Mass Assignment Privilege Escalation in User Registration

**Vulnerability:** The `/register` endpoint accepted a `role` property in the JSON request body and passed it directly to user creation logic, allowing unauthenticated attackers to self-assign the `"admin"` role upon account registration.

**Learning:** `auth.controller.ts` destructured `role` from `req.body` and passed it to `auth.service.ts` which defaulted to `"user"` only if `role` was missing (`role || "user"`).

**Prevention:** Always destructure only explicitly permitted fields (e.g., `name`, `email`, `password`) in controller endpoints, and enforce strict default roles (e.g. hardcoding `"user"`) in business/service logic for user registration.
