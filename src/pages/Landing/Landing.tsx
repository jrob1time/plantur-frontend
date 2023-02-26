// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

// services
import * as authService from '../../services/authService'

import logo1 from '../../assets/logo1.png'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = ({ user, handleLogout }: LandingProps): JSX.Element => {
  const handleDeleteAccount = async (): Promise<void> => {
    await authService.deleteAccount();
    handleLogout();
  };

  return (
    <main className={styles.container}>
      <h1>
        <img src={logo1} alt="Plantur" />
      </h1>

      {user && (
        <button onClick={handleDeleteAccount}>DELETE ACCOUNT</button>
      )}
    </main>
  );
};

export default Landing;
