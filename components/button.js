import Link from "next/link";

export default function Button(props){

  // text, link and style

  const getBtnStyle = (type) => {
    if (type === "dark") {
      return "first-btn bg-third";
    } else if (type === "light") {
      return "second-btn bg-second text-white";
    } else {
      return "text-white bg-trasparent focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-solid border-2 border-white";
    }
  }

  return(
      <>
        <Link href={props.url}>
          <a className={"btn " + (getBtnStyle(props.style))}>{props.children}</a>
        </Link>
      </>
  );
}