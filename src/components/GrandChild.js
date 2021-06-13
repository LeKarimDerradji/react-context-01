import {useContext} from 'react'
import ThemeContext from '../ThemeContext'

const GrandChild = () => {
    const color = useContext(ThemeContext)

    return (

        <p>I am the Grand-Child of App, I can consume the Context of my Parent, by <span style={{color}}>changing my text color.</span></p>
    )
}

export default GrandChild
