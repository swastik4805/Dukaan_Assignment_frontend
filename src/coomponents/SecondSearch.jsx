
export function SecondSearch(){
    return(
        <div className="pl-4 pt-8 flex">
            <div className="pt-3 pr-3">
                <span className="input-group-prepend">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-gray-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Order ID or transaction ID"
                aria-label="Search"
                style={{ fontSize: '16px', padding: '10px', backgroundColor: "#FFFFFF" , border:"1px solid gray", borderRadius: "10px"}}
            />
        </div>
    )
}