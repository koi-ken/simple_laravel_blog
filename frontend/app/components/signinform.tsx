"use client";

import axios from 'axios';

export default function SigninForm(

){
    const signin = async () => {
        alert("signin clicked");
    };

    return (
        <>
            <div className="w-96 font-mono rounded border p-5 shadow-md bg-white h-4/6">
            <h1>Signin</h1>
                <form>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold">ユーザー名</label>
                        <input type="text" className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="username" />
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold">メールアドレス</label>
                        <input type="text" className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="email" />
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold">パスワード</label>
                        <input type="password"  className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="password" />
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="font-semibold">もう一度</label>
                        <input type="password_once"  className="border rounded h-8 focus:border-2 focus:border-emerald-600 focus:outline-none" name="password" />
                    </div>
                    <div className="flex flex-col py-3">
                        <button onClick={signin}  className="border text-white font-semibold rounded-full h-10 px-4 bg-emerald-600">新規登録</button>
                    </div>
                </form>
            </div>
        </>
    )
}