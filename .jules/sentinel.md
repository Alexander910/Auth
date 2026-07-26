## 2025-05-22 - Mass Assignment Privilege Escalation in User Registration
**Vulnerability:** A mass assignment vulnerability existed where users could register themselves and directly set their own role to 'admin' by passing a `role` parameter in the request body.
**Learning:** Destructuring and passing the entire `req.body` (or arguments directly from it) into service models or user creation functions without explicit white-listing of properties can allow malicious users to overwrite/escalate privileged parameters like `role`.
**Prevention:** Explicitly destructure only non-privileged parameters (`name`, `email`, `password`) in the registration controller/service, and guarantee that the `role` is hardcoded to `'user'` at user creation time.
