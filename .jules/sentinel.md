## 2025-05-18 - Mass Assignment Privilege Escalation in Registration

**Vulnerability:** The registration endpoint accepted `role` from `req.body` and passed it directly to the user creation logic, allowing any registering user to assign themselves the `admin` role and bypass authorization controls.

**Learning:** Express controller endpoints that accept whole request bodies or destructure unvalidated privileged fields (like `role`) enable mass assignment vulnerability patterns if passed directly down to application services or database models.

**Prevention:** Controllers and services must explicitly destructure only allowed input fields (`name`, `email`, `password`) and strictly enforce default non-privileged values (e.g., `role: "user"`) during account registration.
