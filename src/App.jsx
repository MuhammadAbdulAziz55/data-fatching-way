

import './App.css'
// import FetchWithUseAxios from './components/fetch/FetchWithAxios'
// import FetchWithUseSwr from './components/fetch/FetchWithSwr'
import FetchWithReactQuery from './components/fetch/FetchWithReactQuery'
import { QueryClient, QueryClientProvider } from 'react-query'
// import FetchWithUseEffect from './components/fetch/FetchWithUseEffect.jsx'

const queryClient = new QueryClient()

function App() {
 

  return (
    <>
    <QueryClientProvider client={queryClient}>


     {/* <FetchWithUseEffect /> */}
     {/* <FetchWithUseAxios />
     <FetchWithUseAxios /> */}
     {/* <FetchWithUseSwr />
     <FetchWithUseSwr /> */}
     <FetchWithReactQuery />
     <FetchWithReactQuery />
   
     </QueryClientProvider>
    </>
  )
}

export default App
