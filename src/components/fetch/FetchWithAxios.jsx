import axios from "axios";
import { useEffect, useState } from "react"


export default function FetchWithUseAxios() {
    const [quote, setQuote] = useState(null);

    useEffect(()=> {
        const fetchQuote = async () => {
            const res = await axios.get('http://api.quotable.io/random');
            setQuote(res.data)
        }
        fetchQuote()
    }, [])
  return (
    <div>
        <h1>Fetch data using Axios</h1>
        <p>{quote?.content}</p>
    </div>
  )
}
