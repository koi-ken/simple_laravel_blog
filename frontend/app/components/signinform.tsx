"use client";

import axios from 'axios';
import { useState } from 'react';

export default function SigninForm(
){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_once, setPassword_once] = useState("");

    const signin = async () => {

        
        await axios({
            url: 'http://localhost:8000/api/v1/user.store',
            method: 'post',
            data: {
            name: name,
            email: email,
            password: password,
            password_once: password_once
            },
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {

        });
        
    };

    return (
        <>
            <div className="w-96 font-mono rounded border p-5 shadow-md bg-white h-4/6">
            <h1>Signin</h1>
                <div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold text-slate-600">ユーザー名</label>
                        <input type="text" onChange={(e) => { setName(e.target.value)}} className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="username" />
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold text-slate-600">メールアドレス</label>
                        <input type="text" onChange={(e) => { setEmail(e.target.value)}} className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="email" />
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold text-slate-600">パスワード</label>
                        <input type="password" onChange={(e) => { setPassword(e.target.value)}}  className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="password" />
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold text-slate-600">もう一度</label>
                        <input type="password"  onChange={(e) => { setPassword_once(e.target.value)}}  className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="password_once" />
                    </div>
                    <div className="flex flex-col py-3">
                        <button onClick={signin}  className="border text-white font-semibold rounded-full h-10 px-4 bg-emerald-600">新規登録</button>
                    </div>
                </div>
            </div>
        </>
    )
}