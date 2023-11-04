'use client';
import React, { createContext, useEffect, useState } from 'react'
import { format } from 'date-fns';

export const storeContext = createContext();

export default function StoreProvider({children}) {
    const [headerName, setHeaderName] = useState("Dashboard");
    const [allCustomers, setAllCustomers] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {

      const storedArray = JSON.parse(localStorage.getItem('myArray'));
      const storedProductsArray = JSON.parse(localStorage.getItem('productsArray'));
      const storedOrdersArray = JSON.parse(localStorage.getItem('ordersArray'));
      if (storedArray) {
        setAllCustomers(storedArray);
      }
      if (storedProductsArray) {
        setAllProducts(storedProductsArray);
      }
      if (storedOrdersArray) {
        setAllOrders(storedOrdersArray);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('myArray', JSON.stringify(allCustomers));
    }, [allCustomers]);

    useEffect(() => {
      localStorage.setItem('productsArray', JSON.stringify(allProducts));
    }, [allProducts]);

    useEffect(() => {
      localStorage.setItem('ordersArray', JSON.stringify(allOrders));
    }, [allOrders]);


    const addToCustomersArray = (newObject) => {
      setAllCustomers((prevArray) => [...prevArray, newObject]);
    };
    const addToProductsArray = (newObject) => {
      setAllProducts((prevArray) => [...prevArray, newObject]);
    };
    const addToOrdersArray = (newObject) => {
      setAllOrders((prevArray) => [...prevArray, newObject]);
    };

    const changeDateFormate = (dateInput) => {
      const parsedDate = new Date(dateInput);
      const formattedDate = format(parsedDate, 'dd MMM yyyy');
      return formattedDate;
    }
    const changeTimeFormate = (timeInput) => {
      const parsedTime = new Date(`1970-01-01T${timeInput}`);
      const formattedTime = format(parsedTime, 'hh:mm a');
      return formattedTime;
    }

    const getTotalPrice = (products, orderProducts) => {
      const totalPrice = orderProducts.reduce((total, productName) => {
        const product = products.find((p) => p.name === productName);
        if (product) {
          return total + Number(product.price);
        }
        return total;
      }, 0);
    
      return totalPrice;
    };

    const getPendingOrder = (orders) => {
      let pendingOrders = 0 ; 
      orders.map((order) => {
        // let counter;
        if (order.orderStatus === "Pending" )
        {
          pendingOrders++;
        }
      })
      return pendingOrders ;
    }
    const getCompletedOrder = (orders) => {
      let completedOrders = 0 ; 
      orders.map((order) => {
        // let counter;
        if (order.orderStatus === "Completed" )
        {
          completedOrders++;
        }
      })
      return completedOrders ;
    }
    
  return <storeContext.Provider value={{headerName, setHeaderName, allCustomers, setAllCustomers, addToCustomersArray, 
  addToProductsArray, allProducts, addToOrdersArray, allOrders, changeDateFormate, changeTimeFormate, getCompletedOrder,
   getTotalPrice, getPendingOrder}}>

    {children}
    
  </storeContext.Provider>
}
