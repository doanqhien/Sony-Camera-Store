import React, { useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import forgot from '../../img/forgot.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Forgot() {

    const [Err,setErr] = useState('')
    const [user, setUser] = useState({
        email:''
    })

    function notify (msg) {
        toast.success(msg);
    } 

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const forgotSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('/user/forgot', {...user})

            //localStorage.setItem('firstLogin', true)
            setUser({email:''})
            setErr('')
            notify(res.data.msg)
            
        } catch (err) {
            setErr(err.response.data.msg)
        }
    }

    return (
    <div className="form">
        <div className="form__left">
        <img src={forgot} alt="" />
        <ToastContainer />
        </div>
        <form className="form__right" onSubmit = {forgotSubmit}>
        <h1 className="form__right__title">Forgot</h1>
        <div className="form__right__email">
            <i className=" bx bx-envelope"/>
            <input className="form__right__field" placeholder="Email" type="email" name="email" size={30} autoComplete="off" value={user.email} onChange={onChangeInput} required  />
        </div>
            <h6 className="form__right__err" >{Err}</h6>
            <button type="submit" className="btn form__right__button btn-outline-success">Submit</button>
        <div className="form__right__subtitle">
            <Link className="form__right__subtitle__left" to="/register"> Register! </Link>
            <Link className="form__right__subtitle__right" to="/login"> Login! </Link>
        </div>
        </form>
    </div>
    )
}
