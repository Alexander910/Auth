## 2025-03-04 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** Mass Assignment. The user registration route was accepting a `role` field directly from the request body (`req.body`), allowing users to self-assign elevated privileges (such as the `'admin'` role) during registration.
**Learning:** Overly permissive destructuring or spreading of user input directly into DB queries or service methods exposes critical authorization properties to malicious manipulation.
**Prevention:** Strictly filter user input at the controller level or enforce explicit destructuring of only trusted fields. Hardcode default/safe values for sensitive fields in the backend core logic instead of accepting them from clients.
