import { Card } from "@material-tailwind/react";
import Search from './Search'
  export default function Content() {
    return (
        <div className="grid h-screen place-items-center">
            <Card className="w-full max-w-[26rem] shadow-lg bg-slate-600 p-5">
                <div className="flex flex-col p-3">
                    <div className="p-2">
                        <h1 className=" text-white">Github Details</h1>
                    </div>
                    <Search />
                </div>
            </Card>
        </div>
      
    );
  }