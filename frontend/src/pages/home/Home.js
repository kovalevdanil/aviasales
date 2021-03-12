import React, {useState} from 'react'

import Header from '../../components/header/Header'

import './Home.css'

import vkLogo from '../../logo/vkLogo.png'
import fbLogo from '../../logo/fbLogo.png'
import twLogo from '../../logo/twLogo.webp'
import {validateEmail} from "../../utils/utils";


const Home = ({user, userUpdate, clearUser}) => {

    const {shared, email} = user

    const [emailValid, setEmailValid] = useState(validateEmail(email))
    const [emailInput, setEmailInput] = useState(email ? email : '')

    const onShareClick = (e) => {
        e.preventDefault()

        if (!shared)
            userUpdate({...user, shared: true})
    }

    const onEmailSubmit = (e) => {
        e.preventDefault()
        userUpdate({...user, email: emailInput})
    }

    const onEmailChange= (e) => {
        e.preventDefault()

        const email = e.target.value

        setEmailValid(validateEmail(email))
        setEmailInput(e.target.value)
    }

    const tryAgain = (e) => {
        e.preventDefault()
        clearUser()
    }

    const emailActive = !email || email !== emailInput

    const logoShadeClass = (shared ? '' : 'hide')
    const sharedTextShadeClass = (shared ? 'shade-text' : '')
    const emailTextShadeClass = (emailActive ? '' : 'shade-text')
    const buttonClass = ( emailValid && email !== emailInput? 'btn-active' : '')

    debugger

    return  <div>
        <Header />
        <div className='container'>
            <div className='wrapper'>
                <h1 className='title handwrite'>
                    Чтобы выиграть <br/>
                    путешествие
                </h1>
                <ol className='steps handwrite'>
                    <li className={'step step-one ' + sharedTextShadeClass}>
                        <p className={'step__title ' +  sharedTextShadeClass}> Поделись с друзьями: </p>
                        <div className='share-list'>
                            <a className='share' onClick = {onShareClick}>
                                <img className = 'logo' src = {vkLogo} alt = 'vk-logo'/>
                                <div className = {'shade ' + logoShadeClass}/>
                            </a>
                            <div className='share' onClick = {onShareClick}>
                                <img className = 'logo' src = {fbLogo} alt = 'fb-logo' />
                                <div className ={'shade ' + logoShadeClass} />
                            </div>
                            <div className='share' onClick = {onShareClick}>
                                <img className = 'logo' src = {twLogo} alt = 'twitter-logo'/>
                                <div className = {'shade ' + logoShadeClass}/>
                            </div>
                        </div>
                    </li>
                    <li className={'step step-two ' + emailTextShadeClass}>
                        <p className={'step__title ' + emailTextShadeClass }> Оставь почту: </p>
                        <form className='email-form' onSubmit={onEmailSubmit}>
                            <input type='email' name='email' onChange = {onEmailChange} value = {emailInput}/>
                            <button className={'btn btn-send handwrite ' + buttonClass} type='submit' disabled={!emailValid}> Отправить</button>
                        </form>
                    </li>
                </ol>
            </div>
        </div>
    </div>
}

export default Home