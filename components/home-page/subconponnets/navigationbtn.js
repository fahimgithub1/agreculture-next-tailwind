

export default function NavigationBtn(props){

    return(
        <button data-collapse-toggle="mobile-menu" 
                type="button" 
                className="inline-flex justify-center items-center ml-3 
                         text-gray-400 rounded-lg md:hidden hover:text-gray-900 
                         focus:outline-none focus:ring-2 focus:ring-blue-300 
                         dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" 
                aria-controls="mobile-menu-2" 
                aria-expanded="false"
                onClick={props.onNavigationhandle}
        >

            <svg className="w-6 h-6" 
                 aria-hidden="true" 
                 fill="currentColor" 
                 viewBox="0 0 20 20" 
                 xmlns="http://www.w3.org/2000/svg"
            >
                <path fillRule="evenodd" 
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 
                         1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"     
                      clipRule="evenodd">
                </path>
            </svg>
        </button>
    )
}