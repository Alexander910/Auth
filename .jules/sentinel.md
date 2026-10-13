## 2026-05-01 - Privilege Escalation via Mass Assignment on User Registration
**Vulnerability:** Public user registration accepted a `role` field directly from request body (`req.body`), allowing any client to register an account with `role: "admin"`.
**Learning:** Express routes and auth services passed unvalidated `req.body` parameters directly down to database creation methods without filtering or destructuring allowed fields.
**Prevention:** Always explicitly destructure only allowed fields from `req.body` in controllers, and enforce immutable default roles (e.g. `user`) at the service layer for public registration endpoints.
