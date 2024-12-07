//Inicializar el estado
//Es vacio porque estamos inicializando la aplicacion
const initialState = {resultado: ""};

export default(state=initialState, action)=>{

    //Validar el tipo de 'action'
    switch(action.type){
        case 'ACTUALIZAR_RESULTADO':
            return{
                //Retorne todo lo que habia en el store
                ...state,
                resultado:action.payload +' - Modificada'
                // HOLA MUNDO - Modificada
            };
            default://si no se modifica
                return state;
    }
}

//Se exporta esta opcion para devolver el valor de "resultado del state"

export const selectActiveResultado= state =>state.resultadoReducer.resultado;