## 2025-05-15 - Mass Assignment in User Registration
**Vulnerability:** The user registration endpoint allowed the `role` field to be passed in the request body, which was then directly used to create the user in the database.
**Learning:** Even with an `adminMiddleware` in place, if the registration logic doesn't strictly control which fields are accepted from the client, any user can self-assign the 'admin' role upon registration.
**Prevention:** Always explicitly destructure only the allowed fields (`name`, `email`, `password`) from `req.body` in controllers, and hardcode sensitive defaults (like `role: 'user'`) in the service layer when creating new resources.
