## 2025-05-22 - [Sensitive Data Exposure & Mass Assignment Fixes]
**Vulnerability:** User passwords were leaked in API responses, and the registration endpoint allowed users to self-assign the "admin" role.
**Learning:** Default Mongoose serialization includes all fields, and direct usage of `req.body` for model creation without filtering is dangerous.
**Prevention:** Use Mongoose schema transformations (`toJSON`, `toObject`) to exclude sensitive fields globally, and always destructure specific allowed fields in controllers.
