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
        <header>
            <div className="container see">
                <div className="logo">
                    LOGO
                </div>

                <div className="hamburger" onClick="">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}