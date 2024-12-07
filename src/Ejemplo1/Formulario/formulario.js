import React, {useRef} from "react";
import actualizarResultado from "../../redux/store/Resultado/action";
import { connect } from "react-redux";

//Siempre al iniciar lo que debemos hacer es recibir por parametro la accion
const Formulario = ({actualizarResultado})=>{
    const resultadoRef = useRef(null);//asignamos la referencia

    const onButtonClick = ()=>{
        actualizarResultado(resultadoRef.current.value);
    }

    return(
        <div>
            Campo: 
            <input type="text" ref={resultadoRef}></input>
            <button onClick={onButtonClick}>Guardar en Store</button>
        </div>
    )

}

//Se conecta con Redux: null = indica si desea recuperar algo de la store
export default connect(null,{actualizarResultado})(Formulario)