
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import MealsList from './MealsList';

import RandomMeal from './RandomMeal';
import SearchMeals from './SearchMeals';
import AllCategory from './AllCategory';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchMeals />
      <RandomMeal />
      <MealsList />
      <AllCategory />
      <ContactForm />

      <Footer />

    </div>
  );
}

export default App;


