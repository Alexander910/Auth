## 2025-05-15 - [Mass Assignment in User Registration]
**Vulnerability:** The registration endpoint accepted a `role` field from the request body, allowing any user to register as an 'admin'.
**Learning:** Destructuring `req.body` without filtering or explicitly hardcoding sensitive fields in the service layer can lead to privilege escalation.
**Prevention:** Always explicitly define which fields are allowed during creation/update operations, especially for sensitive fields like 'role', 'permissions', or 'balance'.

## 2025-05-15 - [Sensitive Data Exposure in API Responses]
**Vulnerability:** Hashed passwords were included in the User object returned by registration and login endpoints.
**Learning:** Default Mongoose serialization includes all schema fields, which can leak sensitive data like password hashes if not properly transformed.
**Prevention:** Use Mongoose transforms (`toJSON`, `toObject`) to exclude sensitive fields globally from all serialized outputs.

## 2025-05-15 - [Account Enumeration via Login Errors]
**Vulnerability:** The login process returned different error messages for 'User not found' and 'Incorrect password', allowing attackers to verify if an email is registered.
**Learning:** Specific error messages in authentication flows provide side-channel information that can be used for targeted attacks or spam.
**Prevention:** Return a generic "Email or password incorrect" message for all authentication failures.
