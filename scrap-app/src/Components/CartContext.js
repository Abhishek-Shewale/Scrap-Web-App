// // CartContext.js
// import React, { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Load cart items from localStorage on page load
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
//     if (savedCartItems) {
//       setCartItems(savedCartItems);
//     }
//   }, []); // Empty dependency array to run the effect only once on initialization

//   const saveCartItemsToLocalStorage = (items) => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//   };

//   const handleAddToCart = (product) => {
//     // ... (existing code)
//     setCartItems((prevItems) => {
//       const newItems = [...prevItems, product];
//       saveCartItemsToLocalStorage(newItems); // Save the updated cart items to localStorage
//       return newItems;
//     });
//   };

//   const handleRemoveFromCart = (productId) => {
//     // ... (existing code)
//     setCartItems((prevItems) => {
//       const newItems = prevItems.filter((item) => item.productId !== productId);
//       saveCartItemsToLocalStorage(newItems); // Save the updated cart items to localStorage
//       return newItems;
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, handleAddToCart, handleRemoveFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


// CartContext.js
import React, { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

export const CartContext = createContext({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
});


export const CartProvider = ({ children, loggedInUser }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isProductAdded, setIsProductAdded] = useState(false);

  useEffect(() => {
    // Load cart items for the current user from local storage on page load
    const savedCartItems = JSON.parse(
      localStorage.getItem(`${loggedInUser}-cartItems`)
    );
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, [loggedInUser]);

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem(
      `${loggedInUser}-cartItems`,
      JSON.stringify(cartItems)
    );
  }, [cartItems, loggedInUser]);
  const saveCartItemsToLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const handleAddToCart = (product) => {
    
    setCartItems((prevItems) => {
      const newItems = [...prevItems, product];
      saveCartItemsToLocalStorage(newItems); // Save the updated cart items to localStorage
      return newItems;
    });
  };

  const handleRemoveFromCart = (productId) => {
    
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.productId !== productId);
      saveCartItemsToLocalStorage(newItems); // Save the updated cart items to localStorage
      return newItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};




