import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  function addItem() {
    const copyList = [...list];
    copyList.push(text);
    setList(copyList);
    setText('');
  }

  function updateText(e) {
    const value = e.target.value;
    setText(value);
  }

  function deleteItem(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editItem(index) {
    setEditIndex(index);
    setEditText(list[index]);
  }

  function updateItem() {
    const copyList = [...list];
    copyList[editIndex] = editText;
    setList(copyList);
    setEditIndex(null);
    setEditText('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={updateText} value={text} placeholder="enter any item" />
        <br /> <br />
        <button onClick={addItem}>Add</button>
        <ul>
          {list.map(function (item, index) {
            return (
              <li key={index}>
                {editIndex === index ? (
                  <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
            

                    <button onClick={updateItem}>Update</button>
                  </>
                ) : (
                  <>
                    {item}
                    <button onClick={() => deleteItem(index)}>Delete</button>
                    <button onClick={() => editItem(index)}>Edit</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;


