// create your App component here

import { useEffect, useState } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {setDogImage(data.message) 
        setIsLoading(true)})
  },[])

  if(!isLoading){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
    {dogImage && <img src={dogImage} alt="A Random Dog" ></img>}
    </div>
  );
}


    // const [data,setData] = useState({
    //     data:null,
    //     isLoading:true,
    //     error:null
    // })

    // useEffect(()=>{

    //     setData(pre => {
    //         return {...pre,isLoading:true}
    //     })

    //   fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(data => {
    //     setData(pre => {
    //         return {...pre,data:data,isLoading:false}
    //     });
    //   }).catch(e=>{
    //     setData(pre => {
    //         return {...pre,isLoading:false,error:e}
    //     });
    //   });
    // },[])


    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         try{
    //             const resp = await fetch("https://dog.ceo/api/breeds/image/random")
    //             const data = await resp.json();
    //             console.log(data)
    //             setData(data)
    //         } catch(error){
    //             console.log(error)
    //         }
    //     }
    //     fetchData();
    // }, [])

    // return(
    //     <div>
    //         <img src={data.message} alt="A Random Dog" />
    //     </div>
    // )


export default App;