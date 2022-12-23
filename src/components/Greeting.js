// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  const [greeting, setGreeting] = useState('Welcome the following students to class'); 

  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group, setGroup] = useState(['Abraham', 'Isaac', 'Jacob','Rachel', 'Sarah', 'Leah', 'Rebecca']);

  const [name, setName] = useState([''])

  function handleClick() {
    setGreeting('Happy holidays');
    // for a completely different set of people 
    //setGroup(['Rachel', 'Sarah', 'Leah', 'Rebecca']); 

    // to add person 
    setGroup([...group, 'Adam']); 
    // ... group is array destructuring 
  };

  function handleSort() {
    const groupSorted = [...group];
    groupSorted.sort();
    setGroup(groupSorted); 
  }

  function nameUpdate(event) {
    setName(event.target.value)
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}, {name}</p>
        <ul>
          {/* TODO: Fix the list below so that each member of your group is accessed from the `group` array */}
          {group.map(person => 
            <li>{person}</li>)}
        </ul>
        <label>Enter Your Name</label><input type='text' onChange={event => nameUpdate(event)}></input>
        <button onClick={handleClick} >Change Greeting</button>
        <button onClick={handleSort} >Sort</button>
      </div>
    </div>
  );
}

export default Greeting;
