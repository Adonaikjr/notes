import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { api } from "../../service/api";

import {
  ContainerSignin,
  ContainerLinks,
  Content,
  ContentSection,
} from "./styled";

export function App() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  //recuperar parametro da rota exemplo /:id
  const params = useParams();

  async function handleRemoveNote() {
    //confirmação para deletar a nota
    const YesDeleteNote = window.confirm(
      "Deseja excluir está nota permanentemente?"
    );
    if (YesDeleteNote) {
      await api.delete(`/notes/${params.id}`);
      toast('Nota deletada com sucesso!')
      navigate(-1)
    }
  }

  useEffect(() => {
    async function FetchNotes(id) {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      
    }
    FetchNotes();
  }, []);
  return (
    <ContainerSignin>
      <Header />
      {data && (
        <main>
           <ButtonText
              onClick={handleRemoveNote}
              title="Excluir nota"
              isActive
            />
          <Content>

            <Section title={<h1>Title: {data.title}</h1>}/>
            <Section title={<p>Descripção: {data.description}</p>}/>
            
            <ContentSection>
              {data.links && (
                <Section title="Links uteis">
                  <ContainerLinks>
                    {data.links.map((link) => {
                      return (
                        <li key={String(link.id)}>
                          {" "}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.url}
                          </a>{" "}
                        </li>
                      );
                    })}
                  </ContainerLinks>
                </Section>
              )}
            </ContentSection>
            <ContentSection>
              {data.tags && (
                <Section title="Tags">
                  {data.tags.map((tag) => {
                    return <Tags key={String(tag.id)} title={tag.name} />;
                  })}
                </Section>
              )}
            </ContentSection>
            <Button title="Voltar" onClick={() => navigate("/")} />
          </Content>
        </main>
      )}
    </ContainerSignin>
  );
}
