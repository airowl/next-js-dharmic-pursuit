import Link from "next/link";
import Image from "next/image";
import headerImg from '../assets/img/header-img-invest.png'
import Button from "./button";
import CardTool from "./card-tool";

export default function Hero(){
    return (
        <section id="hero" className="bg-gradient-to-r from-main to-second text-white w-screen h-screen flex items-center">
            <div className="w-full text-center md:text-left md:ml-12 md:w-3/5">
                <h1 className="text-5xl md:text-7xl font-bold ">
                    We Envision Financial Wellness
                </h1>
                <p className="text-xl my-5 md:text-2xl md:my-14">
                    Guiding You In Value Investing And Personal Finance
                </p>
                {/*<Link href="#">
                    <a className="btn first-btn bg-third">Let&apos;s Talk</a>
                </Link>*/}
                <Button url="#" style="dark" >Let's start</Button>
            </div>
            <div className="hidden md:inline relative top-32">
                <Image className="w-full absolute img-size" src={headerImg} alt="header img"/>
            </div>
        </section>
    );
}