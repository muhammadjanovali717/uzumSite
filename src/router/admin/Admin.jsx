import React from 'react'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { Routes, Route, NavLink, Link} from 'react-router-dom'
function Admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <Link to={"/"}>
        <button>Go Home</button>
        </Link> 
        <h2>Admin Dashboard</h2>
        <ul className="admin__collection">
          <li className="admin__item">
            <NavLink className="admin__link" to={`create-product`}>Create Product</NavLink>
          </li>
          <li className="admin__item">
            <NavLink className="admin__link" to={`manage-product`}>Manage Product</NavLink>
          </li>
        </ul>
      </div>
      <div className="admin__content">
      <Routes>
        <Route path='/create-product' element={<CreateProduct/>}/>
        <Route path='/manage-product' element={<ManageProduct/>}/>
      </Routes>

      </div>
      </div>
  )
}

export default Admin
