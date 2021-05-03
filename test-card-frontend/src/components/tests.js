
import {useEffect,useState}  from "react" 
import Flippy,{FrontSide,BackSide}  from 'react-flippy'
import AddTest  from "./addtests"
import React,{Fragment} from 'react';
import { useLocation } from "react-router-dom";
import {Card}  from 'semantic-ui-react'
 
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
        if(location.state !== undefined && tests !== undefined) {
         setTests(tests.concat(location.state.detail))
         console.log(`heerer`,tests)
     }
},[])



function handleNext(){
     console.log(next)

   setNext(next+1);
}

function handlePrevious(){
  setNext(next-1);
}

function handleDelete(e,test){
  e.preventDefault();
  console.log('testdfo delete',test)

}
const display=()=>{

  if(tests !== undefined){

       return   <div   class ="flippy">
             <Flippy   style={{'height':'250px','background':'black'}}
                flipONHover={true}
                flipOnClick={true}
                flipDirection="vertical"
                >
                 <FrontSide>
                  <Card   style={{'margin':'1.5em'}}>
                   <Card.Content header='Questions' />
                    <Card.Content class="flip-card">
                      {tests[`${next}`]["question"]}

                      </Card.Content>
                    </Card>
                    <button onClick={(e)=> handleDelete(e,tests[`${next}`])}>Delete</button>
                  </FrontSide>
              <BackSide>
                <Card   style={{'margin':'1.5em'}}>
                <Card.Content header='Answer' />   
                  <Card.Content>

                   { tests[`${next}`]["answer"]}
                   </Card.Content>
                  </Card>

               </BackSide>
           </Flippy>
           </div>
         
  }
      if(location.state !== undefined && tests !== undefined) {
         setTests(tests.concat(location.state.detail))
       
     }
    
}

  return (
    <fragment>
        {display()}
     <button type=""  onClick={(e)=> next < tests.length-1 ? handleNext(e):()=>false}
     >
     Next
     </button>
 
     <button type=""  onClick={(e)=> next > 0 ? handlePrevious(e):()=>false} >
     Prev
     </button>
   
    </fragment>
  );
}


export default Tests