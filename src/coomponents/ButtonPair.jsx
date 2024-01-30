
export function ButtonPair(){
    return(
        <div className="flex pl-4 pt-8">
            <div>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white 
                rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 
                dark:focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Payouts</button>
            </div>

            <div>
                <button type="button" class="text-white bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 
                font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-700 dark:hover:bg-gray-800 
                dark:focus:ring-blue-700">Refunds(6)</button>

            </div>
        </div>
    )
}