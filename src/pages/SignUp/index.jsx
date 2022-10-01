import { Input } from "../../components/Input";
import { Background, ContainerSignup, Form } from "./styled";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

import { api } from "../../service/api";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if ((!name, !email, !password)) {
      return alert("preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("usuario cadastrado sucess");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("nao foi possivel cadastrar");
        }
      });
    console.log(handleSignUp);
  }

  return (
    <ContainerSignup>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Gerenciar links uteis</p>
        <h2>Criar</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para Login</Link>
      </Form>
      <Background />
    </ContainerSignup>
  );
}
