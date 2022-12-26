import { FC } from 'react';
interface Props { 
    onHandleSubmit:any,
    inputValueName:string,
    inputValueMessage:string,
    onInputNameChange: any
    onInputMessageChange: any
}
export const FormChat:FC<Props> = ({onHandleSubmit,inputValueMessage,inputValueName,onInputMessageChange,onInputNameChange}) => {
  return (
    <>
     <div className='form-chat'>
        <form  onSubmit={onHandleSubmit}>
            <input value={inputValueName} onChange={onInputNameChange} type="text" className='form-control' placeholder='Ingresa tu nombre' />
            <input value={inputValueMessage} onChange={onInputMessageChange} type="text" className='form-control' placeholder='Ingresa mensaje' />
            <button className='btn btn-primary '>Enviar</button>
        </form>
    </div>
    </>
  )
}
