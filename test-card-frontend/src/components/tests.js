
import {useEffect,useState}  from "react" 



function Tests() {


  const [tests,setTests] = useState()

useEffect(()=>{

   const url="http://127.0.0.1:3000/tests"
   fetch(url)
   .then((response) => response.json())
   .then(data=>{setTests(data)})
     .catch((error) => console.log(error));

},[])


  return (
    <div>
    { tests !== undefined?
    
      tests.map(test=>
          { return (test.question,
            test.answer)
           }
      ):
      ""
    }

    </div>
  );
}


export default Tests