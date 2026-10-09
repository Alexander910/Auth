## 2025-05-18 - Mass Assignment / Privilege Escalation in User Registration
**Vulnerability:** User registration endpoint (`/register`) accepted `role` directly from `req.body`, allowing unauthenticated users to self-assign the `admin` role upon registration.
**Learning:** Request body destructuring in controllers must explicitly white-list expected fields rather than passing whole bodies or optional privilege fields down to application services.
**Prevention:** Controllers and services responsible for user registration must explicitly accept only `name`, `email`, and `password`, and hardcode default roles or handle role assignment via restricted administrative workflows.
