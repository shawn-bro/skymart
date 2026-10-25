import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { useProduct, categoryl } from "../../hook/useProduct";
import Pagination from "../components/pagination";

function Shop() {

    const {
        result,
        product,
        data: productData,
        pages,
        setpages,
        limit,
        isPending: isProductPending,
        searches,
        setsearches,
        catergorys,
        setcategorys
    } = useProduct();
const products = productData?.data?.products ?? [];


    

    const {
        data: categoryListData,
        isPending: isCategoryListPending,
    } = categoryl();
const list = categoryListData ?? [];
    
    

    const isPending = isProductPending;

    return (
        <main className="min-h-screen bg-[#080b10] p-5 text-white sm:p-8">
            <div className="mb-8">
                <p className="mb-2 text-sm font-medium text-emerald-400">
                    DISCOVER PRODUCTS
                </p>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Shop Collection
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Find the right products for your everyday needs.
                </p>
            </div>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <SearchBar setsearches = {setsearches} searches={searches}/>

                <CategoryFilter
                    list={list}
                    isPending={isCategoryListPending}
                    catergorys={catergorys}
                    setcategorys={setcategorys}
                />
            </div>

            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                    {catergorys || "All"} Products
                </h2>

                <span className="text-sm text-gray-500">
                    {products.length} products
                </span>
            </div>

            {isPending ? (
                <p className="py-10 text-center text-gray-400">
                    Loading products...
                </p>
            ) : products.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-[#252b35] py-16 text-center">
                    <p className="text-gray-400">
                        No products to display.
                    </p>
                </div>
            )}

            {!catergorys && (
                <Pagination
                    pages={pages}
                    setpages={setpages}
                    limit={limit}
                    total={productData?.data?.total ?? 0}
                />
            )}
        </main>
    );
}

export default Shop;