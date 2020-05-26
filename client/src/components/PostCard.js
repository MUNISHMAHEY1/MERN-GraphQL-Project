import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';
import moment from 'moment';
import { AuthContext } from '../context/AuthContext';
import LikeButton from '../components/LikeButton';
import DeleteButton from './DeleteButton';

function PostCard(props){
    const { body, createdAt, id, username, likeCount, commentCount, likes} = props.post;
    const { user } = useContext(AuthContext);

    return(
        <div>
            <div className="ui cards">
                <div className="ui fluid card">
                    <div className="content">
                        <img className="right floated mini ui image" src={avatar} alt="avatar"/>
                        <div className="header">
                            {username}
                        </div>
                        <div className="meta" >
                            <Link to={`/posts/${id}`}>
                                {moment(createdAt).fromNow(true)}
                            </Link>
                        </div>
                        <div className="description">
                            {body}
                        </div>
                        </div>
                        <div className="extra content">
                            <LikeButton  user={user} post={{ id, likes, likeCount }}></LikeButton>
                            <Link to={`/posts/${id}`}>
                                <div className="ui labeled button">
                                    <div className="ui purple button basic">
                                        <i className="comments icon"></i> Comment
                                    </div>
                                    <div className="ui basic purple left pointing label">
                                        {commentCount}
                                    </div>
                                </div>
                            </Link>
                            { user && user.username === username && (
                                <DeleteButton postId={id}/>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;