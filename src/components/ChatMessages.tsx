import { FC } from "react"
import { timeSince } from '../helpers/timeSince';
import { Message } from "../interfaces/message_interface";

interface Props {
    messages: Message[],
    inputValueName: string,
}
export const ChatMessages:FC<Props> = ({inputValueName,messages}) => {
  return (
    <>
  
    {
        messages.map(({by,message,createdAt},i) => {
            return <div key={i}>
            
            <div className="date-container">
                <p>{timeSince(createdAt.toString())}</p>
            </div>

            <div style={by !== inputValueName ? { display:"flex",flexDirection:'column',justifyContent:"flex-end",alignItems:'end'}: {}} 
            className="message animate__animated animate__backInRight" 
            >
                <h1>{message}</h1>
            {
                by === "" 
                ? <p></p>
                : <p style={by !== inputValueName ? {color:"red"}: {color:""}}>
                    De: {by}
                    </p>
            }
            </div>
            </div>
        })
    }
    </>
  )
}
