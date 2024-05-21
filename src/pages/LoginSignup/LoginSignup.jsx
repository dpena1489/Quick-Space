import React from 'react'
import './LoginSignup.css'

// import user_icon from '.scr/assets/user_icon.png'
import email_icon from '../../assets/email.png'
import password_icon from './password_icon.png'

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
