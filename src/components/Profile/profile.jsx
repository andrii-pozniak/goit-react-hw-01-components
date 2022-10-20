// import {Stats} from "components/stats/stats";
import PropTypes from 'prop-types'

export const Profile =  ({username, 
    tag, location, avatar, followers, views, likes}) => {
    console.log(username)
    return <div className='profile'>
        <div className='description'>
        <img className="avatar" src={avatar} alt={username} />
        <p className="name"> {username} </p>
        <p className="tag">@{tag}</p>
        <p className="location">{location} </p>
       
        <div>
        <ul className="stats">
    <li  className='stats_title'>
    <span className="label">followers</span>
<span className="quantity">{followers}</span>
    </li>
    <li className='stats_title'>
    <span className="label">views</span>
<span className="quantity">{views}</span>
    </li>
    <li className='stats_title'>
    <span className="label">likes</span>
    <span className="quantity">{likes}</span>
    </li>
</ul>
        
        </div>
        </div>
    </div>
    
}
Profile.prototype = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,    
}