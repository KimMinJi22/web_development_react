import { createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

const INITIAL_SATE = { isLogin: false, message: ''};

export const Context = createContext(INITIAL_SATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_SATE);

    return(
        <Context.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Context;