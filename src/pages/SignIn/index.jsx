import { useState } from "react";

import { Input } from "../../components/Input";
import { Background, ContainerSignin, Form } from "./styled";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/contextAuth";

export function Signin() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <ContainerSignin>
      <Form>
        <h1>Seu App</h1>
        <p>Gerenciar links uteis</p>
        <h2>Login</h2>
        <label>
          <Input
            placeholder="Email"
            type="email"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/Signup">Criar Conta</Link>
      </Form>
      <Background />
    </ContainerSignin>
  );
}
