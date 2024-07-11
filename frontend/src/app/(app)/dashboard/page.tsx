"use client";

import Header from '@/components/header';
import Nav from '@/components/blocks/Nav';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export default function Page(){

    type ArticleData = {
        id: number;
        title: string;
        post: string;
    };

    const [articles, setArticles] = useState<ArticleData[]>([]);

    useEffect(() => {
        
        axios.get('/api/articles.get')
        .then((res) => {
            const data = res.data.payload;

            let new_arr: ArticleData[] = [];
            data.map((item: ArticleData) => {
                new_arr.push({
                    id: item.id,
                    title: item.title,
                    post: item.post
                });
            });
            setArticles(new_arr);
        })
        .catch((error) => {

        });

    }, []);
 
    return (
        <>
            <div className="min-h-screen">
            <div className="p-3 flex">
                <div className="p-3 w-full border bg-white shadow-sm">
                <h1 className="font-semibold">Dashboard</h1>
                </div>
            </div>
            <div className="p-3 flex flex-row flex-wrap">
                {
                    articles.map((data, index) => 
                    <div key={index} className="grow basis-full md:grow-0 md:shrink-0 md:basis-1/2">
                        <div className="m-0.5 p-3 border bg-white rounded-sm shadow-sm">
                            <div className="text-xl">{data.title}</div>
                            <div className="mt-2">{data.post}</div>
                        </div>
                    </div>
                    )
                }
            </div>
            </div>
        </>
    )
  }