import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const goalCards = [
    {
        icon: 'gamepad',
        text: 'Innovative Solutions'
    },
    {
        icon: 'phone',
        text: '24/7 Support'
    },
    {
        icon: 'people-group',
        text: 'Professional Team'
    },
];

export default function Goals(){
    return(
        <section id="our-goal" className="w-screen md:h-screen container mx-auto md:flex md:flex-row-reverse md:grow md:items-center py-24 md:py-0">
            <div className="px-10 md:w-1/2">
                <h3 className="text-base md:text-2xl text-second text-center">
                    Our Goal
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold text-center my-5">
                    Building A Big Community!
                </h2>
                <p className="text-sixth my-5">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                </p>
                <br/>
                <p className="text-sixth">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                </p>
            </div>
            <div className="md:w-1/2">
                {
                    goalCards.map((e, i) => (
                        <div className="goal-card flex flex-col justify-center items-center" key={i}>
                            <div className="icon flex flex-col justify-center items-center bg-second text-fourth">
                                <FontAwesomeIcon icon={["fas", `${e.icon}`]} className="i"/>
                            </div>
                            <h3 className="">
                                {e.text}
                            </h3>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}