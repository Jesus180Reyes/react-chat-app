import { useEffect, useState } from 'react';
import 'animate.css';
import { io } from "socket.io-client"
import { usesockets } from '../hooks/usesockets';
import { ChatMessages } from '../components/ChatMessages';
import { FormChat } from '../components/FormChat';
import { Message } from '../interfaces/message_interface';

const socket = io("http://192.168.0.101:8080/",{transports:["websocket"]});
export const HomePage = () => {
    const {inputValueMessage,inputValueName,setInputValueMessage,onInputMessageChange,onInputNameChange} = usesockets();
    const [isConnected, setisConnected] = useState<boolean>();
    const [messages, setMessages] = useState<Message[]>([]);

    const socketListenStatusConnect = ()=> {
      socket.on("connect", ()=> {
        setisConnected(true);
        console.log("Conectado a Servidor");
    });
      socket.on("disconnect", ()=> {
        setisConnected(false);
        console.log("Desconectado del servidor");
      });
    }

    const socketListenOn = ()=> {
      socket.on("recibir-mensaje", (payload)=> {
        setMessages([...messages,payload]);
      });
    }
    
    const onHandleSubmit = (e:any)=> {
        e.preventDefault();
        if(inputValueMessage.length < 1) return;
        const _message = {
            message: inputValueMessage,
            by: inputValueName,
            createdAt:new Date(),
        }
        socket.emit("send-message", _message );
        setMessages([...messages,_message]);
        console.log(inputValueMessage);
        setInputValueMessage('');
    }
    
    useEffect(() => {
      socketListenStatusConnect();
   
    }, [socket.connected]);

    useEffect(() => {
      socketListenOn();
    
    }, [messages]);

    if(!isConnected) return (<h1>No Tenemos conexion establecida</h1>);

  return (
    <>
    <div className="container">
    <h1>HomePage</h1>
   <FormChat 
   onHandleSubmit={onHandleSubmit} 
   inputValueName={inputValueName} 
   inputValueMessage={inputValueMessage} 
   onInputNameChange={onInputNameChange} 
   onInputMessageChange={onInputMessageChange}
   />
    <div className='chat-messages' >
    <ChatMessages messages={messages} inputValueName={inputValueName}/>
    
    </div>
    </div>
    </>
  )
}
