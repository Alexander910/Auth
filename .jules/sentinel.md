## 2025-02-15 - Mongoose Schema Serialization Sensitive Data Exposure
**Vulnerability:** User objects serialized into JSON or standard objects exposed password hashes in API responses, posing a severe security risk.
**Learning:** Returning Mongoose documents directly in response handlers triggers default serialization, which includes all schema fields (even hashed passwords) unless explicitly excluded via projections, field omission, or schema-level transforms.
**Prevention:** Configure `toJSON` and `toObject` transforms on the Mongoose schemas of all entities containing sensitive fields to ensure they are deleted or destructured out during serialization. Always use object destructuring instead of `delete` to avoid TypeScript operand compilation errors.
