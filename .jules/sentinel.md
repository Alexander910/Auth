## 2026-05-18 - Mass Assignment in User Registration Flow
**Vulnerability:** A user registration API endpoint accepted a `role` parameter in the request body and directly propagated it to the service logic, enabling unauthorized privilege escalation (e.g., self-assigning the "admin" role).
**Learning:** Accepting full unstructured request body or passing extra parameters like `role` during registration without strict sanitization/destructuring allows malicious users to override critical, privilege-associated schema fields.
**Prevention:** Explicitly destructure only non-sensitive, allowed registration parameters (`name`, `email`, `password`) in controllers, and hardcode the registration role to "user" inside the core service layer.
