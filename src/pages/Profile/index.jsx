import { Link, Navigate, useNavigate } from "react-router-dom";
import { Avatar, ContainerProfile, Form } from "./styled";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/context/contextAuth";
import avatarNull from "../../assets/nullAvatar.webp";
import { api } from "../../service/api";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordNew, setPasswordNew] = useState("");
  const [avatar, setAvatar] = useState(user.avatar);
  const [avatarFile, setAvatarFile] = useState();
  const [oldPass, setOldPass] = useState("");
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarNull ;
   
  async function handleUpdade() {
    const update = {
      name,
      email,
      password: passwordNew,
      old_pass: oldPass,
    };
    const userUpdate = Object.assign(user, update);

    await updateProfile({ user: userUpdate, avatarFile });
  }

  function handleSetAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  function handleBack() {
    navigate(-1);
  }
  return (
    <ContainerProfile>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatarUrl} alt="photo user" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleSetAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="text"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="text"
          icon={FiLock}
          onChange={(e) => setOldPass(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdade} />
      </Form>
    </ContainerProfile>
  );
}
