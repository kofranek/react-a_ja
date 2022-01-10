import React, {useState, useRef} from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from "./components/PosItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'JavaScript description'},
        {id: 2, title: 'Javascript A', body: 'JavaScript description 1'},
        {id: 3, title: 'Javascript B', body: 'JavaScript description 2'},
        {id: 4, title: 'Javascript C', body: 'JavaScript description 3'},
    ])

    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        if (post.title && post.body) {
            setPosts([...posts, {...post, id: Date.now()}])
            setPost({title: '', body: ''})
        }
        console.log('post=', post)
        console.log('posts=', posts)

    }


    return (
        <div className="App">
            {/*řízená komponenta*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='název zprávy'
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='popis zprávy'
            />
            <MyButton type='submit' onClick={addNewPost}>Vytvořit zprávu</MyButton>
            <PostList posts={posts} title='Seznam zpráv o JavaScriptu'/>
        </div>
    )

}

export default App;
