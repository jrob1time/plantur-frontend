// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import PlantList from './pages/PlantList/PlantList';
import NewPlant from './pages/NewPlant/NewPlant'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


// services
import * as authService from './services/authService'
import * as plantService from './services/plantService';

// types
import { User, Plant } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()

  const [plants, setPlants] = useState<Plant[]>([]);

  const fetchPlants = async () => {
    const data = await plantService.index();
    setPlants(data);
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const [user, setUser] = useState<User | null>(authService.getUser())

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddPlant = async (data: any): Promise<void> => {
    const newPlant: Plant = await plantService.create(data);
    setPlants([newPlant, ...plants]);
    navigate('/plants/new');
  };


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
      <Route 
          path="/" 
          element={<Landing user={user} handleLogout={handleLogout} />}
        />
        <Route path='/plants' element={<PlantList fetchPlants={fetchPlants} plants={plants} />} />
        <Route path='/plants/new' element={<NewPlant handleAddPlant={handleAddPlant} />}
        />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
