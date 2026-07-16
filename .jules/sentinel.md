## 2025-05-22 - Mass Assignment Protection in User Registration

**Vulnerability:** The registration endpoint (`/register`) allowed clients to specify the `role` field in the request body, enabling unauthorized privilege escalation to 'admin'.

**Learning:** The application architecture relied on destructuring `req.body` in the controller and passing the fields to the service layer without filtering or explicit mapping, which inherited the vulnerability from the client input.

**Prevention:** Always explicitly destructure only the allowed fields in the controller and hardcode default roles or use a whitelist for sensitive fields in the service layer when creating new resources from user input.
