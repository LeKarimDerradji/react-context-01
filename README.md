# Getting Started with React Context API : 

We first begin by creating a context object called ThemeContext, to keep it simple, the values of that Context will only contain style 
variables : 

```// src/ThemeContext.js
 
import React from 'react';
 
const ThemeContext = React.createContext(null);
 
export default ThemeContext;```


Then, we declare a provider, that can be wrapped around all top-level components.
All the components bellow this top-level one, will be able to use the ThemeContext-Context, (so all of its content)

```// src/ComponentA.js
 
import React from 'react';
import ThemeContext from './ThemeContext';
 
const App = () => (
  <ThemeContext.Provider value="green">
    <Child />
  </ThemeContext.Provider>
);```

We then create a grand-child : 

App 
---Child
--------GrandChild

To show that our value from the App's provider, can be consumed everywhere. 

```
const GrandChild = () => {

    return (

        <p>I am the Grand-Child of App, I can consume the Context of my Parent, by changing my text color.</p>
    )
}

export default GrandChild
```

Finally, we import the useContext HOOKS from react, useContext uses any Object, and retrieve the most recent value passed trought it, 
we have to bind it to a variable in order to use that value then : 

```
import {useContext} from 'react'
import ThemeContext from '../ThemeContext'

const GrandChild = () => {
    const color = useContext(ThemeContext)

    return (

        <p>I am the Grand-Child of App, I can consume the Context of my Parent, by <span style={{color}}>changing my text color.</span></p>
    )
}

export default GrandChild
```


