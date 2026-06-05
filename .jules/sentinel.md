## 2025-05-14 - Mass Assignment in User Registration

**Vulnerability:** The registration controller in `src/auth/auth.controller.ts` was destructuring the `role` field directly from `req.body` and passing it to the authentication service. This allowed any user to self-assign the 'admin' role during registration, leading to privilege escalation.

**Learning:** Trusting user-provided input for sensitive fields like roles without explicit filtering leads to significant security gaps. Even if the service layer has defaults, the controller's willingness to accept and forward the `role` parameter bypassed intended security constraints.

**Prevention:** Always explicitly destructure only the required, safe-to-edit fields from `req.body` in controllers. Avoid passing entire objects from requests to services or database models. Maintain a strict allow-list of fields that users are permitted to modify.
