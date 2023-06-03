import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// screens
import { HomePage } from './screens/HomePage';
import { RecipeDetails } from './screens/RecipeDetails';
import { CreateRecipes } from './screens/CreateRecipes';
import { EditRecipes } from './screens/EditRecipes';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/recipe' element={<RecipeDetails />} />
        <Route path='/create' element={<CreateRecipes />} />
        <Route path='/edit' element={<EditRecipes />} />
      </Routes>
    </Router>
  )
}

export default App
