//crear el store 
import {createStore, combineReducers} from 'redux';
import resultadoReducer from './Resultado/reducer'


//si ocupamos mas reducers los vamos incorporando
const myReducers = combineReducers({
    resultadoReducer
})

export default() =>{

    return{
    ...createStore(myReducers,
        //Esto nos permite poder ver mis actions en la extension de redux devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   }
}