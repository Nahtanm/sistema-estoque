import React from "react";
import FormAddProduct from "./formProduct/FormAddProduct";

const AddProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <h1 className="text-4xl font-medium">Adicionar produto</h1>
        <p className="font-medium text-gray-500">
          Cadastre um novo produto no estoque
        </p>
      </div>
      <FormAddProduct/>
    </div>
  );
};

export default AddProduct;
