import AddProduct from "../../pages/addProduct/AddProduct";
import Dashboard from "../../pages/dashboard/Dashboard";
import Moviment from "../../pages/movimentacao/Movement";
import Produtos from "../../pages/produtos/Produtos";

const RightBack = ({currentPage}) => {
  return (
    <div className="bg-slate-50 w-full p-4">
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "produtos" && <Produtos />}
      {currentPage === "movimentacao" && <Moviment />}
      {currentPage === "addproduct" && <AddProduct />}
    </div>
  );
};

export default RightBack;
