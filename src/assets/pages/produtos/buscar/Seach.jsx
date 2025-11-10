import React from "react";

const Seach = ({text}) => {
  return (
    <div className="flex border items-center p-4 rounded-md mt-4 w-full bg-white">
      <form className="flex items-center w-full">
        <input
          type="text"
          placeholder={text}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="ms-4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" >
            <option value="todos">Todas as categorias</option>
            <option value="eletrônicos">Eletrônicos</option>
            <option value="moveis">Môveis</option>
            <option value="acessorio">Acessorio</option>
        </select>
        <select className="ms-4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="todos">Todos os status</option>
            <option value="em-estoque">Em estoque</option>
            <option value="estoque-baixo">Estoque baixo</option>
            <option value="sem-estoque">Sem etoque</option>
        </select>
      </form>
    </div>
  );
};

export default Seach;
