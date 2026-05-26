## 2025-05-15 - Mass Assignment and Sensitive Data Exposure
**Vulnerability:**
1. Mass Assignment: Users could self-assign the 'admin' role during registration by including a `role` field in the request body.
2. Sensitive Data Exposure: The `password` field was included in the user object returned by the API, leaking hashed passwords.
**Learning:**
1. Destructuring `req.body` without explicitly selecting allowed fields can lead to Mass Assignment vulnerabilities.
2. Mongoose models return all fields by default unless transformations or projections are used.
**Prevention:**
1. Explicitly destructure only required fields from `req.body` in controllers.
2. Use Mongoose `toJSON` and `toObject` transformations to globally exclude sensitive fields like `password`.
