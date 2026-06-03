## 2025-02-13 - Mass Assignment and Sensitive Data Exposure

**Vulnerability:** The application was vulnerable to Mass Assignment in the user registration endpoint, allowing users to register with an 'admin' role. Additionally, sensitive user data (passwords) were leaked in JSON responses due to missing serialization transformations.

**Learning:** Destructuring \`req.body\` directly into service methods without filtering allowed unexpected fields to be processed. Mongoose models return all schema fields by default unless explicitly transformed.

**Prevention:** Always explicitly destructure only required fields in controllers. Implement \`toJSON\` and \`toObject\` transformations in Mongoose schemas to ensure sensitive fields are never leaked by default.
