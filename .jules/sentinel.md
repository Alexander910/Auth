# Sentinel Journal

## 2025-05-22 - Mass Assignment prevention in user registration
**Vulnerability:** The registration endpoint was accepting a `role` field from the request body, allowing any user to register as an 'admin' (Mass Assignment).
**Learning:** Even if the database has a default value for a field, explicitly accepting the full request body in the controller or service can lead to privilege escalation if sensitive fields are not filtered.
**Prevention:**
- Explicitly destructure and pick only allowed fields from `req.body` in the controller.
- Ensure the service layer hardcodes or strictly validates sensitive fields like `role`.
- Maintain a change limit of under 50 lines for security PRs to ensure focused and reviewable changes.
