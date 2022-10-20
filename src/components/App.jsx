// import PropTypes from 'prop-types'
import { Profile } from "./Profile/profile";
import user from './user.json';
import data from './data.json';
import { Statistics } from "components/Statistics/Statistics";

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
    </>
   

  );
};
