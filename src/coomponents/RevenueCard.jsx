
export function RevenueCard(props){
    return (
        <div className="p-4">
            <div className="bg-white rounded shadow-md p-4 h-24">
                <div className="text-gray-500 flex justify-center flex-col">
                    {props.title}
                </div>
                <div className="flex justify-between pt-2">
                    <div className="text-2xl font-semibold">{props.amount}</div>
                    <div className="text-blue-700 font-semibold pt-1">{props.orderCount}</div>
                </div>
            </div>
        </div>
    )
}  