import CardBlog from "./card-blog";

export default function Blogs({ posts }){

    const checkResult = (posts) => {
        if (!posts) {
            return 'null';
        }
        return (
            posts.map((e, i) => (
                <CardBlog key={i} posts={e} />
            ))
        )
    }

    return(
        <section id="tools" className="w-screen md:py-72 flex flex-col items-center">
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
                    //checkResult(posts)
                    posts.map((e, i) => (
                        <CardBlog key={i} posts={e} />
                    ))
                }
            </div>
        </section>
    );
}