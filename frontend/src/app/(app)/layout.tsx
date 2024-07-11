'use client'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import Header from '@/components/header';
import Nav from '@/components/blocks/Nav';
import Link from 'next/link';

const AppLayout = ({ children }: {children: React.ReactNode; }) => {
    const { user } = useAuth({ middleware: 'auth' })

    
    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-200">
            <Header></Header>
            <div className="flex flex-col md:flex-row item-stretch">
                <div className="flex-1 basis-1/4 w-full md:max-w-44">
                    <Nav>
                        <Link href="/post" className="text-white font-semibold">新規投稿</Link>
                    </Nav>
                </div>
                <div className="w-full flex-1 basis-3/4">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}

export default AppLayout
