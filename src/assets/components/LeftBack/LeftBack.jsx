import Options from "./Options/Options";
import { BsFileBarGraph, BsArrowDownUp } from "react-icons/bs";
import { BiBox } from 'react-icons/bi';
import { RiAddFill, RiSettings3Line } from 'react-icons/ri';

const LeftBack = ({onSelectPage}) => {
  return (
    <div className="flex flex-col items-center w-72 border-r border-gray-200">
      <Options
        children={<BsFileBarGraph className="text-2xl" />}
        text="Dashboard"
        onClick={() => onSelectPage("dashboard")}
      />
      <Options
        children={<BiBox className="text-2xl" />}
        text="Produtos"
        onClick={() => onSelectPage("produtos")}
      />
      <Options
        children={<BsArrowDownUp className="text-2xl" />}
        text="Movimentações"
        onClick={() => onSelectPage("movimentacao")}
      />
      <Options
        children={<RiAddFill className="text-2xl" />}
        text="Adicionar Produto"
        onClick={() => onSelectPage("addproduct")}
      />
      <Options
        children={<RiSettings3Line className="text-2xl" />}
        text="Configurações"
        onClick={() => onSelectPage("settings")}
      />
    </div>
  );
};

export default LeftBack;
