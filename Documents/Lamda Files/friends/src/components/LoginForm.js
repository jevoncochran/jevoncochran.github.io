import React, { useState } from "react";


const LoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({
            credentials: { username: '', password: ''},
            isFetching: false
    });

    const onChangeHandler = e => {
        setLoginInfo({
            ...loginInfo.credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        setLoginInfo({
            isFetching: true
        })
    }

    return (
        <div>
            <form onSumbit={e => login(e)}>
                <input type="text" placeholder="enter username" name="text" value={loginInfo.credentials.username} onChange={e => onChangeHandler(e)} />
                <input type="password" placeholder="enter password" name="password" value={loginInfo.credentials.password} onChange={e => onChangeHandler(e)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;