## 2026-08-05 - Mass Assignment and Sensitive Data Exposure Mitigation in Mongoose and Express

**Vulnerability:**
1. Mass Assignment: The register endpoint was accepting an optional `role` parameter from `req.body` directly and forwarding it to the database creation, allowing any registering user to escalate their privilege to the 'admin' role.
2. Sensitive Data Exposure: The user service returned full MongoDB user documents, including the bcrypt hashed password, which was then serialized directly into Express JSON API responses.

**Learning:**
1. In Express controllers, relying on full request body forwarding (`req.body`) introduces Mass Assignment risks. Controller parameters must be explicitly destructured and strictly checked.
2. MongoDB documents in Mongoose should utilize schema-level transforms to strip private keys/secrets before serialization (e.g., `toJSON` and `toObject` hooks). Using the `delete` operator in TypeScript on non-optional fields leads to compiler errors, hence ES6 object destructuring is the preferred pattern for clean deletion (e.g., `const { password, ...rest } = ret; return rest;`).

**Prevention:**
1. Explicitly destructure allowed fields in Express request validation/controllers rather than passing the whole `req.body` to the service layer.
2. Implement schema-level `toJSON` and `toObject` transforms on all Mongoose models handling sensitive credentials, and utilize TypeScript-safe object destructuring to filter out password fields.
