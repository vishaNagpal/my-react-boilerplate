import { createContext, ReactNode, useState } from "react";


interface StateContextProps {
    profileViewCounter: number;
}

export type StateContextType = {
    context: StateContextProps,
    setContext: (context: StateContextProps) => void;
};

export const StateContext = createContext({} as StateContextType);


const StateContextProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
    const initState: StateContextType = {
        context: {
            profileViewCounter: 0
        },
        setContext: (context: StateContextProps) => updateState({ ...state, context })
    };

    const [state, updateState] = useState<StateContextType>(initState);
    return <StateContext.Provider value={state}>
        {children}
    </StateContext.Provider>;
};

export default StateContextProvider;