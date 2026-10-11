## 2026-05-01 - Prevent Mass Assignment on Public User Registration

**Vulnerability:** Public user registration endpoint accepted arbitrary `role` input from `req.body`, allowing unauthenticated users to self-assign the `admin` role during registration.
**Learning:** `req.body` properties passed directly to Mongoose models or service methods create Mass Assignment vectors when privileged fields like `role` share the same DTO as basic profile data.
**Prevention:** Explicitly destructure only non-sensitive fields (`name`, `email`, `password`) in controller endpoints and hardcode or enforce safe defaults (`role: "user"`) at the service boundary.
