import { FormLoginStyled } from "./styles";
import Button from "../Button";
import Input from "../Input";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/Api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

const FormLogin = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        toast.success("Login efetuado");
        return history.push("/home");
      })
      .catch((_) => {
        toast.error("Email ou senha inválido");
        console.log(_);
      });
  };

  if (authenticated === true) {
    return <Redirect to="/home" />;
  }

  return (
    <FormLoginStyled onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <Input
        name={"email"}
        register={register}
        children={"Email"}
        placeholder="Digite aqui seu email"
        error={errors.email?.message}
      />
      <Input
        name={"password"}
        register={register}
        children={"Senha"}
        placeholder="Digite aqui sua senha"
        error={errors.password?.message}
      />
      <Button type={"submit"} background={"#FF577F"} children={"Entrar"} />
      <p>Ainda não possui uma conta?</p>
      <Button background={"#868E96"}>
        <Link to={"/register"}>Cadastre-se</Link>
      </Button>
    </FormLoginStyled>
  );
};
export default FormLogin;

//form com um titulo central LOGIN
// 2 inputs um mpara email e outro para senha cada um com uma descricao a cima
//button ENTRAR
//paragrafo ainda nao possui uma conta?
//button cadastre-se
