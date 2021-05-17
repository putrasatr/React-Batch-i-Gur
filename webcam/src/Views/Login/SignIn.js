import '../../Assets/Css/login.css'
import '../../Assets/Css/animated.css'
import EyeSlash from '../../Assets/Icons/eyeslash.png'
import Eye from '../../Assets/Icons/eye.png'
import Limg from '../../Assets/Icons/loadingnu.png'
import { passValidate, ValidateEmail } from '../../Assets/Javascript/EmailValidator'
import { loginUser } from '../../Component/Actions'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SignIn(props) {
    const dispatch = useDispatch()

    const [isEye, setEye] = useState({ p: false, r: false })
    const [isEmail, setEmail] = useState(null)
    const [isPas, setPas] = useState(null)
    const [PasValue, setPasValue] = useState('')
    const [EmailValue, setEmailValue] = useState('')
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const { status } = props

    const state = useSelector((state) => state.login)

    useEffect(() => {
        setIsLoading(state.isLoading)
        setMessage(state.messageLog)
    }, [state])
    useEffect(() => {
        setMessage('empty')
    }, [status])

    const handleEye = () => {
        setEye({ p: !isEye.p, r: isEye.r })
    }
    const handleChangeEmail = (v) => {
        const target = v.target;
        const value = target.value;
        const result = ValidateEmail(value);
        setEmail(result)
        setEmailValue(value)
        setIsLoading(false)
        if (!value.length) setEmail(null)
    }
    const handlePasText = (v) => {
        const target = v.target;
        const value = target.value;
        const result = passValidate(value);
        setPas(result)
        setPasValue(value)
        setIsLoading(false)
        if (!value.length || result) {
            setPas(null);
            setMessage(null);
        }
    }

    const handleSubmit = async () => {
        if (!isEmail) return setEmail(false)
        setIsLoading(true)
        dispatch(loginUser(EmailValue, PasValue))
    }
    const submit = isPas === null ? PasValue.length > 7 : false && isEmail
    return (
        <div className="form animated fadeInDown">
            <div className="form-col">
                <div className={message ? "bx-msg" : "d-none"}>
                    <cite className={message === 'empty' ? 'd-none' : ''}><small className="text-red">{message}</small></cite>
                </div>
                <div className="form-email">
                    <input className={isEmail ? "form-control" : isEmail === null ? "form-control" : "form-control bbt-red"} value={EmailValue} onChange={(text) => handleChangeEmail(text)} placeholder="Email" type="email" />
                </div>
                <div className="form-pass">
                    <input className={isPas ? "form-control-pass" : isPas === null ? "form-control" : "form-control-pass bbt-red"} value={PasValue} onChange={(text) => handlePasText(text)} placeholder="Password" type={isEye.p ? "" : "password"} />
                    <div className="eye">
                        <img className="img-eye" src={isEye.p ? Eye : EyeSlash} alt="" onClick={handleEye} />
                    </div>
                </div>
            </div>
            <button type="submit" className={submit ? "btn-submit" : "btn-submit bg-grey"} id="" onClick={handleSubmit}>
                <div id="btn-sign-in">
                    {isLoading ? <img className="spin" src={Limg} alt="" /> : <span>Sign In</span>}
                </div>
            </button>
        </div>
    );
}

export default SignIn;