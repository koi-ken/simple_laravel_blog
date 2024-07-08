
import Header from '@/app/components/header';

export default function Page(){
    return (
        <>
            <Header></Header>
            <h1 className="font-semibold">Dashboard</h1>
            <div className="p-3 flex">
                <div className="p-3 w-full border bg-white shadow-sm">
                </div>
            </div>
            <div className="p-3 flex flex-row flex-wrap gap-3">
                <div className="flex-1 md:basis-1/3 basis-1/2 p-3 border bg-white shadow-sm">
                    <div className="text-xl">Title</div>
                    <div className="mt-2">Description...</div>
                </div>
                <div className="flex-1 md:basis-1/3 basis-1/2 p-3 border bg-white shadow-sm">
                    <div className="text-xl">Title</div>
                    <div className="mt-2">Description...</div>
                </div>
                <div className="flex-1 md:basis-1/3 basis-1/2 p-3 border grow-1 bg-white shadow-sm">
                    <div className="text-xl">Title</div>
                    <div className="mt-2">Description...</div>
                </div>
                <div className="flex-1 md:basis-1/3 basis-1/2 p-3 border grow-1 bg-white shadow-sm">
                    <div className="text-xl">Title</div>
                    <div className="mt-2">Description...</div>
                </div>
            </div>
        </>
    )
  }