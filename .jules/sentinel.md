## 2026-06-22 - Mass Assignment in Registration
**Vulnerability:** New users could self-assign the 'admin' role during registration by including a `role` field in the request body.
**Learning:** Destructuring the entire `req.body` or passing user-controlled parameters directly into service methods can lead to unauthorized data modification if not explicitly filtered.
**Prevention:** Always explicitly destructure only allowed fields from request bodies and hardcode or calculate sensitive fields like `role` within the service layer.
