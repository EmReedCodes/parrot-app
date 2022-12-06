// import { useState } from "react";

// function useLocalStorage(key, initialValue) {
//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       // Get from local storage by key
//       const item = window.localStorage.getItem(key);
//       // Parse stored json or if none return initialValue
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       // If error also return initialValue
//       console.log(error);
//       return initialValue;
//     }
//   });

  
//   const setValue = (value) => {
//     try {
//       // Allow value to be a function so we have same API as useState
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       // Save state
//       setStoredValue(valueToStore);
//       // Save to local storage
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return [storedValue, setValue];
// }

// export default useLocalStorage;


// import { useState, useEffect } from 'react'


// function useLocalStorage(key, initialValue) {

//     const [state, setState] = useState(initialValue)
//     const localStorageValue = localStorage.getItem(key)

//     useEffect(() => {
//         if (localStorageValue) {
//             setState(JSON.parse(localStorageValue))
//         } else {
//             localStorage.setItem(key, JSON.stringify(initialValue))
//         }
//     }, [key, localStorageValue, initialValue])

//     const update = (item) => {
//         setState(item)
//         localStorage.setItem(key, JSON.stringify(item))
//     }

//     const remove = () => {
//         setState(null)
//         localStorage.removeItem(key)
//     }

//     return [state, update, remove]
// }

// export default useLocalStorage;