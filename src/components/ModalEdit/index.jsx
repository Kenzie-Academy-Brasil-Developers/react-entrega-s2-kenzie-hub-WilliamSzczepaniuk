import { Container } from "./styles";
import { ContainerDiv } from "./styles";
import Input from "../Input";
import api from "../../services/Api";

const ModalEdit = ({
  register,
  handleSubmit,
  idTech,
  nameTech,
  setAppearModalEdit,
}) => {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));


    const onSubmit = (data) => {
        console.log(data);
        api.put(`/users/techs/${idTech}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((_) => setAppearModalEdit(false));
    };
    const deleteTech = () =>{
        api.delete(`/users/techs/${idTech}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => setAppearModalEdit(false))
    }

  return (
    <Container>
      <ContainerDiv>
        <div className="Container_details">
          <h3>Tecnologia Detalhes</h3>
          <button
            className="button_X"
            onClick={() => setAppearModalEdit(false)}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            error={""}
            name={"title"}
            children={"Nome do projeto"}
            placeholder={nameTech}
          />
            <h4>Status</h4>
          <select {...register("status")}>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <div className="container_buttons">
            <button className="button_save" type="submit">Salvar alterações</button>
            <button onClick={()=>deleteTech()} type="submit">Excluir</button>
          </div>

        </form>
      </ContainerDiv>
    </Container>
  );
};
export default ModalEdit;
