import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { ContainerNew } from "./styled";

export function New(){
    return(
        <ContainerNew>
            <Header/>
            <main>
                <form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/home'>Voltar</Link>
                    </header>

                    <Input placeholder='title'/>
                    <TextArea placeholder='observacoes' />
                    <Section title='links uteis'>
                        <NoteItem value='exemplo'/>
                        <NoteItem isNew placeholder='Novo Link'/>
                    </Section>
                    
                    <Section title='Marcadores' >
                        <div className="tags">
                            <NoteItem value='react'/>
                            <NoteItem isNew placeholder='Nova Tags'/>
                        </div>
                    </Section>
                </form>
            </main>
        </ContainerNew>
    )
}