## 2026-06-22 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** The registration endpoint was destructuring the `role` field directly from `req.body` and passing it to the `AuthService.register` method, which then used it to create a new user. This allowed any user to register as an 'admin' by simply including `"role": "admin"` in their registration request.
**Learning:** Blindly trust user input from `req.body` for internal fields like `role` can lead to privilege escalation.
**Prevention:** Explicitly define which fields are allowed to be set by the user during registration and hardcode sensitive defaults (like `role: 'user'`) in the service layer. Avoid passing raw request body objects to service methods.
