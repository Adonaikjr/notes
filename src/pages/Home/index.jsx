import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import {
  ContainerHome,
  Menu,
  Search,
  Content,
  NewNote,
  ContentHome,
  ContainerArticle,
  Brand,
} from "./styled";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import avatarNull from "../../assets/nullAvatar.webp";
import { useAuth } from "../../hooks/context/contextAuth";


export function Home() {
  const navigate = useNavigate();
  const {user} = useAuth()
  const [tags, setTags] = useState([]);
  const [selectTag, setSelectTag] = useState([]);

  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState([]);



  function handleSelecTags(tagName) {
    if (tagName == "all") {
      return setSelectTag([]);
    }
    const removeSelecteTag = selectTag.includes(tagName);

    if (removeSelecteTag) {
      const filterTags = selectTag.filter((tag) => tag !== tagName);
      setSelectTag(filterTags);
    } else {
      setSelectTag((statePrev) => [...statePrev, tagName]);
    }
  }
  const avatarUrl = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarNull ;
  function handleDatailsNote(id) {
    navigate(`/details/${id}`);
  }
  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);
  useEffect(() => {
    async function FetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectTag}`
      );
      setNotes(response.data);
    }

    FetchNotes();
  }, [selectTag, search]);

  return (
    <ContainerHome>
      <ContentHome>
        <Menu>
          <Brand>
            <h1>Rocketseat
              <img src={avatarUrl} alt='photo avatar'/>
              <p>{user.name}</p>
            </h1>
            <ul>
              <li>
                <ButtonText
                  title="Todos"
                  isActive={selectTag.length === 0}
                  onClick={() => handleSelecTags("all")}
                />
              </li>
              {tags &&
                tags.map((tag) => {
                  return (
                    <li key={tag.id}>
                      <ButtonText
                        onClick={() => handleSelecTags(tag.name)}
                        isActive={selectTag.includes(tag.name)}
                        title={tag.name}
                      />
                    </li>
                  );
                })}
            </ul>
          </Brand>
          <NewNote to="/new">
            <FiPlus />
            Criar Nota
          </NewNote>
        </Menu>

        <ContainerArticle>
          <Header />
          <Search>
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar pelo Titulo"
              icon={FiSearch}
            />
          </Search>

          <Content>
            <Section title="Minhas notas">
              {notes.map((note) => {
                return (
                  <Note
                    key={String(note.id)}
                    data={note}
                    onClick={() => handleDatailsNote(note.id)}
                  />
                );
              })}
            </Section>
          </Content>
        </ContainerArticle>
      </ContentHome>
    </ContainerHome>
  );
}
