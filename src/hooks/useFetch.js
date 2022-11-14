import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        loading: true,
        error: false,
        data: null,
    })

    const getFetch = async () => {
    setState({
        ...state,
        loading: true,
    })

    const resp = await fetch(url);
        
    const data = await resp.json();       
    setState({
       data,
        loading: false,
        error: false,
    })
    
    //console.log(data);
    }

    useEffect(() => {
      getFetch();
    
    
    }, [url])
    


  return {
    loading: state.loading,
    error: state.error,
    data: state.data,
  };
}
