import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// screens
import { HomePage } from './screens/HomePage';
import { RecipeDetails } from './screens/RecipeDetails';
import { CreateRecipes } from './screens/CreateRecipes';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/recipe' element={<RecipeDetails />} />
        <Route path='/create' element={<CreateRecipes />} />
      </Routes>
    </Router>
  )
}

export default App
