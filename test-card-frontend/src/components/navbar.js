import React,{useState} from 'react';
import {NavLink}  from "react-router-dom"
import { Menu ,Segment} from 'semantic-ui-react'

function NavBar(props) {
  //state = { activeItem: 'Tests' }
    const[activeItem,setactiveItem]=useState('Tests')
  const handleItemClick = (e, { name }) => setactiveItem({ activeItem: name })

    return (

      <Segment inverted>
           <Menu inverted secondry>
                <NavLink to="/about">
                 <Menu.Item
                 name='About'
                 active={activeItem === 'about'}
                 onClick={handleItemClick}
                 />
                </NavLink>
             <NavLink to="/tests">
                 <Menu.Item
                 name='Tests'
                 active={activeItem === 'tests'}
                 onClick={handleItemClick}
                 />
            </NavLink>
             <NavLink to="/createtest">
                <Menu.Item
                 name='createTest'
                 active={activeItem === 'tests'}
                 onClick={handleItemClick}
                 />
            </NavLink>
            </Menu>
      </Segment>
        
    );
}

export default NavBar;
         
 