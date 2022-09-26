import { Input } from "../../components/Input";
import { Background, ContainerSignup, Form } from "./styled";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Signup(){
    return(
        <ContainerSignup>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Gerenciar links uteis</p>
                <h2>Criar</h2>
                <Input 
                placeholder='Nome'
                type='text'
                icon={FiUser}
                />
                <Input 
                placeholder='Email'
                type='email'
                icon={FiMail}
                />
                <Input 
                placeholder='Senha'
                type='password'
                icon={FiLock}
                />
                <Button title='Cadastrar' type='submit'/>
                <Link to='/Signin'>Voltar para Login</Link>
            </Form>
            <Background/>
            
        </ContainerSignup>
    )
}