import React from "react";
import { ChevronDown } from "lucide-react";

function CategoryFilter({ list, isPending, catergorys, setcategorys }) {
    if (isPending) return <p>Loading categories...</p>;
   
    

    return (
        <div className="relative w-full sm:w-56">
            <select
                value={catergorys}
                onChange={(e) => setcategorys(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#252b35] bg-[#11151d] px-4 py-3 pr-10 text-sm capitalize text-white outline-none focus:border-emerald-500"
            >
                <option value="">All Categories</option>

                {list.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
        </div>
    );
}

export default CategoryFilter;