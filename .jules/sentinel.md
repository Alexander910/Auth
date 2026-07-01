## 2026-07-01 - Mass Assignment in Registration

**Vulnerability:** The registration endpoint (`/register`) and its associated service (`AuthService.register`) allowed clients to specify a `role` field. This enabled any user to register as an 'admin' by simply including `"role": "admin"` in the request body.

**Learning:** Mass Assignment vulnerabilities occur when an application takes user-provided data and binds it to internal models or service calls without proper filtering. In this case, both the controller and service were blindly passing the `role` parameter to the database layer.

**Prevention:** Always use explicit destructuring or allow-lists to extract only the necessary fields from request bodies. Sensitive fields like `role`, `permissions`, or `balance` should be hardcoded to safe defaults or managed through separate, restricted administrative interfaces.
