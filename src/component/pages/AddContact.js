import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import { add_contact } from './../redux/Action';

const AddContact = () => {
    let navigate = useNavigate();
    const contacts = useSelector(state => state.contactReducer);
    const dispatch =useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            return toast.warning('Vui lòng nhập đầy đủ thông tin !!!')
        }
        const checkEmail = contacts.find((contact) => contact.email === email && email);

        if (checkEmail) {
            return toast.error('Email đã có !!!')
        }
        const checkNumber = contacts.find((contact) => contact.phone == parseInt(phone));
        if (checkNumber) {
            return toast.error('Số điện thoại  đã có !!!')
        }
        const data={
            id: contacts[contacts.length - 1].id +1,
            name, 
            email,
            phone,
        }
        dispatch(add_contact(data))
        // dispatch({ type: ' ADD_CONTACT' ,payload:data})
         toast.success('Thêm thành công')
         navigate('/')

    }


   
    return (
        <div className="container">
            <div className="row">
                <h3 className="display-5 text-center p-5 ">
                    Add Student
                </h3>
                <div className="col-md-7 shadow mx-auto p-3  ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-3 mb-3  ">
                            <input placeholder="Name" type="text" value={name} onChange={(e) => (setName(e.target.value))} className="form-control" />
                        </div>
                        <div className="form-group pb-3">
                            <input placeholder="Email" type="email" value={email} onChange={(e) => (setEmail(e.target.value))} className="form-control" />
                        </div>
                        <div className="form-group pb-3">
                            <input placeholder="Number Phone" type="number" value={phone} onChange={(e) => (setPhone(e.target.value))} className="form-control" />
                        </div>
                        <div className="form-group pb-3">
                            <button className="btn btn-block btn-dark w-100" > Add Student</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact