## 2025-05-14 - Mass Assignment in Registration
**Vulnerability:** User registration endpoint accepted a `role` field from the request body, allowing any user to register as an 'admin'.
**Learning:** The application destructured the entire `req.body` and passed it to the `register` service, which then passed it to `createUser` without sanitizing the `role` field.
**Prevention:** Explicitly destructure only allowed fields (name, email, password) from the request body in controllers and hardcode sensitive defaults like `role: "user"` in the service layer for public-facing registration logic.
