import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {update_contact} from '../redux/Action';

function EditContact() {
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [phone ,setPhone] = useState('');
    const dispatch =useDispatch();
    const navigate = useNavigate();


    const contacts = useSelector(state => state.contactReducer);
    console.log('contacts ',contacts );

    const { id } = useParams();
    console.log('id' , id);

    const  currentContact  = contacts.find(contact => contact.id == parseInt(id));
    console.log('contacts.find',contacts.find(contact => contact.id));
    console.log('parseInt(id)' ,parseInt(id));
    console.log('curent:', currentContact);

    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }
    },[currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            return toast.warning('Vui lòng nhập đầy đủ thông tin !!!')
        }
        const checkEmail = contacts.find((contact) => contact.id === parseInt(id) && contact.email === email);

        if (checkEmail) {
            return toast.error('Email đã có !!!')
        }
        const checkNumber = contacts.find((contact) => contact.id === parseInt(id) && contact.phone == parseInt(phone));
        if (checkNumber) {
            return toast.error('Số điện thoại  đã có !!!')
        }
        const data={
            id: parseInt(id),
            name, 
            email,
            phone,
        }
        
        dispatch(update_contact(data))
        // dispatch({ type: 'UPDATE_CONTACT' ,payload:data})
         toast.success('Update thành công')
         navigate('/')

    }

    return (

        <div className="container">
            {currentContact  ? (
                <>
                    <div className="row">
                        <h3 className="display-5 text-center ">
                            Edit Student {id}
                        </h3>
                        <div className="col-md-7 shadow mx-auto p-3 mt-10 ">
                            <form  onSubmit= {handleSubmit}>
                                <div className="form-group mt-3 mb-3  ">
                                    <input placeholder="Name" type="text" value={name} onChange={(e) => (setName(e.target.value))} className="form-control"  />
                                </div>
                                <div className="form-group pb-3">
                                    <input placeholder="Email" type="email" value={email} onChange={(e) => (setEmail(e.target.value))} className="form-control" />
                                </div>
                                <div className="form-group pb-3">
                                    <input placeholder="Phone" type="number" value={phone} onChange={(e) => (setPhone(e.target.value))} className="form-control" />
                                </div>
                                <div className="form-group pb-3 ">
                                    <button className="btn  btn-dark  "> Update Student</button>

                                    <Link to='/'  >
                                        <button className="btn  btn-danger ml-5 " > Cancel</button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </>
            ) :
                (<>
                     <h3 className="display-5 text-center ">
                     This id {id}  doesn't exist !
                        </h3>
                </>
                )}

        </div>
    )
}

export default EditContact