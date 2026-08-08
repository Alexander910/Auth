## 2025-05-18 - Fix Mass Assignment in User Registration
**Vulnerability:** Mass Assignment/Privilege Escalation during user registration.
**Learning:** The registration endpoint originally accepted any payload fields (including `role`) and forwarded them directly to `userService.createUser`. This allowed registering users to set their role to 'admin', thereby bypassing access control checks on admin routes.
**Prevention:** Destructure only expected/allowed fields (`name`, `email`, `password`) in the request controller and hardcode or strictly default the assigned role to a non-privileged value (`"user"`) in the backend registration logic.
