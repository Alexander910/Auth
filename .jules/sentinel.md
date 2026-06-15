## 2025-05-14 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint allowed users to specify their own `role` in the request body, which was then passed directly to the user creation service. This allowed any user to register as an 'admin'.
**Learning:** Mass assignment vulnerabilities often occur when request bodies are passed directly to database models or service methods without explicit filtering.
**Prevention:** Always explicitly destructure only the allowed fields from request bodies and hardcode or calculate sensitive fields like roles on the server side.
