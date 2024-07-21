import React,{useState,useEffect} from 'react'
import axios from 'axios'
function BooksApi() {
    const [data,setData]=useState([]);
    const handleData= async()=>{
        const response= await axios.get('http://127.0.0.1:5000/books')
    setData(response.data)
    }
    useEffect(()=>{
handleData()
    },[])
  return (
    <div>
      {data.length===0 ? (
        <h1>No data Avaible</h1>
      ):(
        <div>
            <table className='border border-gray-700 text-center'>
<thead>
    <tr>
        <th>Id</th>
<th>title</th>
<th>Body</th>
    </tr>
</thead>
<tbody>
    {data.map((books,index)=>(
<tr key={index+1}>
    <td>{books.id}</td>
    <td>{books.title}</td>
    <td>{books.body}</td>

</tr>
    ))}
</tbody>
            </table>
            </div>
      )}
    </div>
  )
}

export default BooksApi
