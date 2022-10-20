import PropTypes from 'prop-types'

export const Stats = ({stats:{followers, followers: statFollowers, 
    views, views: statsViews, likes, likes: statsLikes}}) => {
    return <ul className="stats">
    <li >
    <span className="label">{followers}</span>
    <span className="quantity">{statFollowers}</span>
    </li>
    <li>
    <span className="label">{views}</span>
    <span className="quantity">{statsViews}</span>
    </li>
    <li>
    <span className="label">{likes}</span>
    <span className="quantity">{statsLikes}</span>
    </li>
</ul>
}
Event.propTypes = {
    followers: PropTypes.string.isRequired,
    statFollowers: PropTypes.number.isRequired,
    views: PropTypes.string.isRequired,
    statsViews: PropTypes.number.isRequired,
    likes: PropTypes.string.isRequired,
    statsLikes: PropTypes.number.isRequired    
}