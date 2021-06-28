import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Characters from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const [charName, setCharName] = useState([])
const [charId, setCharId] = useState(null)

const openChar = id => {
  setCharId(id)
}

const closeChar = () => {
  setCharId(null)
}

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(({data}) => setCharName(data))
    .catch((err) => console.log(err))
  }, [])

  const Char = props => (
    <div className='character'>
      {props.info.name}
      <button onClick={() => openChar(props.info.name)}>
        Open File
      </button>
    </div>
  )

  return (
    <StyledDiv1 className="App">
      <h1 className="Header">Wanted</h1><br />

      <StyledDiv2 className="characters">
        {charName.map(char => {
          return <Char key={char.name} info={char}/>
        })}
        {charId && <Characters name={charId} close={closeChar} />}

      </StyledDiv2>
    </StyledDiv1>
  );
}

const StyledDiv1 = styled.div`
display:flex;
justify-content:center;`

const StyledDiv2 = styled.div`
display:flex;
justify-content:center;
flex-direction:column;`

export default App;
