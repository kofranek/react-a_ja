import React, {useState} from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from "./components/PosItem";

function App() {
    const [value, setValue] = useState("Text")

    return (
        <div className="App">
            <PostItem  post={{id:1, title:'Javascript', body:'JavaScript description'}}/>
            <PostItem  post={{id:2, title:'Python', body:'Python description'}}/>
            <PostItem  post={{id:3, title:'Fortran', body:'Fortran description'}}/>
            <PostItem  post={{id:4, title:'C++', body:'C++ description'}}/>
        </div>
    )
}

export default App;
