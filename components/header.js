import { useState } from "react";

export default function Header(){

    let [isOpen, setOpen] = useState(false);

    function hamClick(){
        if (isOpen == false){
            setOpen(isOpen = true);
        } else {
            setOpen(isOpen = false);
        }
        console.log(isOpen);
    }

    return (
        <header className="container mx-auto flex justify-between px-10 py-5 see">
            <div className="">
                Logo
            </div>
            <div className="space-y-2 cursor-pointer" onClick={hamClick}>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
        </header>
    );
}