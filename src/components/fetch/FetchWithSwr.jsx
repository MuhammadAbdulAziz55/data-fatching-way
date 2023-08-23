import axios from "axios";
import useSWR from 'swr'

const fetcher = async (...args) => {
    const res = await axios.get(...args)
    return res.data;
}


export default function FetchWithUseSwr() {
    const {data, isLoading, error} = useSWR('http://api.quotable.io/random', fetcher, {
        suspense: true
    })
     if(isLoading){
       return  <h2>Loading...</h2>
     }
     if(error){
       return <h2>Something went wrong!</h2>
     }
   
  return (
    <div>
        <h1>Fetch data using Swr</h1>
        <p>{data?.content}</p>
    </div>
  )
}
