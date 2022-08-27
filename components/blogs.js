import Image from "next/image";

const blogCards = [
    {
        date: 'January 01, 2021',
        title: 'How to Start a Successful in 2020',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        url: '#'
    },
    {
        date: 'January 01, 2021',
        title: 'How to Start a Successful in 2020',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        url: '#'
    },
    {
        date: 'January 01, 2021',
        title: 'How to Start a Successful in 2020',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        url: '#'
    },
];

export default function Blogs(){
    return(
        <section id="tools" className="w-screen flex flex-col items-center py-20">
            <div className="col-lg-12 col-xs-12">
                <h3 className="text-base md:text-2xl text-second text-center">
                    Our Blogs
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold text-center my-5">
                    Latest News
                </h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    blogCards.map((e, i) => (
                        <div className="blog-card bg-font mt-10 mx-10" key={i}>
                            <div className="image">
                                <Image src="" alt="" />
                            </div>
                            <div className="text flex flex-col justify-evenly items-start">
                                <p className="date text-second">
                                    {e.date}
                                </p>
                                <h3 className="md">
                                    {e.title}
                                </h3>
                                <p className="text-sixth">
                                    {e.description}
                                </p>
                                <a href="#" className="btn second-btn bg-second text-font">Read More</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}