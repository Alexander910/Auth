## 2026-05-01 - Privilege Escalation via Mass Assignment on User Registration

**Vulnerability:** Unauthenticated users registering via `POST /register` could pass `"role": "admin"` in the request body to grant themselves administrative permissions.
**Learning:** Controller destructured the entire `req.body` payload including the `role` field and forwarded it directly to the authentication service, allowing client control over sensitive user attributes.
**Prevention:** Always restrict controller input destructuring strictly to permitted user fields (`name`, `email`, `password`) and explicitly enforce non-privileged default roles (`user`) in registration services.
