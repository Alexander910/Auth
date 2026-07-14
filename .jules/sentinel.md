## 2025-05-22 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** User registration endpoint allowed the 'role' field to be passed in the request body, enabling privilege escalation to 'admin'.
**Learning:** Destructuring the entire request body or passing extra parameters to services without validation can lead to mass assignment vulnerabilities.
**Prevention:** Explicitly define allowed fields in controllers and enforce business logic (like default roles) in the service layer.
