
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Cartactions } from "../state/Cartaction";
import { useState } from "react";

export const usecart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setcart] = useState([]);

  const addtocart = async (data) => {
    const updatedCart = [
      ...cart,
      { ...data, quantity: 1 },
    ]
    setcart(updatedCart);

    try {
      const res = await dispatch(Cartactions(updatedCart)).unwrap();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return { addtocart, cart };
};

