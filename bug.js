```javascript
// In a React 19 functional component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect use of previous state in functional update
    setCount(prevCount => prevCount + 1);
    // ... other code that depends on count ...
  }, []); // Empty dependency array for a side-effect that intends to only run once

  return (
    <div>Count: {count}</div>
  );
};
```