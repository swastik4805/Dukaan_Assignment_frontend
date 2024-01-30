
export function SecondSearch(){
    return(
        <div className="pt-8 pl-4">
            <div className="mb-3 relative">
                <div className="flex items-stretch">
                <input
                    type="search"
                    className="m-0 block min-w-0 rounded border border-solid 
                    px-12 py-[0.25rem] 
                    focus:outline-none dark:border-neutral-600"
                    placeholder="Order ID or Transaction ID"
                    aria-label="search"
                    aria-describedby="button-addon2"
                />

                <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 absolute left-0"
                    id="basic-addon2"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                    >
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </div>
            </div>
            </div>
    )
}