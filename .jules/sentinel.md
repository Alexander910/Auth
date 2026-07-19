## 2025-05-22 - Mass Assignment Privilege Escalation in User Registration
**Vulnerability:** The registration endpoint destructured `role` from the request body (`req.body`) and passed it directly to the registration service, allowing arbitrary users to self-assign the `admin` role during registration and gain full administrative access.
**Learning:** Accepting full request bodies or blindly destructuring uncontrolled parameters like `role` during state-changing operations introduces critical Mass Assignment vulnerabilities.
**Prevention:** Strictly limit request body destructuring to only authorized inputs (e.g., `name`, `email`, `password`) in controller layers and enforce default secure roles (e.g., hardcoded `"user"`) at the service layer when creating resources.
