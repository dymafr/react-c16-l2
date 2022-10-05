import React from 'react';

function handleClick(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log('CLIC', e);
}

function handleInput(e) {
  console.log('INPUT', e);
}

function handleFocus(e) {
  console.log('FOCUS', e);
}

function handleClickDiv() {
  console.log('CLIC DIV');
}

function App() {
  return (
    <div
      onClick={handleClickDiv}
      className="d-flex flex-column justify-content-center align-items-center p-20"
    >
      <button onClick={handleClick} className="mb-20">
        Submit
      </button>
      <input type="text" onInput={handleInput} onInput={handleFocus} />
    </div>
  );
}

export default App;
