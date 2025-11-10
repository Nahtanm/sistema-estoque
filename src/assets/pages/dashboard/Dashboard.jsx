import { BsBoxFill,BsArrowDownUp } from "react-icons/bs";
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaRegCalendar } from 'react-icons/fa';
import InfoCard from "../../components/cards/InfoCard";
import Cards from "../../components/cards/Cards";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <h1 className="text-4xl font-medium">Dashboard</h1>
        <p className="font-medium text-gray-500">Visão geral do seu estoque</p>
      </div>
      <div className="flex gap-4 w-full mt-4">
        <Cards
          text="Total de Produtos"
          children={
            <div className="bg-slate-400 w-6 h-6 flex items-center justify-center rounded-md text-white">
              <BsBoxFill className="text-base " />
            </div>
          }
          number="8"
        />
          <Cards
          text="Itens em Estoque"
          children={
            <div className="bg-slate-400 w-6 h-6 flex items-center justify-center rounded-md text-white">
              <FaArrowTrendUp className="text-base" />
            </div>
          }
          number="118"
        />
          <Cards
          text="Estoque Baixo"
          children={
            <div className="bg-slate-400 w-6 h-6 flex items-center justify-center rounded-md text-white">
              <FiAlertTriangle className="text-base" />
            </div>
          }
          number="3"
        />
          <Cards
          text="Movimentações (7 dias)"
          children={
            <div className="bg-slate-400 w-6 h-6 flex items-center justify-center rounded-md text-white">
              <BsArrowDownUp className="text-base" />
            </div>
          }
          number="5"
        />

      </div>
      <div className="flex items-stretch w-full gap-4 mt-4 flex-1 overflow-auto">
        <InfoCard text="Produtos com Estoque Baixo" children={<FiAlertTriangle className="text-orange-400 text-lg" />}/>
        <InfoCard text="Movimentações Recentes" children={<FaRegCalendar className="text-slate-400 text-lg" />}/>
      </div>
    </div>
  );
};

export default Dashboard;
