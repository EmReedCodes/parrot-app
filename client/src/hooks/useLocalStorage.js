//https://www.webtips.dev/webtips/react-hooks/uselocalstorage-hook-in-react

//tried a ton of methods including using context with localStorage, was having trouble adding onto array. This finally seemed to do the trick and Ill be able to modify this further

import { useState, useEffect } from "react"

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(initialValue)
  const localStorageValue = localStorage.getItem(key)

  useEffect(() => {
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

  const remove = () => {
    setState(null)
    localStorage.removeItem(key)
  }

  return [state, update, remove]
}

export default useLocalStorage
