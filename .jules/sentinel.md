## 2026-06-25 - Mass Assignment in Registration

**Vulnerability:** The registration endpoint was accepting a `role` field directly from the request body and passing it to the user creation service. This allowed any user to register themselves with an 'admin' role.

**Learning:** Destructuring `req.body` without filtering or explicitly defining which fields are allowed can lead to privilege escalation if sensitive fields like `role` or `isAdmin` are present in the model.

**Prevention:** Always explicitly destructure only the required fields from `req.body` in controllers, or use a DTO/validation schema to whitelist allowed input fields. Ensure that sensitive fields are handled by business logic, not direct user input.
