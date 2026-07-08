## 2025-05-22 - Mass Assignment and Account Enumeration in Auth

**Vulnerability:** The user registration endpoint allowed passing a `role` parameter in the request body, which was directly passed to the database, enabling privilege escalation to 'admin'. Additionally, the login endpoint returned different error messages for 'user not found' vs 'incorrect password', allowing account enumeration.

**Learning:** Destructuring `req.body` without a strict whitelist of fields can lead to mass assignment if the underlying service or model accepts those fields. Insecure error handling in authentication flows often leaks information about the existence of accounts.

**Prevention:** Always explicitly destructure only the required fields from request bodies in controllers. Use generic error messages for all authentication failures to prevent information leakage.
