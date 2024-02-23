import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/authContext";

const ENDPOINT = "https://bytebazaar-api.onrender.com/auth/login";

function LoginForm() {
  const [input, setInput] = React.useState({
    email: "jane@jane.ja",
    password: "jane",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  // idle / loading / success / error
  const [status, setStatus] = React.useState("idle");
  const { isLogged, login, logout } = React.useContext(AuthContext);

  const id = React.useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  function handleChange(e) {
    setInput(() => ({ ...input, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: input.email,
          password: input.password,
        }),
      });
      const json = await response.json();

      if (json.token) {
        console.log(json);
        localStorage.token = json.token;
        login();
        setStatus("success");
        setInput(() => ({ email: "", password: "" }));
      } else {
        delete localStorage.token;
        logout();
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  // TODO... We are repeating login / logout tasks between here and Auth State. To be refactored!
  function formLogout() {
    logout();
    delete localStorage.token;
  }

  return (
    <>
      <h1>Login</h1>
      <p>
        This form sends a login request to a backend API. If the request is
        successful, the returned token is logged to the console. You can try it
        with the email &#39;jane@jane.ja&#39; and password &#39;jane&#39;.
      </p>
      <hr />
      {isLogged ? (
        <div style={{ color: "green" }}>You are logged in</div>
      ) : (
        <div style={{ color: "red" }}>You are not logged in</div>
      )}
      {!isLogged ? (
        <Form onSubmit={handleSubmit} className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id={emailId}
              disabled={status === "loading"}
              placeholder="Enter email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We don&#39;t share your information
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              id={passwordId}
              disabled={status === "loading"}
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              checked={showPassword}
              type="checkbox"
              label="Show password"
              onChange={toggleShowPassword}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Submitting..." : "Login"}
          </Button>
          {status === "success" && <p>Success!</p>}
          {status === "error" && <p>Something went wrong.</p>}
        </Form>
      ) : (
        <Button variant="primary" className="mt-3" onClick={formLogout}>
          Logout
        </Button>
      )}
    </>
  );
}

export default LoginForm;
