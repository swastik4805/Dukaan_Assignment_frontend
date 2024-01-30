import { data } from "./TableData";
export function Table(){
    return (
        <div className="pl-4 pr-4 pt-8">
            <div className="flex justify-between p-2 pr-2 bg-gray-300 rounded shadow-md">
                <div>order ID</div>
                <div>Status</div>
                <div>Transaction ID</div>
                <div>Refund date</div>
                <div>Order amount</div>
            </div>
            <div>
                {data.map(x=>(
                    <div key={x.orderID} className="flex justify-between p-4 shadow-sm">
                        <div className="text-blue-700">{x.orderID}</div>
                        {help(x.status)}
                        {/* <div>{x.status}</div> */}
                        <div>{x.tranactionID}</div>
                        <div>{x.refundDate}</div>
                        <div>{x.orderAmount}</div>
                    </div>
                ))}
            </div>
        </div>

      );
}

function help(prop){
     return prop==="Successful" ? 
    
     <div className="flex">
        <svg width="11" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.33594" cy="5" r="5" fill="#17B31B"/>
        </svg>
        <div className="pl-2">{prop}</div>
    </div>

    :
    <div className="flex">
        <svg width="11" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.33594" cy="5" r="5" fill="#999999"/>
        </svg>

        <div className="pl-2">{prop}</div>
    </div>
}