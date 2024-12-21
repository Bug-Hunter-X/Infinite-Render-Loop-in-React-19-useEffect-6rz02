```javascript
// In a React 19 functional component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct use of functional update:
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array for a side-effect that runs once, after the initial render.

  return (
    <div>Count: {count}</div>
  );
};
```