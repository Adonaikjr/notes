import {
  HeaderContainer,
  ContentHeader,
  ContainerProfile,
  ContainerLogout,
} from "./styled";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/context/contextAuth";
import { api } from "../../service/api";
import avatarNull from '../../assets/nullAvatar.webp'
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarNull;
  function handleSignOut(){
   signOut()
   navigate('/')
  }

  return (
    <HeaderContainer>
      <ContentHeader>
        <ContainerProfile to="/profile">
          <img src={avatarUrl} alt={user.name} />
          <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
          </div>
        </ContainerProfile>

        <ContainerLogout onClick={handleSignOut}>
          <RiShutDownLine />
        </ContainerLogout>
      </ContentHeader>
    </HeaderContainer>
  );
}
