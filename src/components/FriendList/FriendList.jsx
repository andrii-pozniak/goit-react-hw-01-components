import PropTypes from 'prop-types'
import css from "./FriendList.module.css";

export const FriendList = ({cardsFriends}) => {
return <ul className="friend_list">
{cardsFriends.map(({avatar,name, isOnline, id}) => 
   
    <li className={css.item_friends} key={id}>
 <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
 <img className={css.avatar} src={avatar} alt={name} width="48" />
 <p className={css.name}>{name}</p>
 
</li>,

 

)}
</ul>

}

FriendList.propTypes = {
    cardsFriends: PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired,

    }),) 
    }