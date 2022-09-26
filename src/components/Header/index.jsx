import { HeaderContainer, ContainerProfile, ContainerLogout } from "./styled"
import { RiShutDownLine } from 'react-icons/ri'
export function Header(){
    return(
        <HeaderContainer>
            <ContainerProfile>
                <img src="https://github.com/adonaikjr.png" alt='foto user'/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>Adonai</strong>
                </div>
            </ContainerProfile>

            <ContainerLogout>
                <RiShutDownLine  />
            </ContainerLogout>

        </HeaderContainer>
    )
}