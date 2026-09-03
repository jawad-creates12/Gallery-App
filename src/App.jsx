import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const[userData, setUserData] = useState([])
  const[index, setIndex] = useState(1)


  const getData = async  ()=> {
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setUserData(response.data);  
  }

  useEffect(function(){
    getData()
  },[index])





  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translax-1/2 -translay-1/2 font-semibold'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
       
      return <div key={idx}>
        <Card elem={elem} />
        </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>

      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button style={{opacity: index==1? 0.6:1}} className='bg-amber-400 text-sm shadow-lg shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-orange-500/80  active:scale-95 cursor-pointer text-black rounded px-4 py-2 font-semibold' onClick={()=>{
         
         if(index>1){
                  setIndex(index-1)
                setUserData([])
         }
        
        }}>Prev</button>
        <h1>Page {index}</h1>
        <button className='bg-amber-400 text-sm shadow-lg shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-orange-500/80 active:scale-95 cursor-pointer text-black rounded px-4 py-2 font-semibold' onClick={()=>{
          setIndex(index+1)
                setUserData([])

         
          
         
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
