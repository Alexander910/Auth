# Sentinel's Journal - Critical Security Learnings

## 2025-05-14 - [Mass Assignment and Sensitive Data Exposure]
**Vulnerability:** Registration endpoint allowed setting `role` via `req.body`, and hashed passwords were leaked in JSON responses.
**Learning:** Default Mongoose behavior includes all fields in JSON/Object conversion. Controller-level destructuring is necessary but not sufficient if the service layer also accepts the same payload.
**Prevention:** Always use Mongoose transformations (`toJSON`/`toObject`) to exclude sensitive fields like `password`. Explicitly destructure only allowed fields in controllers to prevent mass assignment of sensitive fields like `role`.
