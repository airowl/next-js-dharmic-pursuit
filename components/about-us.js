import Link from "next/link";

const shapeDatas = [
    {
        integer: '18',
        text: 'Years Experience'
    },
    {
        integer: '240+',
        text: 'Completed Projects'
    },
    {
        integer: '9.5/10',
        text: 'Average rating'
    },
    {
        integer: '150+',
        text: 'Served'
    },
    {
        integer: '18',
        text: 'Years Experience'
    },
];

export default function AboutUs(){
    return(
        <section id="about-us" className="w-screen md:h-screen md:flex md:flex-row-reverse md:grow md:items-center pb-24">
            <div className="shape-a md:w-1/2 overflow-hidden relative w-full">
                <div className="shape-b flex items-center overflow-hidden">
                    {
                        shapeDatas.map((e, i) => (
                            <div className="shape bg-second/[.2] text-second flex flex-col justify-center my-10 mx-8" key={i}>
                                <h2 className="text-4xl">
                                    {e.integer}
                                </h2>
                                <p className="text-second">
                                    {e.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="px-10 mt-10 md:w-1/2">
                <h3 className="text-base md:text-2xl text-second text-center md:text-left">
                    About us
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left my-5">
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