import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button";


const dataFooterStart = [
    {
        text: 'Podcast',
        url: '#'
    },
    {
        text: 'Sama Tea',
        url: '#'
    },
    {
        text: 'Calm',
        url: '#'
    }
]; 

const dataFooterMiddle =  [
    {
        text: 'Get Coaching',
        url: '#'
    },
    {
        text: 'Take a Course',
        url: '#'
    },
    {
        text: 'Find a Coach',
        url: '#'
    },
    {
        text: 'Become a Coach',
        url: '#'
    },
];

const dataFooterEnd = [
    {
        text: 'About Jay',
        url: '#'
    },
    {
        text: 'Press & Media',
        url: '#'
    },
    {
        text: 'Contact',
        url: '#'
    },
];

const dataSocialIcon =  [
    {
        icon: 'facebook',
        url: '#'
    },
    {
        icon: 'instagram',
        url: '#'
    },
    {
        icon: 'twitter',
        url: '#'
    },
]

export default function Footer(){
    return (
        <footer className="flex flex-col-reverse md:flex-row">
            <div className="py-12 px-10 bg-main md:bg-transparent text-font md:text-black md:w-3/6">
                <div className="links flex justify-between mb-10">
                    <ul>
                        {
                            dataFooterStart.map((e, i) => (
                                <li key={i}>
                                    <a href={e.url}>
                                        { e.text }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            dataFooterMiddle.map((e, i) => (
                                <li key={i}>
                                    <a href={e.url}>
                                        { e.text }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            dataFooterEnd.map((e, i) => (
                                <li key={i}>
                                    <a href={e.url}>
                                        { e.text }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p className="text-sixth">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, recusandae? Facere amet officiis consequatur itaque ducimus sint cumque laudantium repudiandae! Mollitia quas voluptatem reiciendis nam quasi provident corporis vero dolorem!
                </p>
                <p className="text-sixth">
                    © Dharmic Pursuit
                </p>
                <p className="text-sixth">
                    Created with ♡ by Airowl
                </p>
            </div>
            <div className="py-5 px-10 md:w-3/6">
                <h3 className="md">
                    Contact Us
                </h3>
                <p className="text-sixth">
                    Newsletter
                </p>
                <div className="newsletter flex justify-center items-center flex-wrap">
                    <input type="text" placeholder="* FirstName" className="w-full" />
                    <input type="text" placeholder="* Email" className="w-full" />
                    <Button 
                        text="Submit"
                        url="#"
                        style="light"
                    />
                </div>
                <div className="social mt-8">
                    Follow Us: 
                    <ul className="flex justify-center items-center">
                        {
                            dataSocialIcon.map((e, i) => (
                                <li key={i}>
                                    <a href={e.url}>
                                        <FontAwesomeIcon icon={["fab", `${e.icon}`]} className="i"/>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
}