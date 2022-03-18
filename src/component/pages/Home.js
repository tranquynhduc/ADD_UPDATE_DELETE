import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import {delete_contact} from '../redux/Action'


const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactReducer);

  const hanldeClickDelete = (id) => {
    dispatch(delete_contact(id))
    // dispatch({ type: 'DELETE_CONTACT', payload: id })
    toast.success('xóa thành công !!')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 text-right my-5">
          <Link to='/Add' className="btn btn-outline-dark" >Add contact</Link>
        </div>
        <h2> Welcom to React Redux Contact Book</h2>
        <div className="col-md-0   mx-auto">
          <div className="table table-hover ">
            <thead className="text-white bg-dark text-center ">
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody >
              {
                contacts.map(contact => {
                  return (
                    <tr key={contact.id}>
                      <td >{contact.id}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>
                        <Link to={`Edit/${contact.id}`} ><td className=' btn  btn-small  btn-primary mr-5'>Edit</td></Link>
                        <button type="button" onClick={() => hanldeClickDelete(contact.id)} className=" btn btn-small btn-danger">Delete</button>
                      </td>

                    </tr>)
                })
              }

            </tbody>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home