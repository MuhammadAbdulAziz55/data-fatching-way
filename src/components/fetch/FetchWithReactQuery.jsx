import axios from "axios";
import { useQuery } from "react-query";


const fetchQuote = async () => {
    const res = await axios.get('http://api.quotable.io/random');
    return res.data;
}


export default function FetchWithReactQuery() {
    const {data, isLoading, isError } = useQuery('quote', ()=> fetchQuote())
     if(isLoading){
       return  <h2>Loading...</h2>
     }
     if(isError){
       return <h2>Something went wrong!</h2>
     }
   
  return (
    <div>
        <h1>Fetch data using react query</h1>
        <p>{data?.content}</p>
    </div>
  )
}
