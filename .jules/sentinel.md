## 2026-11-06 - Mass Assignment in User Registration Flow
**Vulnerability:** The `/register` endpoint accepted a `role` field from the request payload and passed it through to `UserService.createUser()`. This allowed unauthenticated users to self-assign the `admin` role upon registration, completely bypassing authorization checks (such as `adminMiddleware`).
**Learning:** Accepting full request bodies or unrestricted role parameters during registration creates a direct privilege escalation vector when roles govern access control.
**Prevention:** Explicitly destructure only expected public registration fields (`name`, `email`, `password`) in controllers and enforce non-privileged defaults (`role: "user"`) at the service layer.
