import Post from './Post';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectPosts } from '../../store/posts/selector';
import { setPosts } from '../../store/posts/actions';

import './styles.css';

const Posts = ({posts, setPosts}) => {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [setPosts])
  return(
  <ul className="list">
    {posts.length === 0 ? 'Empty list' : posts.map(post => <Post key={post.id} {...post} />)}
  </ul>
  )
}
const mapStateToProps = state =>({
  posts: selectPosts(state)
})
const mapDispatchToProps = {
  setPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
