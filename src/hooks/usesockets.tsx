import { useState } from "react";

export const usesockets = () => {
    const [inputValueMessage, setInputValueMessage] = useState<string>('');
    const [inputValueName, setInputValueName] = useState<string>("");    
    const onInputMessageChange = (e:any)=> {
        setInputValueMessage(e.target.value);
    }
    const onInputNameChange = (e:any)=> {
        setInputValueName(e.target.value);
    }
  return {
    // * Propiedades
    inputValueMessage,
    inputValueName,
    // * Metodos
    setInputValueMessage,
    setInputValueName,
    onInputMessageChange,
    onInputNameChange
}
}
