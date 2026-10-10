## 2026-10-10 - Mass Assignment Privilege Escalation in User Registration

**Vulnerability:**
The user registration endpoint and service allowed clients to supply an optional `role` parameter in the request body, enabling unauthenticated users to register accounts with administrative privileges (`role: "admin"`).

**Learning:**
Passing unvalidated and un-whitelisted client request payloads directly down to application services and data access layers without stripping privileged parameters creates Mass Assignment vulnerabilities.

**Prevention:**
Always explicitly destructure only expected user-assignable fields in request controllers and hardcode fixed internal values (such as default roles) when creating domain entities.
