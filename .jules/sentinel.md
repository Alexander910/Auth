## 2025-05-15 - Mass Assignment and Account Enumeration in Auth Flow
**Vulnerability:** The registration endpoint allowed a 'role' field to be passed, enabling privilege escalation to 'admin'. Additionally, login error messages revealed whether a user existed.
**Learning:** Destructuring the entire request body without validation is a common source of Mass Assignment. Direct error messages in authentication reveal system state to attackers.
**Prevention:** Explicitly destructure only allowed fields from request bodies. Use generic error messages for authentication failures.
