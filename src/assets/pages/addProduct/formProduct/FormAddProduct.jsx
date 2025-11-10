import React from "react";
import LabelInput from "../../../formInput/LabelInput";
import { BiBox } from "react-icons/bi";
import Button from "../../../components/button/Button";
import { FaFloppyDisk } from "react-icons/fa6";

const FormAddProduct = () => {
  return (
    <div className="flex-1 flex-wrap w-full border bg-white rounded mt-4 p-4">
      <div className="flex items-center gap-2 pl-4">
        <BiBox />
        <h2 className="font-semibold text-2xl">Informações do produto</h2>
      </div>
      <form className="grid md:grid-cols-2 gap-4 p-4">
        <LabelInput
          text="Nome do produto"
          name="nome"
          type="text"
          placeholder="Ex: Notebook Dell Inspiron"
        />
        <label className="flex flex-col">
          <span className="font-semibold">Categoria *</span>
          <select
            name="categoria"
            className="border border-slate-200 rounded-lg p-2"
          >
            <option selected>Selecione uma categoria</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="moveis">Móveis</option>
            <option value="roupas">Roupas</option>
            <option value="alimentos">Alimentos</option>
            <option value="livros">Livros</option>
          </select>
        </label>
        <LabelInput
          text="Quantidade inicial"
          name="qtd"
          type="numeber"
          placeholder="0"
        />
        <LabelInput
          text="Estoque minimo"
          name="qtd"
          type="numeber"
          placeholder="0"
        />
        <LabelInput
          text="Preço unitário"
          name="preco"
          type="number"
          placeholder="0,00"
        />
        <LabelInput
          text="Fornecedor"
          name="fornecedor"
          type="text"
          placeholder="Nome do fornecedor"
        />
      </form>
      <div className="flex flex-col gap-2 p-4">
        <LabelInput
          text="Localização no estoque"
          name="localizacao"
          type="text"
          placeholder="Ex: Eastoque A - Prateleira 1"
        />
        <label className="flex flex-col">
          <span className="font-semibold">Descrição</span>
          <textarea
            name="descricao"
            placeholder="Informações adicionais sobre o produto"
            className="h-24 p-2 border rounded border-slate-200"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <Button
          text="Salvar produto"
          className="bg-blue-600 text-slate-50 font-semibold py-2 px-4 rounded-md me-10 flex items-center w-6/12 justify-center"
          children={<FaFloppyDisk className="inline-block me-2 text-lg " />}
        />
        <Button text="Cancelar" className="bg-white text-slate-950 border font-semibold py-2 px-4 rounded-md me-10 flex items-center w-1/4 justify-center"
          />
      </div>
    </div>
  );
};

export default FormAddProduct;
