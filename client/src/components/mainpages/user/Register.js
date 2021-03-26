import React, { useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import register from '../../img/register.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {

    const [showPass,setShowPass] = useState(false)
    const [Err,setErr] = useState('')
    const [user, setUser] = useState({
        email:'', firstname:'', lastname:'', password:'', cfpassword:''
    })

    function notify (msg) {
        toast.success(msg);
    } 

    function showPassword() {
        setShowPass(showPass ? false : true)
    }
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('/user/register', {...user})

            //localStorage.setItem('firstLogin', true)
            setUser({email:'', firstname:'', lastname:'', password:'', cfpassword:''})
            setErr('')
            notify(res.data.msg)
            //window.location.href = "/";
        } catch (err) {
            setErr(err.response.data.msg)
        }
    }

    return (
    <div className="form">
        <div className="form__left">
        <img src={register} alt="" />
        <ToastContainer />
        </div>
        <form className="form__right" onSubmit = {registerSubmit}>
        <h1 className="form__right__title">Register</h1>
        <div className="form__right__email">
            <i className=" bx bx-envelope"/>
            <input className="form__right__field" placeholder="Email" type="email" name="email" size={30} autoComplete="off" value={user.email} onChange={onChangeInput} required  />
        </div>
        <div className="form__right__username">
            <div className="form__right__username__first">
            <i className="bx bx-user-circle" />
            <input className="form__right__field" placeholder="First name" type="firname" name="firstname" size={10} autoComplete="off" value={user.firstname} onChange={onChangeInput} required  />
            </div>
            <div className="form__right__username__last">
            <i className="bx bx-user-circle" />
            <input className="form__right__field" placeholder="Last name" type="name" name="lastname" size={10} autoComplete="off" value={user.lastname} onChange={onChangeInput} required  />
            </div>
        </div>
        <div className="form__right__pass">
            <div className="form__right__pass__word">
            <i className="bx bx-lock"/>
            <input className="form__right__field" placeholder="Password" type={ showPass === true ? "text" : "password"} size={30} name="password" value={user.password} onChange={onChangeInput} required  />
            <i className={ showPass === true ? "bx bx-show" : "bx bx-hide"} onClick = {showPassword} />
            </div>
            <div className="form__right__pass__cf">
            <i className="bx bx-lock"/>
            <input className="form__right__field" placeholder="Confirm Password" type="password" name="cfpassword" value={user.cfpassword} onChange={onChangeInput} size={30} required  />
            </div>
        </div>
            <h6 className="form__right__err" >{Err}</h6>
            <button type="submit" className="btn form__right__button btn-outline-success">Register</button>
        <div className="form__right__subtitle">
            <Link className="form__right__subtitle__left" to="/login"> Login! </Link>
            <Link className="form__right__subtitle__right" to="/forgot"> Forgot? </Link>
        </div>
        </form>
    </div>
    )
}
