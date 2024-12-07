//Nombrar el metodo de la accion
//Recibe por parametro lo que se desea modificar
const actualizarResultado = resultado =>{
    return{
        //Devolvemos un obhjeto con 2 parametros
        //Identificador
        type: 'ACTUALIZAR_RESULTADO',  //Sea en mayuscula y que sea facil de identificar
        Payload: resultado //transmite la informacion al reducer
    }
}

export default actualizarResultado;