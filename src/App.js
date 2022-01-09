import React, {useState} from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from "./components/PosItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'Javascript', body:'JavaScript description'},
        {id:2, title:'Javascript A', body:'JavaScript description 1'},
        {id:3, title:'Javascript B', body:'JavaScript description 2'},
        {id:4, title:'Javascript C', body:'JavaScript description 3'},
    ])

    const [posts1, setPosts1] = useState([
        {id:1, title:'Python', body:'Python description'},
        {id:2, title:'Python A', body:'Python description 1'},
        {id:3, title:'Python B', body:'Python description 2'},
        {id:4, title:'Python C', body:'Python description 3'},
    ])

    return (
        <div className="App">
            <PostList posts={posts} title='Seznam zpráv o JavaScriptu' />
            <PostList posts={posts1} title='Seznam zpráv o Pythonu' />
        </div>
    )

}

export default App;
