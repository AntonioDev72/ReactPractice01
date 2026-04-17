function App() {
  const MyComponent = function() {
  // Change code below this line
  return (
    <>
      <div>Hello</div>
    </>
    );
    // Change code above this line
  }
  const JSX = 
  <>
  <div className="my-div">
    {/* hey */}
    <h1>My First React App</h1>
    <p>I'm learning React!</p>
    <p>Lets render this to the DOM</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div>
      <h2>Welcome to React!</h2> 
      <br></br>
      <p>Be sure to close all tags!</p>
      <hr/>
  </div>
  </>
  return (
    <>
      {JSX}
    </>
  )
}

export default App
