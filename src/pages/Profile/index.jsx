import { Link } from "react-router-dom";
import { Avatar, ContainerProfile, Form } from "./styled";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";


export function Profile(){
    const { user } = useAuth();
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState()
    const [passwordOld, setPasswordNew] = useState()



    return(
        <ContainerProfile>
            <header>
                <Link to='/'>
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
                value={name}
                onChange={ e => (e.target.value) }

                />

                <Input
                placeholder='E-mail'
                type='email'
                icon={FiMail}
                value={email}
                onChange={ e => (e.target.value) }
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