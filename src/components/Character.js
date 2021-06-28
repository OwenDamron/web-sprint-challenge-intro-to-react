import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Characters(props) {
    const {name, close} = props
    const [charInfo, setCharInfo] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(({data}) => setCharInfo(data))
        .catch(err => console.log(err))
    }, [name])

    return (
        <div className='charInfo'>
            <h2>Bounty Info</h2>
            {
                charInfo &&
                <>
                <ul>
                    {charInfo.map(char => <li key={char.name}>
                        {char.name}<br />
                        Height: {char.height}<br />
                        Gender: {char.gender}<br />
                        Mass: {char.mass}<br />
                        Hair Color: {char.hair_color}<br />
                        Skin Color: {char.skin_color}<br />
                        Eye Color: {char.eye_color}<br />
                        Birth Year: {char.birth_year}<br />
                    </li>)}
                </ul>
                </>
            }
            <button onClick={close}>Close File</button>
        </div>
    )
}
