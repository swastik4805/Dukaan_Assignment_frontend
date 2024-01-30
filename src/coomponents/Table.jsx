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
                    <div key={x.orderID} className="flex justify-between p-4">
                        <div>{x.orderID}</div>
                        <div>{x.status}</div>
                        <div>{x.tranactionID}</div>
                        <div>{x.refundDate}</div>
                        <div>{x.orderAmount}</div>
                    </div>
                ))}
            </div>
        </div>

      );
}