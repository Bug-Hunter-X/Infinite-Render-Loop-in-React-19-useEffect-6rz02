# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19's `useEffect` hook that can lead to an infinite render loop. The problem arises from an incorrect use of the functional update callback within `useState` inside `useEffect` with an empty dependency array.  This example highlights the error and provides a solution.

## Bug
The `bug.js` file contains a React functional component with a `useEffect` hook that attempts to increment a state variable (`count`) without properly handling the state updates. Due to the empty dependency array, the useEffect runs repeatedly. The functional state update of `setCount(prevCount => prevCount + 1)` causes re-renders which constantly trigger the useEffect causing an infinite loop.

## Solution
The `bugSolution.js` file provides a corrected version. The solution uses the functional update of state correctly to avoid the infinite loop, but more importantly it ensures that the useEffect is called only once during the component's lifetime.  This illustrates how to write useEffect for side-effects that intend to run only once after the initial render.