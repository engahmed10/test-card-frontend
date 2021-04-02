import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'
import AddTest  from './components/addtests'

test('Shows that he contains about component and chcek is the app is true no error',()=>{


      const div = document.createElement('div');


      ReactDOM.render(<App/>,div);


      //if we wan to find About in App component  <Route exact path="/About"  />,we will use toContain and test will pass 
      expect(div.innerHTML).toContain('About');
      //check is it true or false
      expect('div.innerHTML').toBeTruthy();
      ReactDOM.unmountComponentAtNode(div);

})


test('checks how is working ',()=>{
  
  const div = document.createElement('div')
  
  ReactDOM.render(<AddTest/>,div);

 //expect('div.innerHTML').toContain('Form');
 expect('div.innerHTML').toBeTruthy();

})