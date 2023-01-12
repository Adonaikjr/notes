import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { api } from "../../service/api";
import {
  ContainerNew,
  Article,
  Label,
  Form,
  NewContainerSection,
} from "./styled";

export function New() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]); //Guardando os estados dos links
  const [newLink, setNewLink] = useState(""); //links para adicionar
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  //adicionando LINK
  function handleAddLink() {
    if (newLink === "") {
      toast("Adicione ao menos um LINK");
      return;
    }
    setLinks((stateProps) => [...stateProps, newLink]);
    setNewLink("");
  }
  //deltando o LINK
  function handleRemoveLink(deleted) {
    setLinks((stateProps) => stateProps.filter((link) => link !== deleted));
  }
  //adicionando TAG
  function handleAddTag() {
    if (newTag === "") {
      toast("Adicione ao menos uma TAG");
      return;
    }
    //pegando tydo
    setTags((stateProps) => [...stateProps, newTag]);
    setNewTag("");
  }
  //deletando a TAG
  function handleRemoveTag(deleted) {
    setTags((stateProps) => stateProps.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    try {
      if (!title || !description || !links || !tags) {
        toast("preencha todos os campos");
        return;
      }
      await api.post("/notes", {
        title,
        description,
        links,
        tags,
      });
      toast("Nota cadastrada com sucesso");

      setTitle("");
      setLinks("");
      setDescription("");
      setTags("");
      navigate("/");
      return;
    } catch (error) {
      toast("algo deu errado :/");
      return;
    }
  }

  return (
    <ContainerNew>
      <Header />
      <main>
        <Form>
          <Article>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </Article>

          <Label>
            <Input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>

          <TextArea
            placeholder="Observacoes"
            onChange={(e) => setDescription(e.target.value)}
          />

          <NewContainerSection>
            <Section title="Links uteis">
              <NoteItem
                isNew
                placeholder="Novo Link"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                onClick={handleAddLink}
              />

              {links.map((link, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={link}
                    onClick={() => {
                      handleRemoveLink(link);
                    }}
                  />
                );
              })}
            </Section>
          </NewContainerSection>

          <NewContainerSection>
            <Section title="Tags">
              <NoteItem
                isNew
                placeholder="Nova Tags"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />

              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    placeholder="Nova Tags"
                  />
                );
              })}
            </Section>
          </NewContainerSection>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </ContainerNew>
  );
}
