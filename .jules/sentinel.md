## 2025-05-18 - Mass Assignment Privilege Escalation in User Registration
**Vulnerability:** Unauthenticated registration requests allowed arbitrary `role` property (e.g. `role: "admin"`) in JSON request body to be passed directly from controller to service, granting administrative privileges.
**Learning:** Destructuring request bodies without explicit key whitelisting in Express controllers enables Mass Assignment vulnerabilities when models accept sensitive field values directly.
**Prevention:** Always destructure only explicitly allowed fields in registration and update endpoints, and enforce immutable defaults for sensitive fields like user roles in authentication services.
