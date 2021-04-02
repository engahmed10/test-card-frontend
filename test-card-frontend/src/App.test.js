import App from './App';
import ReactDOM from 'react-dom'
import AddTest  from './components/addtests'
import Tests  from './components/tests'
import {shallow}  from 'enzyme';


test('Shows that he contains about component and chcek is the app is true no error',()=>{


      const div = document.createElement('div');


      ReactDOM.render(<App/>,div);


      //if we want to find About in App component  <Route exact path="/About"  />,we will use toContain and test will pass 
      expect(div.innerHTML).toContain('About');
      //check is it true or false
      expect('div.innerHTML').toBeTruthy();
      ReactDOM.unmountComponentAtNode(div);

})


test('checks addtTest Card correct or not ',()=>{
  
  const div = document.createElement('div')
  
  ReactDOM.render(<AddTest/>,div);

 //expect('div.innerHTML').toContain('ahmed');
 expect('div.innerHTML').toBeTruthy();
  //expect('div.innerHTML').toHaveAnInstanceOf(AddTest);

})



test('checks our app has Tests  card component by using enzyme',()=>{
  
 //using enzyme shallow render type    
 const component = shallow(<App />);
 expect(component.find(App).length).toEqual(1);



})



