import Link from "next/link";

export default function AboutUs(){
    return(
        <section id="about-us" className="w-screen h-screen">
            <div className="col-lg-6 col-xs-12 right-side">
                boxes
            </div>
            <div className="px-10">
                <h3 className="text-base md:text-2xl text-second text-center">
                    About us
                </h3>
                <h2 className="text-2xl font-bold text-center my-5">
                    WELCOME! WE’RE DHARMIC PURSUIT! YOUR DAILY SOURCE OF MONEY TIPS AND VALUE INVESTING.
                </h2>
                <p className="text-sixth my-5">
                    We’re into building a massive community of savers and investors who want to achieve financial wellness.
                </p>
                <p className="text-sixth my-5">
                    In 2020, a high volume of people started investing, trying to get along with the “hype.”. Assuming that investing was a get-rich-quick idea. Unfortunately, the scheme did not last forever and history just repeated itself.
                </p>
                <p className="text-sixth my-5">
                    Here in Dharmic Pursuit, we focus on three practices:
                </p>
                <ul className="text-sixth list-disc my-5">
                    <li>
                        What? — What should drive people to purchase a particular stock?
                    </li>
                    <li>
                        Why? — Why start investing & learn money management?
                    </li>
                    <li>
                        How? — How to start sustainable and effective investing?
                    </li>
                </ul>
                <p className="text-sixth my-5">
                    With the help of our affiliate partners, we are dedicated to provide you the best financial solutions that you can get to improve your money management.
                </p>
                <Link href="#">
                    <a className="btn second-btn bg-second text-white">Read About Us</a>
                </Link>
            </div>
    </section>
    );
}