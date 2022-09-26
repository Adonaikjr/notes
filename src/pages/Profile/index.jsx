import { Link } from "react-router-dom";
import { Avatar, ContainerProfile, Form } from "./styled";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <ContainerProfile>
            <header>
                <Link to='/home'>
                    <FiArrowLeft  />
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src='https://github.com/adonaikjr.png' alt="photo user" />
                    <label htmlFor="avatar" >
                    <FiCamera/>
                    <input type="file" id="avatar" />
                </label>
                </Avatar>

                
                <Input
                placeholder='Nome'
                type='text'
                icon={FiUser}
                />

                <Input
                placeholder='E-mail'
                type='email'
                icon={FiMail}
                />
                <Input
                placeholder='Senha atual'
                type='password'
                icon={FiLock}
                />
                 <Input
                placeholder='Nova senha'
                type='password'
                icon={FiLock}
                />

                <Button title='Salvar'/>
            </Form>
        </ContainerProfile>
    )
}