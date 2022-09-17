import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardTool from "./card-tool";

const toolDatas = [
    {
        icon: 'coins',
        title: 'Financial Planning',
        text: '"If You Fail to Plan, You are Planning to Fail". We will help you on your journey towards financial wellness.',
        style: '1'
    },
    {
        icon: 'chart-simple',
        title: 'Investments',
        text: 'Do not stress yourself out finding the right investment for you. We will help you find the best we think is suited for you',
        style: '2'
    },
    {
        icon: 'shield',
        title: 'Protection',
        text: 'Protecting your loved ones is your responsibility. Make sure that you are rightly insured. ',
        style: '3'
    },
];

export default function Tools(){
    return(
        <section id="tools" className="w-screen md:py-72 container mx-auto flex flex-col items-center">
            <div className="">
                <h3 className="text-base md:text-2xl text-second text-center">
                    Our Services
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold text-center my-5">
                    What We Offer
                </h2>
            </div>
            <div className="md:flex md:justify-evenly md:items-center md:w-full">
                {
                    toolDatas.map((e, i) => (
                        <CardTool key={i} props={e} />
                    ))
                }
            </div>
        </section>
    );
}