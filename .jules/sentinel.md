# Sentinel's Journal

## 2026-05-01 - Mass Assignment Privilege Escalation
**Vulnerability:** The registration controller and registration service accepted an optional `role` parameter from the request body (`req.body`). This allowed any registering user to explicitly set their role to `admin` during registration, bypassing the standard role privilege hierarchy.
**Learning:** This vulnerability existed because the request body was destructured with the `role` attribute directly passed to the creation function instead of using strict input validation/filtering, or hardcoding the role for public registration routes.
**Prevention:** Always explicitly define and destructure only the safe, allowed user parameters (such as `name`, `email`, and `password`) from `req.body` in public endpoints, and enforce a default safe role (such as `user`) inside registration service logic.
