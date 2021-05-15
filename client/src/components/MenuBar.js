import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

function MenuBar() {
  const location = useLocation()

  const menuBar = (
    <Menu pointing secondary size='massive' color='teal'>
      <Menu.Item
        name='home'
        active={location.pathname === '/'}
        as={Link}
        to='/'
      >
        <img src='./logo192.png' />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          name='thank'
          active={location.pathname === '/thank'}
          as={Link}
          to='/thank'
        />
      </Menu.Menu>
    </Menu>
  )

  return menuBar
}

export default MenuBar
