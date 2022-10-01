import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { ContainerHome, Brand, Menu, Search, Content, NewNote } from './styled'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Link } from 'react-router-dom'
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
                <Section title='Minhas notas'>
                    <Note data={ 
                        {title: 'React', 
                            tags:[
                            {id:'1',name:'react'},
                            {id:'2', name:'rocketseat'}
                    ]} } >
                        
                    </Note>
                </Section>
            </Content>
            <NewNote to='/new'>
                <FiPlus/>Criar Nota
            </NewNote>
        </ContainerHome>
    )
}