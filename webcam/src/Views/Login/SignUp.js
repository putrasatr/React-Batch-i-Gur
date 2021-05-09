import '../../Assets/Css/login.css'
import EyeSlash from '../../Assets/Icons/eyeslash.png'
import Eye from '../../Assets/Icons/eye.png'
import Limg from '../../Assets/Icons/loadingnu.png'
import { passValidate, ValidateEmail } from '../../Assets/Javascript/EmailValidator'
import { registerUser } from '../../Component/Actions'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SignUp() {
    const dispatch = useDispatch()

    const [isEye, setEye] = useState({ p: false, r: false })
    const [isEmail, setEmail] = useState(null)
    const [isPas, setPas] = useState(null)
    const [PasValue, setPasValue] = useState('')
    const [RePasValue, setRePasValue] = useState('')
    const [EmailValue, setEmailValue] = useState('')
    const [isRePas, setRePas] = useState(null)
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const state = useSelector((state) => state.login)
    useEffect(() => {
        setIsLoading(state.isLoading)
    }, [state])

    const handleEye = () => {
        setEye({ p: !isEye.p, r: isEye.r })
    }
    const handleEyeRe = () => {
        setEye({ r: !isEye.r, p: isEye.p })
    }
    const handleChangeEmail = (v) => {
        const target = v.target;
        const value = target.value;
        const result = ValidateEmail(value);
        setEmail(result)
        setEmailValue(value)
        state.messageReg = ''
        if (!value.length) setEmail(null)
    }
    const handlePasText = (v) => {
        const target = v.target;
        const value = target.value;
        const result = passValidate(value);
        setPas(result)
        setPasValue(value)
        if (!result) setMessage('Password must contain at least one number and has 8 character')
        if (!(/^(?=.*[A-Z])/.test(value[0]))) setMessage("Password's first character must be a capital")
        if (!value.length || result) {
            setPas(null);
            setMessage(null);
        }
    }
    const handleRePasText = (v) => {
        const target = v.target;
        const value = target.value;
        const result = value === PasValue
        setRePas(result)
        setRePasValue(value)
        if (!value.length) {
            setRePas(null);
        }
    }
    const handleSubmit = () => {
        if (!isEmail) return setEmail(false)
        if (PasValue !== RePasValue) return setRePas(false)
        setIsLoading(true)
        dispatch(registerUser(EmailValue, PasValue))
    }
    const submit = (isPas === null ? true : false) && isEmail && isRePas
    return (
        <div className="form">
            <div className="form-col">
                <div className={state.messageReg || message ? "" : "d-none"}>
                    <cite><small className="text-red">{state.messageReg || message}</small></cite>
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
                <div className="form-pass">
                    <input className={isRePas ? "form-control-pass" : isRePas === null ? "form-control" : "form-control-pass bbt-red"} value={RePasValue} onChange={(text) => handleRePasText(text)} placeholder="Re-Password" type={isEye.r ? "" : "password"} />
                    <div className="eye">
                        <img className="img-eye" src={isEye.r ? Eye : EyeSlash} alt="" onClick={handleEyeRe} />
                    </div>
                </div>
            </div>

            <div className={submit ? "btn-submit" : "btn-submit bg-grey"} id="" onClick={handleSubmit}>
                <div id="btn-sign-in">
                    {isLoading ? <img className="spin" src={Limg} alt="" /> : <span>Sign Up</span>}
                </div>
            </div>
        </div>
    );
}

export default SignUp;