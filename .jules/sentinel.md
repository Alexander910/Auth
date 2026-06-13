## 2025-05-22 - Mass Assignment in Registration

**Vulnerability:** The registration endpoint allowed users to self-assign the 'admin' role by including it in the request body, which was then passed directly to the database creation logic.

**Learning:** Destructuring `req.body` without an explicit allowlist or hardcoding sensitive fields in the service layer leads to privilege escalation. In this codebase, `AuthService.register` was accepting an optional `role` parameter that defaulted to 'user' but could be overridden by user input.

**Prevention:** Always destructure only the necessary fields in controllers and enforce sensitive field values (like `role`) in the business logic or service layer, especially during public registration processes.
