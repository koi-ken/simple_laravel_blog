"use client";

import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';

export default function SigninForm(
){
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard'
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordOnce, setPasswordOnce] = useState("");
    const [error, setErrors] = useState([]);

    const submitForm = event => {
        event.preventDefault();

        register({
            name,
            email,
            password,
            password_once: passwordOnce,
            setErrors
        });
    }

    return (
        <>
            <div className="w-96 font-mono rounded border p-5 shadow-md bg-white h-4/6">
                <form onSubmit={submitForm}>
                    <h1>Signin</h1>
                    <div>
                        <div className="flex flex-col py-3">
                            <label className="font-semibold text-slate-600">ユーザー名</label>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value)}} className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="username" />
                        </div>
                        <div className="flex flex-col py-3">
                            <label className="font-semibold text-slate-600">メールアドレス</label>
                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value)}} className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="email" />
                        </div>
                        <div className="flex flex-col py-3">
                            <label className="font-semibold text-slate-600">パスワード</label>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value)}}  className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="password" />
                        </div>
                        <div className="flex flex-col py-3">
                            <label className="font-semibold text-slate-600">もう一度</label>
                            <input type="password" value={passwordOnce}  onChange={(e) => { setPasswordOnce(e.target.value)}}  className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="password_once" />
                        </div>
                        <div className="flex flex-col py-3">
                            <button className="border text-white font-semibold rounded-full h-10 px-4 bg-emerald-600">新規登録</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}