import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'


test('Shows a comment box ',()=>{


const div = document.createElement('div');



ReactDOM.render(<App/>,div);

console.log('app comoponent',div.innerHTML);


ReactDOM.unmountComponentAtNode(div);

})
