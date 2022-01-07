import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const LoginForm = () => {
  //context
  const { loginUser } = useContext(AuthContext);

  //local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;
  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        //  history.push('/dashboard')
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} style={{ margin: "10px 0" }} />

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChangeLoginForm}
            name="username"
            style={{ margin: "10px 0" }}
            required
            autoComplete="username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangeLoginForm}
            name="password"
            style={{ margin: "10px 0" }}
            required
            autoComplete="current-password"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        {" "}
        Don't have an account?
        <Link to="/register">
          <Button
            variant="info"
            size="sm"
            style={{ margin: "0 10px" }}
            className="ml-2"
          >
            {" "}
            Register{" "}
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
