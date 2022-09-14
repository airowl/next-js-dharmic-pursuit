import Link from "next/link";

export default function Hero(){
    return (
        <section id="hero" className="bg-gradient-to-r from-main to-second text-white w-screen h-screen flex items-center">
            <div className="w-full text-center md:text-left md:ml-12 md:w-3/5">
                <h1 className="text-5xl md:text-7xl font-bold">
                    We Envision Financial Wellness
                </h1>
                <p className="text-base my-5 md:my-14">
                    Guiding You In Value Investing And Personal Finance
                </p>
                <Link href="#">
                    <a className="btn first-btn bg-third">Let&apos;s Talk</a>
                </Link>
            </div>
        </section>
    );
}