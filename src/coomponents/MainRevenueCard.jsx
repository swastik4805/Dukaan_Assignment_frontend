
export function MainRevenueCard(props){
    return (
    <div className="p-4">
        <div className="bg-blue-700 rounded shadow-md p-4">
            <div className="text-gray-500 flex justify-center flex-col text-white">
                {props.title}
            </div>
            <div className="flex justify-between pt-2">
                <div className="text-2xl font-semibold text-white">{props.amount}</div>
                <div className="text-blue-700 font-semibold pt-1 text-white">{props.orderCount}</div>
            </div>
        </div>
        <div className="flex justify-between bg-[#0E4F82] pl-4 pr-4 pt-1 pb-1">
            <div className="text-white text-sm">Next Payment Date:</div>
            <div className="text-white text-sm">{props.nextPaymentDate}</div>
        </div>
    </div>
    )
}  