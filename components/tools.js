import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const toolDatas = [
    {
        icon: 'calendar',
        int: 'Financial Planning',
        title: '',
        text: '"If You Fail to Plan, You are Planning to Fail". We will help you on your journey towards financial wellness.',
        style: '1'
    },
    {
        icon: 'chart-simple',
        int: 'Investments',
        title: '',
        text: 'Do not stress yourself out finding the right investment for you. We will help you find the best we think is suited for you',
        style: '2'
    },
    {
        icon: 'shield',
        int: 'Protection',
        title: '',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        style: '3'
    },
];

const checkStyle = (x, style, style1) => {
    if (x == 2 || x == 3) {
        return style
    } return style1
}

const getBgCard = (x, style1, style2, style3) => {
    if (x == 2) {
        return style1
    } else if (x == 3) {
        return style2
    }
    return style3
}

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
                        <div className={"tool-card mt-8 " + (getBgCard(e.style, 'text-font bg-second', 'text-font bg-fifth', 'bg-font'))} key={i}>
                            <div className={"shape-1 bg-gradient-to-br from-second to-[rgba(48,41,217,0)]  " + (checkStyle(e.style, 'white', 'opacity-5'))}></div>
                            <div className={"shape-2 bg-gradient-to-tl from-second to-[rgba(48,41,217,0)]  " + (checkStyle(e.style, 'white', 'opacity-5'))}></div>
                            <div className="text flex flex-col justify-evenly items-center">
                                {/*<div className="w-16">*/}
                                    <FontAwesomeIcon className="w-16" icon={["fas", `${e.icon}`]} />
                                {/*</div>*/}
                                <p>
                                    {e.int}
                                </p>
                                <div className="description">
                                    <h3 className="md">
                                        {e.title}
                                    </h3>
                                    <p>
                                        {e.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}