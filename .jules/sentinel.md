## 2025-05-14 - Mass Assignment in Registration
**Vulnerability:** User registration endpoint allowed users to specify their own `role` in the request body, potentially escalating their privileges to 'admin'.
**Learning:** Implicit trust in request body during object creation can lead to privilege escalation.
**Prevention:** Explicitly destructure only allowed fields from `req.body` and hardcode sensitive defaults in the service layer.
