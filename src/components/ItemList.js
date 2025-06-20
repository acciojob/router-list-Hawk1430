import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ItemList = () => {
  return (
    <>
        <h1>Item List</h1>
        <li>
            <Link to="/items/1" >Item 1</Link>
        </li>
        <li>
            <Link to="/items/2" >Item 2</Link>
        </li>
        <li>
            <Link to="/items/3" >Item 3</Link>
        </li>
    </>
  )
}

export default ItemList