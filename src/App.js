

import './App.css';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import MealsList from "./MealsList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactForm />
      <MealsList />
      <Footer />
    </div>
  );
}

export default App;


