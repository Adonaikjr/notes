import { Input } from "../../components/Input";
import { Background, ContainerSignin, Form } from "./styled";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export function Signin(){
    return(
        <ContainerSignin>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Gerenciar links uteis</p>
                <h2>Login</h2>
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
                <Button title='Entrar' type='submit'/>
                <Link to='/Signup'>Criar Conta</Link>
            </Form>
            <Background/>
            
        </ContainerSignin>
    )
}