import { createStore, combineReducers } from "redux";
import numerosReducers from "./reducers/numerosReducers";

const reducers = combineReducers({
  numeros: numerosReducers  
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
