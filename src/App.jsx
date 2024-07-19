import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [data, setCount] = useState([]);

 const getData = async() =>{
  const mainData= await axios.get('http://localhost:5000/courses')
  setCount(mainData.data)
  console.log(mainData.data);

 }
 useEffect(() =>{
getData()
 },[])
  return data ? (
    <>
      {data.map((val,index)=>{
        return (
          <>
          <h1 key={index+1}>{val.name}</h1>
          </>
        )
      })}
    </>
  ):(<h1>loading...</h1>)
}

export default App
