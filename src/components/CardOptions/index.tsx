import { BsArrowRightShort } from "react-icons/bs";

const CardOptions = (props: any) => {
  return (
    <div className="w-[260px] lg:w-[260px] h-[300px]  rounded-lg  mt-5 bg-white">
      <div className="p-3">
        <div
          className={`w-20 text-white flex  py-6 justify-center rounded-full  text-3xl ${props.card.dinamicBg}  h-20 m-auto `}
        >
          {props.card.icon}
        </div>
        <div className="w-full mt-4 text-center ">
          <h1 className="text-3xl font-Inter font-bold">{props.card.title}</h1>
        </div>
        <div className="w-full mt-4 text-center">
          <p className="text-sm break-words text-gray-500 font-Inter font-light">
            {props.card.description}
          </p>
        </div>
        <div className="text-center mt-5 w-full">
          <button
            className={`text-xl flex justify-center p-1 w-full rounded-lg text-white  ${props.card.dinamicBg} font-Inter font-bold`}
          >
            Buscar
            <BsArrowRightShort className="mt-1 text-2xl"></BsArrowRightShort>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOptions;
