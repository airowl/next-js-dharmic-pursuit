import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardTool({props}){

  // icon, title, text, style

  const checkStyle = (style) => {
    if (style == 2 || style == 3) {
        return 'white';
    } return 'opacity-5';
}

const getBgCard = (style) => {
    if (style == 2) {
        return 'text-font bg-second';
    } else if (style == 3) {
        return 'text-font bg-fifth';
    }
    return 'bg-font';
}

  return(
    <>
      <div className={"tool-card mt-8 " + (getBgCard(props.style))}>
          <div className={"shape-1 bg-gradient-to-br from-second to-[rgba(48,41,217,0)]  " + (checkStyle(props.style))}></div>
          <div className={"shape-2 bg-gradient-to-tl from-second to-[rgba(48,41,217,0)]  " + (checkStyle(props.style))}></div>
          <div className="text flex flex-col justify-evenly items-center">
              {/*<div className="w-16">*/}
                  <FontAwesomeIcon className="w-16" icon={["fas", `${props.icon}`]} />
              {/*</div>*/}
              <p>
                  {props.title}
              </p>
              <div className="description">
                  <h3 className="md">
                      {/*{e.title}*/}
                  </h3>
                  <p>
                      {props.text}
                  </p>
              </div>
          </div>
      </div>
    </>
  );
}