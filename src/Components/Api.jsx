import React ,{useState,useEffect}from 'react'
import axios from 'axios'
function Api() {
    const [data,setData]=useState([])

    const handledata= async()=>{
const mainData=await axios.get('http://127.0.0.1:5000/')
    setData(mainData.data)
}

 useEffect(()=>{
handledata()
},[])
  return (
    <>
<div className='container mx-auto'>
<h1>Name Of Employee</h1>
{data.length===0 ? (
    <h1 className='text-2xl text-gray-600'>Name not aviable</h1>
):(
<table className='text-center bg-white text-gray-600'>
    <thead>
    <tr>
        <th className='border border-gray-600 px-4 py-2'>Id</th>
        <th className='border border-gray-600 px-4 py-2'>Name</th>
    </tr>
    </thead>
    <tbody>
    {data.map((books)=>(
        <tr key={books.id}>
            <td>{books.id}</td>
            <td>{books.name}</td>
        </tr>    
        ))}
    </tbody>
</table>
)
}
</div>
    </>
  )
}

export default Api