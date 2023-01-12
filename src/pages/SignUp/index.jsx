import { Input } from "../../components/Input";
import { Background, ContainerSignup, Form } from "./styled";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../service/api";
import { toast } from "react-toastify";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleSignUp() {
    if ((!name, !email, !password)) {
      return toast.warn("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuario cadastrado");
        navigate('/')
      })
      .catch(error => {
        //mensagem de erro direto do backend
        if(error.response){
          toast.error(error.response.data.message)
        }else{
          toast.error('não foi possivel cadastrar')
        }
      });
  }

  return (
    <ContainerSignup>
      <Form>
        <h1>Seu App</h1>
        <p>Gerenciar links uteis</p>
        <h2>Criar</h2>
        <label>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para Login</Link>
      </Form>
      <Background />
    </ContainerSignup>
  );
}
