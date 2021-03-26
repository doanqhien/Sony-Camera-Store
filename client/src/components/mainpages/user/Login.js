import React, { useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import login from '../../img/login.png'


export default function Register() {

    const [showPass,setShowPass] = useState(false)
    const [Err,setErr] = useState('')
    const [user, setUser] = useState({
        email:'', password:''
    })

    function showPassword() {
        setShowPass(showPass ? false : true)
    }
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {...user})

            //localStorage.setItem('firstLogin', true)
            setUser({email:'', password:''})
            setErr('')
            window.location.href = "/";
        } catch (err) {
            setErr(err.response.data.msg)
        }
    }

    return (
    <div className="form">
        <div className="form__left">
        <img src={login} alt="" />
        </div>
        <form className="form__right" onSubmit = {loginSubmit}>
        <h1 className="form__right__title">Login</h1>
        <div className="form__right__email">
            <i className=" bx bx-envelope"/>
            <input className="form__right__field" placeholder="Email" type="email" name="email" size={30} autoComplete="off" value={user.email} onChange={onChangeInput} required  />
        </div>
        <div className="form__right__pass">
            <div className="form__right__pass__word">
            <i className="bx bx-lock"/>
            <input className="form__right__field" placeholder="Password" type={ showPass === true ? "text" : "password"} size={30} name="password" value={user.password} onChange={onChangeInput} required  />
            <i className={ showPass === true ? "bx bx-show" : "bx bx-hide"} onClick = {showPassword} />
            </div>
        </div>
            <h6 className="form__right__err" >{Err}</h6>
            <button type="submit" className="btn form__right__button btn-outline-success">Login</button>
        <div className="form__right__subtitle">
            <Link className="form__right__subtitle__left" to="/register"> Register! </Link>
            <Link className="form__right__subtitle__right" to="/forgot"> Forgot? </Link>
        </div>
        </form>
    </div>
    )
}
