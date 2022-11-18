import { memo } from "react";



export const ShowIncrement = ({increment}) => {

  console.log('Me acabo de redibujar :(');

 return (
    <>
    <button
         onClick={() => {
            increment();
          }}        
         className="btn-success btn mt-2">
            Incrementar
        </button>
    </>
  )
}
