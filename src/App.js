import './App.css';
import Child from './components/Child'
import ThemeContext from './ThemeContext'

function App() {
  console.log(ThemeContext)
  return (
    <ThemeContext.Provider value='green'>
     <Child/>
    </ThemeContext.Provider>
  );
}

export default App;
