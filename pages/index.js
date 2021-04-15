import { useState } from 'react'
import { getToken } from '../services/data-fetcher'
import CookieStandAdmin from '../components/cookie-stand-admin'
import LoginForm from '../components/login-form'


export default function Home() {

    const [token, setToken] = useState();

    const [username, setUsername] = useState('');

    async function loginHandler(values) {

        const fetchedToken = await getToken(values);

        setToken(fetchedToken);

        setUsername(values.username);
    }

    function logoutHandler() {
        setToken(null);
    }

    if (!token) return (
        <div className="box-border min-h-screen bg-green-50">
            <LoginForm onSubmit={ loginHandler }/>
        </div>
    )

    return (
        <CookieStandAdmin 
            username={ username }
            token={ token }
            onLogout={ logoutHandler }
        />
    )
}


