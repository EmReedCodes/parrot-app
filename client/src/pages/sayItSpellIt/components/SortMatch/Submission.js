import { useState, useMemo } from "react"
//turn tiles green that are correct red incorrect until submit is correct
export default function Button({ items, setItems, word, initialItems }) {
    console.log(items)
    console.log(word)
    console.log(initialItems, "initialItems")
  
    const checkAnswer = () => {
        const checkLetter = Object.values(items).map((item, idx) => item.letter === word[idx])
        setItems(current => current.map((item, idx) => ({ ...item, color: (checkLetter[idx] === true ? "#90ee02" : "#f83b2a") })))
        console.log(items)
        if (checkLetter.every(item => item === true)) {
            
        }
    }
    // let sortedWord = Object.values(items).map((item) => item.letter).join('')
    //     if (sortedWord === word) {
    //         console.log('yes')
    //     }
    return (
        <button onClick={() => checkAnswer()}>submit</button>
    )
}

// import PropTypes from "prop-types";
// import React, { useState, useMemo } from "react";
// import {
//   Alert,
//   AlertDescription,
//   AlertIcon,
//   Button,
//   ButtonGroup
// } from "@chakra-ui/react";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { FiRotateCcw } from "react-icons/fi";
// import { WORD_BANK } from "../../utils";
// import { getCorrectAnswers } from "../../utils";
// import { useConfetti } from "../../hooks/useConfetti";

// export default function Buttons({
//   taskId,
//   items,
//   initialItems,
//   isCorrect,
//   hasSubmitted,
//   setIsCorrect,
//   setItems,
//   setHasSubmitted,
//   failureMessage,
//   successMessage
// }) {
//   const saveTask = useLocalStorage(taskId)[1];
//   const [trials, setTrials] = useState(0);
//   const [solutionShown, setSolutionShown] = useState(false);
//   const [submitButtonRef, confetti] = useConfetti();

//   const allBlanksEmpty = useMemo(
//     () =>
//       !Object.entries(items).some(
//         ([key, value]) => key !== WORD_BANK && value.items.length
//       ),
//     [items]
//   );

//   const checkAnswers = () => {
//     let isCorrect = true;
//     const checkedBlanks = Object.entries(items).reduce((acc, [key, value]) => {
//       if (key !== WORD_BANK) {
//         const isBlankCorrect = value.items.some((item) =>
//           value.solutions.includes(item)
//         );

//         acc[key] = {
//           ...value,
//           isCorrect: isBlankCorrect
//         };

//         // if at least one blank is incorrect, the whole activity is incorrect
//         // need to update FillInTheBlanksInner `isCorrect` state
//         if (!isBlankCorrect) {
//           isCorrect = isBlankCorrect;
//         }
//       } else {
//         acc[key] = { ...value, isCorrect: null };
//       }

//       return acc;
//     }, {});

//     setIsCorrect(isCorrect);
//     setItems(checkedBlanks);
//     setTrials(isCorrect ? 0 : (prev) => prev + 1);
//     setHasSubmitted(true);
//     setSolutionShown(false);

//     saveTask(isCorrect ? new Date() : null);

//     if (isCorrect) {
//       confetti();
//     }
//   };

//   const reset = () => {
//     setItems(initialItems);
//     setIsCorrect(false);
//     setTrials(0);
//     setHasSubmitted(false);
//     setSolutionShown(false);
//   };

//   const showSolution = () => {
//     setItems(getCorrectAnswers(items));
//     setIsCorrect(true);
//     setHasSubmitted(true);
//     setSolutionShown(true);
//     saveTask(new Date());
//     confetti();
//   };

//   return (
//     <>
//       <ButtonGroup mt="3">
//         <Button
//           isDisabled={allBlanksEmpty || isCorrect}
//           onClick={checkAnswers}
//           ref={submitButtonRef}
//         >
//           Submit
//         </Button>

//         {(trials > 0 || hasSubmitted) && !allBlanksEmpty && (
//           <Button rightIcon={<FiRotateCcw />} onClick={reset}>
//             Reset
//           </Button>
//         )}
//         {trials >= 3 && !solutionShown && (
//           <Button colorScheme="green" onClick={() => showSolution()}>
//             Show solution
//           </Button>
//         )}
//       </ButtonGroup>

//       {hasSubmitted && (
//         <Alert status={isCorrect ? "success" : "error"} mt="3">
//           <AlertIcon />
//           <AlertDescription>
//             {isCorrect ? (
//               solutionShown ? (
//                 <>
//                   {" "}
//                   <strong>See correct answer above</strong> {successMessage}
//                 </>
//               ) : (
//                 <>
//                   <strong>Correct.</strong> {successMessage}
//                 </>
//               )
//             ) : (
//               <>
//                 <strong>Try again.</strong> {failureMessage}
//               </>
//             )}
//           </AlertDescription>
//         </Alert>
//       )}
//     </>
//   );
// }

// Buttons.propTypes = {
//   taskId: PropTypes.string.isRequired,
//   successMessage: PropTypes.string.isRequired,
//   failureMessage: PropTypes.string.isRequired,
//   items: PropTypes.object.isRequired,
//   hasSubmitted: PropTypes.bool.isRequired,
//   isCorrect: PropTypes.bool.isRequired,
//   initialItems: PropTypes.object.isRequired,
//   setIsCorrect: PropTypes.func.isRequired,
//   setItems: PropTypes.func.isRequired,
//   setHasSubmitted: PropTypes.func.isRequired
// };
