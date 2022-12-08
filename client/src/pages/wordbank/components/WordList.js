// import { AiFillDelete } from "react-icons/ai"
// import { deleteWordForList } from "../../../features/bankWord/bankWordSlice"
// import { useDispatch, useSelector } from "react-redux"
// import { useState } from "react"
// import useLocalStorage from "../../../hooks/useLocalStorage"

// const WordList = ({ wordBank }) => {
  
//   // const [getList, setGetList] = useState(
//   //   localStorage.getItem("list") || []
//   // )
//  // const localData = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : []

//   const [list, addList,  removeList] = useLocalStorage("list")


//   const dispatch = useDispatch()
//   const { user } = useSelector(state => state.auth)



//   const deleteLocalItem = item => {
//     console.log(item, "yes")
//     // deleteListItem(item)
//     // addList(list.filter(el => el !== item))
//   }
//   return (
//     <ul className="wordsList">
//       {user
//         ? wordBank.map(item => {
//             return (
//               <li key={item._id} id={item._id}>
//                 {item}

//                 <span className="dlt-btn" onClick={() => dispatch(deleteWordForList(item._id))}>
//                   <AiFillDelete />
//                 </span>
//               </li>
//             )
//           })
//         : list.map((item, idx) => {
//             return (
//               <li key={idx.toString()} id={item}>
//                 {item}
//                 <span className="dlt-btn" onClick={() => deleteLocalItem(item)}>
//                   <AiFillDelete />
//                 </span>
//               </li>
//             )
//           })}
//     </ul>
//   )
// }

// export default WordList


import { AiFillDelete } from "react-icons/ai"
import { deleteWordForList } from "../../../features/bankWord/bankWordSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import useLocalStorage from "../../../hooks/useLocalStorage"

const WordList = (props) => {
  const { wordBank, list, setList, deleteListItem } = props
  console.log(list, 'wordlist')
  // const [getList, setGetList] = useState(
  //   localStorage.getItem("list") || []
  // )
 // const localData = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : []

//  const [list, addList,  removeList] = useLocalStorage("list")


  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)



  const deleteLocalItem = item => {
    console.log(item, "yes")
    // deleteListItem(item)
    // addList(list.filter(el => el !== item))
  }

    return (
    <ul className="wordsList">
    
        {user ? wordBank.map(item => (
 
            <li key={item._id} id={item._id}>
              {item}

              <span className="dlt-btn" onClick={() => dispatch(deleteWordForList(item._id))}>
                <AiFillDelete />
              </span>
            </li>
        )) :
        list.map((item, idx) => (
 
          <li key={idx.toString()} id={idx.toString()}>
            {item}
            <span className="dlt-btn" onClick={() => deleteLocalItem()}>
              <AiFillDelete />
            </span>
          </li>
      ))
        }
    </ul>
  )
}

export default WordList