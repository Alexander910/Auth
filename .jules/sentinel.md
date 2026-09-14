## 2025-05-14 - Mass Assignment Vulnerability in User Registration

**Vulnerability:**
The `POST /register` endpoint allowed clients to pass a `role` attribute in the JSON body, which was passed directly to the user creation logic, allowing unauthenticated users to self-assign the `admin` role.

**Learning:**
Controllers and services accepting request bodies without strict destructuring or DTO validation risk privilege escalation when models contain sensitive role fields.

**Prevention:**
Always explicitly destructure only expected user fields (`name`, `email`, `password`) in registration controllers and explicitly assign default non-privileged roles in domain services.
