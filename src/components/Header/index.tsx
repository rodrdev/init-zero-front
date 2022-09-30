import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <>
      <div className="w-full p-2 bg-white flex justify-between">
        <div className="">
          <img className="cursor-pointer mx-2 w-24" src={Logo} alt="" />
        </div>
        <div className="w-[150px] rounded-lg p-2 text-center cursor-pointer text-white font-Inter font-bold bg-[#4E15F5]">
          Sou iniciante
        </div>
      </div>
    </>
  );
};

export default Header;
