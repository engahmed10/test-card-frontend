import App from './App';
import ReactDOM from 'react-dom'
import AddTest  from './components/addtests'
import Tests  from './components/tests'
import {shallow}  from 'enzyme';
import {mount}  from 'enzyme'

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

  expect('div.innerHTML').toBeTruthy();

})


test('checks the addTest component that has two textarea feild one for id and one for name or not',()=> {

 let  wrapped=mount(<AddTest/>)
 expect(wrapped.find('textarea').length).toEqual(2)


})

test('has a button that user can submit correctly on new targetcoming from  textarea',()=>{

  let wrapped=mount(<AddTest/>)
  wrapped.find('Button').simulate('submit',{
    target: {value: 'new test'}
  });

});