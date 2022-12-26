import { FC } from "react"

interface Props {
    messages: any[],
    inputValueName: string,
}
export const ChatMessages:FC<Props> = ({inputValueName,messages}) => {
  return (
    <>
  
    {
        messages.map(({by,message},i) => {
            return <div style={by !== inputValueName ? { display:"flex",flexDirection:'column',justifyContent:"flex-end",alignItems:'end'}: {}} 
            className="message animate__animated animate__backInRight" 
            key={i}>
                <h1>{message}</h1>
            {
                by === "" 
                ? <p></p>
                : <p style={by !== inputValueName ? {color:"red"}: {color:""}}>
                    De: {by}
                    </p>
            }
            </div>
        })
    }
    </>
  )
}
