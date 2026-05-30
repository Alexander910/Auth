## 2025-05-15 - Mass Assignment and Password Exposure
**Vulnerability:** New users could register with an 'admin' role by providing it in the request body, and the user's password hash was being returned in API responses.
**Learning:** Destructuring `req.body` without filtering allowed arbitrary fields to be passed to the database. Mongoose models return all fields by default unless transformations are defined.
**Prevention:** Always explicitly destructure only allowed fields from user input and implement `toJSON` transformations in Mongoose schemas to exclude sensitive data.
