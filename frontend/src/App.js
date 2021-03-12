import React, {useEffect, useState} from "react";
import Home from './pages/home/Home'

import './App.css';
import {postUser, updateUser} from "./api/request";

const App = (props) => {

    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true)

    useEffect(() => {
        let localUser = localStorage.getItem('user')
        if (!localUser) {
            postUser()
                .then(newUser => {
                    localStorage.setItem('user', JSON.stringify(newUser))
                    setUser(newUser)
                    setUserLoading(false)
                })
                .catch(console.log)
        } else {
            localUser = JSON.parse(localUser)
            setUser(localUser)
            setUserLoading(false)
        }

    }, [])


    const onUserUpdate = (newUser) => {
        updateUser(newUser)
            .then(u => {
                localStorage.setItem('user', JSON.stringify(newUser))
                setUser(u)
            })
            .catch(console.log)
    }

    const clearUser = () => {
        localStorage.removeItem('user')
        setUserLoading(true)

        console.log("Removing user")

        postUser()
            .then(newUser => {
                localStorage.setItem('user', JSON.stringify(newUser))
                setUser(newUser)
                setUserLoading(false)
            })
            .catch(console.log)
    }


    if (userLoading)
        return <div className = 'container'><h2>Loading...</h2></div>

    return <Home user = {user} userUpdate = {onUserUpdate} clearUser={clearUser}/>
}

export default App;
