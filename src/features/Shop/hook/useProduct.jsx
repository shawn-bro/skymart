import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { categorylist, categorysearch, productapi } from "../api/Productapi";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";




export const useProduct = () => {
    let navigate = useNavigate();
let dispatch = useDispatch();

    const limit = 30;
    const [pages, setpages] = useState(0);
    const [searches, setsearches] = useState("");
    const [debounce, setdebounce] = useState("");
    const [catergorys, setcategorys] = useState("");
    

    useEffect(() => {
        const time = setTimeout(() => {
            setdebounce(searches);
            setpages(0);
        }, 1000);

        return () => clearTimeout(time);
    }, [searches]);

    useEffect(() => {
        setpages(0);
    }, [catergorys]);

    const {
        data,
        isPending,
        isFetching,
        error,
    } = useQuery({
        queryKey: ["products", pages, debounce, catergorys],

        queryFn: async () => {
            let result;

            if (catergorys) {
                result = await categorysearch(catergorys);
            } else if (debounce) {
                result = await productapi(0, 0, debounce);
            } else {
                result = await productapi(limit, pages * limit);
            }

             if (debounce && catergorys) {
        return {
            ...result,
            data: {
                ...result,
                products: result.data.products.filter(product =>
                    product.title.toLowerCase().includes(
                        debounce.toLowerCase()
                    )
                )
            }
        };
    }
            return result;
        },

        placeholderData: (previousData) => previousData,
        staleTime: 10000,
    });






    return {
        data,
        isPending,
        isFetching,
        error,
        pages,
        setpages,
        limit,
        searches,
        setsearches,
        catergorys,
        setcategorys,
        navigate,
        dispatch
    };
};

export const categoryl = ()=>{
    let {data,isPending,error} = useQuery({
        queryKey:["categorylist"],
        queryFn:categorylist,
        staleTime:1000
    });

    return{
        data,
        isPending,
        error
    }
}

//export const categoryse = ()=>{
//    let [catergorys,setcategorys] = useState(null);
//    
//     let {data,isPending,error} = useQuery({
//        queryKey:["categorysearch",catergorys],
//        queryFn:()=>categorysearch(catergorys),
//        staleTime:10000
//     });
//
//     return{
//        data,
//        catergorys,
//        setcategorys
//     }
//}

//export const searching = ()=>{
//    let [searches,setsearches] = useState("");
//    
//    let [debounce,setdebounce] = useState("")
//
//    useEffect(()=>{
//        let time = setTimeout(() => {
//            setdebounce(search)
//        }, 1000);
//
//        return ()=>clearTimeout(time);
//        },[search])
//    
//    let {data,isPending,error} = useQuery({
//        queryKey:["categorysearch",debounce],
//        queryFn:()=>search(debounce),
//        staleTime:10000
//     });
//
//     return{
//        data,
//        isPending,
//        error,
//        setsearches,
//        searches
//     }
//}