## 2025-05-18 - Mass Assignment Privilege Escalation in Registration
**Vulnerability:** User registration endpoint (`POST /register`) accepted a `role` field directly from request body `req.body`, allowing users to self-assign the `admin` role upon registration.
**Learning:** Accepting unvalidated or un-whitelisted request payload fields directly into service methods or database creation calls enables mass assignment, permitting unauthorized privilege escalation.
**Prevention:** Controllers and handlers must explicitly destructure only allowed fields from request payloads, and registration logic must hardcode default non-privileged roles (e.g. `user`) rather than permitting caller overrides.
