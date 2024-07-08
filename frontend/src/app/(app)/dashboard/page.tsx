
import Header from '@/app/components/header';
import LeftSideContent from '@/app/components/leftsidecontent';

export default function Page(){
    return (
        <>
            <Header></Header>
            <div className="flex">
                <div className="flex-1 basis-1/4 hidden sm:block max-w-44">
                    <LeftSideContent></LeftSideContent>
                </div>
                <div className="w-full flex-1 basis-3/4">
                    <div className="p-3 flex">
                        <div className="p-3 w-full border bg-white shadow-sm">
                        <h1 className="font-semibold">Dashboard</h1>
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
                </div>
            </div>
        </>
    )
  }