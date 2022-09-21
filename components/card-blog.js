import { formatDate } from "../lib/datatime";
import Button from "./button";

export default function CardBlog({ posts }){
    return(
        <>
        <div className={"blog-card bg-font mt-10 mx-10"}>

            <div className="image">
                <img src={posts.featuredImage.node.sourceUrl} alt="" />
            </div>
            <div className="text flex flex-col justify-evenly items-start">
                <p className="date text-second">
                    {formatDate(posts.date)}
                </p>
                <h3 className="md">
                    {posts.title}
                </h3>
                <p className="text-sixth">
                    {posts.description}
                </p>
                <Button 
                    url={posts.uri}
                    style="light"
                >
                    Read More
                </Button>
            </div>
        </div>
        </>
    );
}