import Link from "next/link";

export default function Button(props){

  // text, link and style

  return(
      <>
        <Link href={props.url}>
          <a className="btn first-btn bg-third">{props.text}</a>
        </Link>
      </>
  );
}