
import {useEffect,useState}  from "react" 
import Flippy,{FrontSide,BackSide}  from 'react-flippy'
import AddTest  from "./addtests"
import React,{Fragment} from 'react';
import { useLocation } from "react-router-dom";


function Tests({props}) {


  const [tests,setTests] = useState()
  const[next,setNext] =useState(0)
    const location = useLocation();

useEffect(()=>{

   const url="http://127.0.0.1:3000/tests"
   fetch(url)
   .then((response) => response.json())
   .then(data=>{setTests(data)})
     .catch((error) => console.log(error));
       

},[])



function handleNext(){
   setNext(+1);
}

function handlePrevious(){
  setNext(-1);
}


const display=()=>{

   if(tests !== undefined){
       return  <Flippy
            flipONHover={true}
             flipOnClick={true}
             flipDirection="vertical"
         
         >
         <FrontSide>
          {tests[next].question}
         </FrontSide>
          <BackSide>
           { tests[next].answer}
         </BackSide>
           
         </Flippy>
  }
      if(location.state !== undefined && tests !== undefined) {
         setTests(tests.concat(location.state.detail))
         console.log(`heerer`,tests)
     }


  
    
}

  return (
    <fragment>
     <button type=""  onClick={(e)=> next < tests.length-1?handleNext:false}>
     </button>
     {display()}
     {console.log(`tests`,tests)}
     <button type=""  onCLick={handlePrevious}>
     </button>
   
    </fragment>
  );
}


export default Tests