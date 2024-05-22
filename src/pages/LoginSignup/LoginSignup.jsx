import React from 'react'
import email_icon from '../../assets/email.png'
import './LoginSignup.css'

<<<<<<< HEAD
=======
 import user_icon from '../../assets/user.png'
import email_icon from '../../assets/email.png'
 import password_icon from '../../assets/password.png'

>>>>>>> main
export const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src="{user_icon" alt="" />
                    <input type="text" />
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" />
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src="{password_icon" alt="" />
                    <input type="password" />
                </div>
            </div>
        </div>
    )
}
