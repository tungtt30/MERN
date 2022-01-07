import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const RegisterForm = () => {
  //context
  const { registerUser } = useContext(AuthContext);

  //local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Password do not match" });
      setTimeout(() => setAlert(null), 4000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        //  history.push('/dashboard')

        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="my-4" onSubmit={register}>
        <AlertMessage info={alert} />

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            style={{ margin: "10px 0" }}
            value={username}
            onChange={onChangeRegisterForm}
            autoComplete="username"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            style={{ margin: "10px 0" }}
            value={password}
            onChange={onChangeRegisterForm}
            autoComplete="new-password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            style={{ margin: "10px 0" }}
            value={confirmPassword}
            onChange={onChangeRegisterForm}
            autoComplete="off"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        {" "}
        Have an account ???
        <Link to="/login">
          <Button
            variant="info"
            size="sm"
            style={{ margin: "0 10px" }}
            className="ml-2"
          >
            {" "}
            Login{" "}
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
