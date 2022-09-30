import CardOptions from "../../components/CardOptions";
import { BsLightningCharge, BsCode, BsBox, BsLayers } from "react-icons/bs";

const Home = () => {
  const cards = [
    {
      title: "FrontEnd",
      icon: <BsLightningCharge />,
      description:
        "Encontre quem está aprendendo React, Vue, Angular e outras tecnologias frontend",
      dinamicBg: "bg-gradient-to-r from-[#11A9FF] to-[#3A80A8]",
    },
    {
      title: "BackEnd",
      icon: <BsCode />,
      description:
        "Encontre quem está aprendendo Laravel, Express.js, Flask, Rails, e outras tecnologias backend.",
      dinamicBg: "bg-gradient-to-r from-[#4F11FF] to-[#493AA8]",
    },
    {
      title: "DevOps",
      icon: <BsLayers />,
      description:
        "Encontre quem está aprendendo Kubernetes, Jenkins, AWS e outras tecnologias devops.",
      dinamicBg: "bg-gradient-to-r from-[#FF8E26] to-[#A86F3A]",
    },
    {
      title: "InfoSec",
      icon: <BsBox />,
      description:
        "Encontre quem está aprendendo Metasploit, Nmap, Nessus e outras tecnologias infosec.",
      dinamicBg: "bg-gradient-to-r from-[#7CEF22] via-[#7EA83A] to-[#50B12E]",
    },
  ];

  return (
    <>
      <div className="w-full text-center mt-12">
        <h1 className="text-6xl font-Inter font-bold">
          Os melhores iniciantes
        </h1>
        <p className="font-Inter mt-2 font-light text-gray-500 text-base">
          A plataforma que te ajuda a encontrar os melhores iniciantes na área
          de tecnologia
        </p>
      </div>
      <div className="w-full mt-6">
        <div className="flex flex-row mx-auto w-[1200px]">
          {cards.map((card) => (
            <div className="basic-1/4 m-4 ">
              <CardOptions card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
