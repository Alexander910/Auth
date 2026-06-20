## 2025-05-22 - Mass Assignment in Registration
**Vulnerability:** New users could assign themselves the 'admin' role by including it in the registration request body.
**Learning:** The application was destructuring the entire `req.body` and passing it down to the user creation logic, which honored the `role` field.
**Prevention:** Explicitly destructure only required fields (name, email, password) in the controller and hardcode the default role in the service layer to ensure it cannot be overridden by user input.
