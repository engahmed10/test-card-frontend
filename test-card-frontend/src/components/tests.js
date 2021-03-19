import {useEffect}  from "react" 


function Tests() {

useEffect(()=>{
   fetch(URL)
   .then(response=>response.json())
   .then(data=>console.log(`data`,data))

},[])

  return (
    <div>
      
    </div>
  );
}


export default Tests