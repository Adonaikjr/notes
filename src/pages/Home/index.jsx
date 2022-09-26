import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { ContainerHome, Brand, Menu, Search, Content, NewNote } from './styled'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input'
export function Home(){
    return(
        <ContainerHome>

            <Brand>
            <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title='Todos' isActive/></li>
                <li><ButtonText title='React'/></li>
                <li><ButtonText title='Node'/></li>
            </Menu>
            <Search>
                <Input placeholder='Pesquisar pelo Titulo'
                icon={FiSearch } />
            </Search>
            <Content>
                
            </Content>
            <NewNote>
                <FiPlus/>Criar Nota
            </NewNote>
        </ContainerHome>
    )
}