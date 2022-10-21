// import PropTypes from 'prop-types'
import { Profile } from "./Profile/profile";
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <>
       <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}  
      stats={user.stats}
      /> 
      <Statistics cards={data}/>
     <FriendList cardsFriends={friends}/>
     <TransactionHistory items={transactions}/>
     </>
   
  );
};
