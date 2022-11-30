import './styles.css';
import { connect } from 'react-redux';
import { removePost } from '../../../store/posts/actions';

const Post = ({id, title, body, removePost }) => (
  <li className="item">
    <div className="title">{title}</div>
    <div className="body">{body}</div>
    <button onClick={()=> removePost(id)}>Delete</button>
  </li>
)

const mapDispatchToProps = {
  removePost,
}
export default connect(null, mapDispatchToProps)(Post);
