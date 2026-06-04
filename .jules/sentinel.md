## 2025-05-14 - Mass Assignment and Sensitive Data Exposure

**Vulnerability:**
1. Mass Assignment: The user registration endpoint allowed the `role` field to be passed in the request body, enabling users to self-assign the 'admin' role.
2. Sensitive Data Exposure: The `User` model returned the hashed `password` field in API responses for registration, login, and current user endpoints.

**Learning:**
1. Mongoose models return all defined fields by default unless explicitly excluded in the query or via schema-level transformations (`toJSON`/`toObject`).
2. Express controllers that use object destructuring without strict property picking are susceptible to mass assignment if the internal service accepts those properties.

**Prevention:**
1. Always pick specific allowed fields from `req.body` in controllers.
2. Use Mongoose schema transforms to automatically remove sensitive fields like `password` during serialization.
