import { useCounter, useFetch } from "../hooks";
import { Quotes } from "../03-Examples/Quotes";
import { QuotesLoading } from "../03-Examples/QuotesLoading";



export const Layout = () => {
const {increment, counter} = useCounter(1);

const {loading, error, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

const {quote, author} = !!data && data[0];

  return (
    <>
    <h1>Breaking Bad quotes</h1>
    <hr />
    {
        loading
            ? <QuotesLoading></QuotesLoading>
            : <Quotes quote={quote} author = {author}></Quotes>
    }

    <button disabled={loading} onClick={()=>increment()} className="btn btn-primary">Next Quote</button>
    
    </>
  )
}
