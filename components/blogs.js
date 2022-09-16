import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/api";
import { formatDate } from "../lib/datatime";
import Button from "./button";

export default function Blogs({ posts }){
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
                    posts.map((e, i) => (

                        <div className={"blog-card bg-font mt-10 mx-10"} key={i}>

                            <div className="image">
                                <img src={e.featuredImage.node.sourceUrl} alt="" />
                            </div>
                            <div className="text flex flex-col justify-evenly items-start">
                                <p className="date text-second">
                                    {formatDate(e.date)}
                                </p>
                                <h3 className="md">
                                    {e.title}
                                </h3>
                                <p className="text-sixth">
                                    {e.description}
                                </p>
                                <Button 
                                    text="Read More"
                                    url={e.uri}
                                    style="light"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}