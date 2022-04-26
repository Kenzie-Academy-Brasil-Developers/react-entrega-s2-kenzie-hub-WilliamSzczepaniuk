import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import api from "../../services/Api";

const Modal = ({ register, handleSubmit, setAppearModal }) => {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setAppearModal(false))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
        <div className="container_modal">
            <div className="container_register_tech">
                <h3>Cadastrar Tecnologia</h3>
                <button 
                className="button_X"
                onClick={() => setAppearModal(false)}>X</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    error={""}
                    name={"title"}
                    children={"Nome"}
                    placeholder={"Tecnologia"}
                    register={register}
                />
                <p>Selecionar Status</p>
                <select {...register("status")}>
                    <option value={"Iniciante"}>Iniciante</option>
                    <option value={"Intermediário"}>Intermediário</option>
                    <option value={"Avançado"}>Avançado</option>
                </select>
                <Button
                children={"Cadastrar Tecnologia"}
                background={"#FF577F"}
                type={"submit"}
            />
            </form>
        </div>
    </Container>
  );
};
export default Modal;
