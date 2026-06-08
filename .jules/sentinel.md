## 2025-05-14 - Mass Assignment in Registration
**Vulnerability:** Users could escalate their privileges to 'admin' by providing a `role` field during registration.
**Learning:** The registration controller and service were passing the entire `req.body` or an un-sanitized object to the user creation logic, which included the `role` field.
**Prevention:** Always explicitly destructure only allowed fields from the request body in controllers and hardcode sensitive defaults (like role='user') in the service layer for public-facing endpoints.
