const Cards = ({ text, children, number }) => {
  return (
    <div className="border w-1/4 h-40 bg-white rounded-lg p-6">
      <div className="flex items-center justify-between">
        <p className="text-base text-slate-400 font-normal">{text}</p>
        {children}
      </div>
      <p className="mt-8 align-text-bottom text-2xl font-semibold">{number}</p>
    </div>
  );
};

export default Cards;
