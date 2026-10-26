## 2026-10-26 - Mass Assignment Privilege Escalation in User Registration

**Vulnerability:** Unauthenticated users could register as administrators by passing `role: "admin"` in the HTTP request body to the `/register` endpoint.
**Learning:** The registration controller destructured the entire request body including the `role` field and passed it to the authentication service, which forwarded it to the user creation service.
**Prevention:** Always explicitly destructure only allowed fields (`name`, `email`, `password`) in controller endpoints and hardcode or restrict privilege-assigning fields (like `role`) when handling public registration.
