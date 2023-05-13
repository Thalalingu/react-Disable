import React, { useState,useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [data1,setData1] = useState("")
  const [dis,setDis] = useState(true)
  const [data2,setData2] = useState("")
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  },[]);

  function myFun1(e){
    setData1(e.target.value)
    setDis(data2 === "" || e.target.value === "")
  }
  
  function myFun2(e){
    setData2(e.target.value)
    setDis(data1 === "" || e.target.value === "")
  }

//   function myFun1(e){
// setData1(e.target.value)
//   }

//   function myFun2(e){
//     setData2(e.target.value)
//     if(data1 !== "" && data2 !== ""){
//       setDis(false)
//     }
// }
      function dataSubmitted(e){
e.preventDefault()
console.log(data1,data2)
      }
  return (
    <div>
      <p>hiiiujjji</p>
      <form onSubmit={dataSubmitted}>
      <select onChange={myFun1}>

        { data.map((item) => <>
         
           <option>{item.id}</option>
           </> )}
      </select>
      <select onChange={myFun2}>

{ data.map((item) => <>
  <option>{item.name}</option>
 
   </> )}
</select>
<input disabled = {dis} type="submit" />
</form>
    </div>
  );
}
