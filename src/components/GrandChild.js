import {useContext, useReducer} from 'react'
import ThemeContext from '../ThemeContext'
import SentenceReducer from '../reducer/SentenceReducer'

const GrandChild = () => {
    const quote = "“All forms of madness, bizarre habits, awkwardness in society, general clumsiness, are justified in the person who creates good art.”"
    const color = useContext(ThemeContext)
    const [sentence, dispatch] = useReducer(SentenceReducer, quote)



    return (
        <>
        <p>I am the Grand-Child of App, I can consume the Context of my Parent, by <span style={{color}}>changing my text color.</span></p>
        <p style={{fontWeight: "bold"}}>{sentence}</p>
        <p>Change the quote : </p>
        <button onClick={() => dispatch({type: "BLACK"})}>A black one</button>
        <button onClick={() => dispatch({type: "GREEN"})}>A green one</button>
        <button onClick={() => dispatch({type: "BLUE"})}>A blue one</button>
        </>
    )   
}

export default GrandChild
