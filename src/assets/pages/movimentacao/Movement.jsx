import React from "react";
import Button from "../../components/button/Button";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Seach from "../produtos/buscar/Seach";

const Moviment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-4xl font-medium">Movimentação</h1>
          <p className="font-medium text-gray-500">
            Histórico de entradas e saídas de produtos
          </p>
        </div>
        <Button
          text="Nova movimentação"
          className="bg-blue-600 text-slate-50 py-2 px-4 rounded-md me-10 flex items-center"
          children={
            <FaArrowRightArrowLeft className="inline-block me-2 text-lg " />
          }
        />
      </div>
      <Seach text='Buscar movimentação'/>
    </div>
  );
};

export default Moviment;
