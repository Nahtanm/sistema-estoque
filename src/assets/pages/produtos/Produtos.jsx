import React from "react";
import Button from "../../components/button/Button";
import { BiBox } from 'react-icons/bi';
import Seach from "./buscar/Seach";

const Produtos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-4xl font-medium">Produtos</h1>
          <p className="font-medium text-gray-500">
            Gerencie seu inventário de produtos
          </p>
        </div>
        <Button
          text="Novo Produto"
          className="bg-blue-600 text-slate-50 py-2 px-4 rounded-md me-10 flex items-center"
          children={<BiBox className="inline-block me-2 text-lg "/>}
        />
      </div>
      <Seach text='Buscar produto'/>
    </div>
  );
};

export default Produtos;
