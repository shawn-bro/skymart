
import React from "react";
import { Search } from "lucide-react";

function SearchBar({searches,setsearches}) {
    
    return (
        <div className="flex w-full items-center gap-3 rounded-xl border border-[#252b35] bg-[#11151d] px-4 py-3 focus-within:border-emerald-500 sm:max-w-md">
            <Search size={20} className="text-gray-500" />

            <input
            value={searches}
            onChange={(e)=>setsearches(e.target.value)}
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
        </div>
    );
}

export default SearchBar;
