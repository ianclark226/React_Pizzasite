import React from 'react';
import '../styles/Menu.css';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';

const MenuPage = () => {
  return (
    <div className='menu'>
        <h1 className='menu-title'>Our Menu</h1>
        <div className='menu-list'>
            {MenuList.map((item, key) => {
                return (
                    <MenuItem key={key} image={item.image} name={item.name} price={item.price}/>
                )
            })}
        </div>
    </div>
  )
}

export default MenuPage;