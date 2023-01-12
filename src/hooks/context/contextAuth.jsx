import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";

export const ContextAuth = createContext({});

function AuthContextProvider({ children }) {
  const [data, setData] = useState({});
  //function signIn api = banco de dados
  async function signIn({ email, password }) {
    try {
      //enviando dados para o banco
      const res = await api.post("/session", { email, password });

      //destruc user e token
      const { user, token } = res.data;

      //enviando token para autenticação
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      //armazenando o token no usuario
      setData({ user, token });
      console.log(user);

      //toasta de entrada
      toast(`Bem vindo ${user.name} 👋`);

      //salvando no localstorage user e token
      localStorage.setItem("@notes:user", JSON.stringify(user));
      localStorage.setItem("@notes:token", token);
    } catch (error) {
      if (error.response) {
        toast.warn(error.response.data.message);
      } else {
        toast.warn("nao deu certo");
      }
    }
  }

  async function signOut() {
    //removendo token para deslogar
    localStorage.removeItem("@notes:token");
    localStorage.removeItem("@notes:user");
    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileuploadForm = new FormData();
        fileuploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileuploadForm);

        user.avatar = response.data.avatar;
       
      }

      await api.put("/users", user);
      localStorage.setItem("@notes:user", JSON.stringify(user));

      setData({ user, token: data.token });

      toast("atualizado com sucesso");
      
    } catch (error) {
      if (error.response) {
        toast(error.response.data.message);
      } else {
        toast("batata nao foi");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@notes:token");
    const user = localStorage.getItem("@notes:user");
    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <ContextAuth.Provider
      value={{ signIn, user: data.user, signOut, updateProfile }}
    >
      {children}
    </ContextAuth.Provider>
  );
}

function useAuth() {
  const contextAuth = useContext(ContextAuth);
  return contextAuth;
}

export { AuthContextProvider, useAuth };
