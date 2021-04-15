import Header from '../components/cookie-stand-header'
import Head from 'next/head'
import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"/>
                {/* from https://css-tricks.com/emojis-as-favicons/ */}
            </Head>
            <Header title="Cookie Stand Admin"/>
            <form onSubmit={submitHandler} className="flex flex-col justify-around w-1/3 p-4 mx-auto text-sm font-bold text-center uppercase bg-green-200 border-2 border-green-300 rounded-md">
                <div className="flex flex-col my-2">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" className="p-2 my-2 h-7"/>
                </div>

                <div className="flex flex-col my-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" className="p-2 my-2 h-7"/>
                </div>

                <button type="submit" className="p-2.5 my-2 uppercase bg-green-500 rounded-md">Sign In</button>
            </form>
            
        </div>
    );
}
