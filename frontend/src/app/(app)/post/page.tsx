"use client"

import axios from '@/lib/axios';
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();
    const post = async (formdata: FormData) => {
        console.log(formdata);
        
        await axios.post('/api/article.store',{
            title: formdata.get('title'),
            post: formdata.get('post')
        }).then((res) => {
            console.log(res);
            router.push('/dashboard');
        }).catch((error) => {
            console.log(error);
        });
        
    }

    return (
        <>
            
            <div className="flex p-3 min-h-screen">
            
                <form action={post} className="flex flex-col gap-5 bg-white shadow-sm w-full px-4 py-6">
                    <div className="">
                        <label className="font-semibold font-sans">タイトル</label>
                        <input name="title" className="border w-full min-h-10 form-input px-2 rounded" type="text" placeholder="タイトルを入力してください..." />
                    </div>
                    <div className="flex flex-col grow">
                        <label className="font-semibold font-serif">本文</label>
                        <textarea name="post" className="border w-full px-2 py-2 rounded grow" placeholder="本文を入力してください..."></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-emerald-600 text-white font-semibold rounded-md h-10 w-24">投稿</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Page;