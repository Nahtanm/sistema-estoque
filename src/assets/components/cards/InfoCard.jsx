
const InfoCard = ({text, children}) => {
  return (
    <div className="w-1/2 border-2 rounded-lg p-4 bg-white">
        <div className="flex items-center p-2 gap-2">
            {children}
            <p className="text-2xl font-semibold">{text}</p>
        </div>
    </div>
  )
}

export default InfoCard