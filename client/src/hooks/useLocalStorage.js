//https://www.webtips.dev/webtips/react-hooks/uselocalstorage-hook-in-react

//tried a ton of methods including using context with localStorage, was having trouble adding onto array. This finally seemed to do the trick and Ill be able to modify this further

import { useState, useEffect } from "react"

function useLocalStorage(key, initialValue) {

  const [state, setState] = useState(initialValue)
  //at some point i hardcoded this to list reverted back to key being passed in
  const localStorageValue = localStorage.getItem(key)

  useEffect(() => {
    //parsing data out here immediately and setting it in state 
    //const getLocalBank = JSON.parse(localStorage.getItem("list"))
    if (localStorageValue) {
      setState(JSON.parse(localStorageValue))
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue))
    }
  }, [key, localStorageValue, initialValue])

  const update = value => {
    setState(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

//   const getElementsfromLocalStorage = () => {
//     let elements = [];
//     if (localStorage.getItem('reptiles')) {
//         elements = JSON.parse(localStorage.getItem('reptiles'));
//     }
//     return elements;
// };

// const removeElementLocalStorage = (name) => {
//     let elements = getElementsfromLocalStorage();
//     elements = elements.filter(element => element.name !== name);
//     localStorage.setItem('reptiles', JSON.stringify(elements));
//   };
  

  const deleteItem = item => {
    const getLocalBank = JSON.parse(localStorage.getItem(key))
    console.log(getLocalBank, "hook")
    const updateList = getLocalBank.filter(elem => elem !== item)
    setState(updateList)
    localStorage.setItem(key, JSON.stringify(updateList))
  }

  const remove = () => {
    setState(null)
    localStorage.removeItem(key)
  }

  return [state, update, deleteItem, remove]
}

export default useLocalStorage
