## 2025-05-22 - Mass Assignment in Registration

**Vulnerability:** Registration endpoint was accepting a `role` field from the request body, allowing anyone to register as an 'admin'.

**Learning:** Mass Assignment is common when entire objects are passed from request bodies to database services without explicit filtering.

**Prevention:** Always explicitly destructure only the required fields from `req.body` and hardcode or use safe defaults for sensitive fields like `role` or `permissions`.
