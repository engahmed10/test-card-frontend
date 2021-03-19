
import {useEffect,useState}  from "react" 
import Flippy,{FrontSide,BackSide}  from 'react-flippy'


function Tests() {


  const [tests,setTests] = useState()
  const[next,setNext] =useState(0)

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
    
}

  return (
    <div>
     <button type=""  onClick={handleNext}>
     </button>
     {display()}
     <button type=""  onCLick={handlePrevious}>
     </button>

    </div>
  );
}


export default Tests