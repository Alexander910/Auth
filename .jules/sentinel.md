## 2026-05-01 - Prevent Mass Assignment in User Registration
**Vulnerability:** The registration controller destructured `role` from `req.body` and passed it to `AuthService.register`, allowing untrusted users to register with the `admin` role and bypass authorization checks on administrative routes.
**Learning:** Even if the database model defaults a field like `role` to `'user'`, accepting that field from request payloads overrides the default unless explicitly filtered at the controller or service layer.
**Prevention:** Explicitly destructure only allowed fields (`name`, `email`, `password`) in registration/user creation endpoints, and hardcode or enforce safe defaults (`role: "user"`) in business logic services.
