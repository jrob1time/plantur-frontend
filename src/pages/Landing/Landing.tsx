// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

// services
import * as authService from '../../services/authService'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = ({ user, handleLogout }: LandingProps): JSX.Element => {
  // Remove the line below because `user` is already declared as a parameter in LandingProps
  // const { user } = props

  const handleDeleteAccount = async (): Promise<void> => {
    await authService.deleteAccount();
    handleLogout();
  };

  return (
    <main className={styles.container}>
      <h1>Green Fingers To The Rescue</h1>
      <h1>
        Bye, <br /> Bud
      </h1>

      {user && (
        <button onClick={handleDeleteAccount}>DELETE ACCOUNT</button>
      )}
    </main>
  );
};

export default Landing;
