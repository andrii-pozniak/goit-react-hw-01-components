import { Profile } from "./Profile/profile";
import user from './user.json';
export const App = () => {
  return (
    <div>
      <Profile
      username={user}
      tag={user}
      location={user}
      avatar={user}
      stats={user}
      />
    </div>
    
  );
};
