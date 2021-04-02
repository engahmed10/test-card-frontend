import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'


test('Shows a About first',()=>{


const div = document.createElement('div');



ReactDOM.render(<App/>,div);


//if we wan to find about in App component  <Route exact path="/About"  render={routeProps => <About {...routeProps} /> }/>
expect(div.innerHTML).toContain('About');

ReactDOM.unmountComponentAtNode(div);

})
