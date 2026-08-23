## 2026-05-01 - Mass Assignment Privilege Escalation in Registration
**Vulnerability:** The registration endpoint and auth service accepted a `role` parameter directly from `req.body` without filtering or validating user authorization, allowing unauthenticated registrants to assign themselves the `admin` role.
**Learning:** Controller endpoints should explicitly destructure only allowed fields from request bodies rather than passing full request payloads, and registration services must hardcode default non-privileged roles (e.g., 'user') unless administrative role assignment is performed via a dedicated, authorized endpoint.
**Prevention:** Always restrict accepted body payload fields in controllers and enforce privilege level defaults at the service/business logic layer.
