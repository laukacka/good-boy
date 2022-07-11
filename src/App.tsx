import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import { useFetchShelters } from './features/shelter/service/shelterService';

function App() {
  useFetchShelters();

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
