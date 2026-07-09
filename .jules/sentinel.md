## 2025-05-14 - Mass Assignment in User Registration
**Vulnerability:** The registration endpoint (`/register`) allowed users to specify their own `role` (e.g., 'admin') in the request body, which was then directly used to create the user account.
**Learning:** Destructuring `req.body` without filtering or using a whitelist of allowed fields can lead to unauthorized privilege escalation if internal fields like `role` are exposed.
**Prevention:** Always explicitly destructure only the necessary fields from request bodies in controllers and enforce default values for sensitive fields like `role` in the service layer.
