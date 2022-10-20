import {Stats} from "components/stats/stats";
import PropTypes from 'prop-types'

export const Profile =  ({username, tag, location, avatar}) => {
    return <div>
        <img className="" src={avatar} alt={username} />
        <p className="name"> {username} </p>
        <p className="tag">{tag}</p>
        <p className="location">{location} </p>
        <div>
           <Stats className="stats"/> 
        </div>
    </div>
}
Event.prototype = {username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,    
}