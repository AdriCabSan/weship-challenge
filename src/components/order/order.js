import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavBar} from "../appbar/appbar"
import {OrderTable} from "./order-table"

export const Order = () => {
  const [orders, setOrders] = useState();
  const [nextOrderId, setNextOrder] = useState(0);
  const [newOrderLabel, setNewOrder] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/orders")
    .then(({data})=> {
      
      setOrders(data)
      setNextOrder(data.length)
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);

  const addOrder = () => {
    setOrders([
      ...orders,
      {
        id: nextOrderId,
        label: newOrderLabel,
        done: false
      }
    ]);
    setNextOrder(nextOrderId + 1);
    setNewOrder("");
  };

  return orders ? (
    <div>
    <NavBar></NavBar>
    <OrderTable></OrderTable>
    </div>
  ):(<div>..loading</div>);
};