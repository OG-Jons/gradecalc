import './App.scss';
import {useState} from 'react'

export default function App() {

    const [maxPoints, setMaxPoints] = useState()
    const [points, setPoints] = useState()
    const [grade, setGrade] = useState()

    function calculateGrade() {
        if (maxPoints && points) {
            setGrade(((points / maxPoints) * 5 + 1).toFixed(2))
        } else {
            alert("Input fehlt")
        }
    }

    return (
        <>
            <h1 className="title">Notenrechner</h1>
            <div className="form__group field">
                <input type="number" value={maxPoints} className="form__field" placeholder="Maximale Punktzahl"
                       name="maxPoints" required
                       onChange={(event) => setMaxPoints(event.target.value)}
                />
                <label htmlFor="maxPoints" className="form__label">Maximale Punktzahl</label>
            </div>
            <div className="form__group field">
                <input type="number" value={points} className="form__field" placeholder="Erreichte Punktzahl"
                       name="points" required
                       onChange={(event) => setPoints(event.target.value)}
                />
                <label htmlFor="points" className="form__label">Erreichte Punktzahl</label>
            </div>
            <button className="submit__button gradient-button-1" onClick={calculateGrade}>Ausrechnen</button>
            {grade &&
                <h3 className="title">Note: {grade}</h3>
            }
        </>
    );
}
