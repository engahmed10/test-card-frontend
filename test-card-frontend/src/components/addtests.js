
import { Button, Form } from "semantic-ui-react"

import {useRef,createRef}  from "react"
import { useHistory } from "react-router-dom";


const  AddTest= () => {

const inputQuestion=useRef(null)
const inputAnswer=useRef(null)

let history = useHistory();

const handleSubmit=(e)=>{
   e.preventDefault();
  let data={
      question:inputQuestion.current.value,
      answer:inputAnswer.current.value
  };
  const fetchUrl = "http://127.0.0.1:3000/tests";
  fetch(fetchUrl,{
        method:'POST',
           body:JSON.stringify(data),
           headers :{
               'Content-Type':'application/json'
               }
            }
  )
      .then((response) => response.json())
      .then((tests) => 
        
                history.push({
                    pathname: '/tests',
                        
                        state: { detail: tests} 
                })

      )
      .catch((error) => console.log(error));

}

    return (
        <div>
               <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Question</label>
                        <textarea placeholder='Question' name="question" ref={inputQuestion}  />
                    </Form.Field>

                    <Form.Field>
                        <label>Answer</label>
                        <textarea placeholder='Answer'  name="answer" ref={inputAnswer}/>
                    </Form.Field>

                  <Button type='submit'>Submit</Button>

                </Form>                  
        </div>
    );
}
 
 
export default AddTest;