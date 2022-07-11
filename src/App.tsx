import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { setShelters } from './features/shelterSelect/state/shelterSlice';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

const useStyles = createUseStyles({
  div: {
    color: 'red'
  }
});

function App() {
  const styles = useStyles();
  const dispatch = useDispatch();
  fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
    .then(res => res.json())
    .then(
      (result) => {
        dispatch(setShelters(result.shelters));
      },
      (error) => {
        console.log(error)
      }
    )
  // dispatch(fetchShelters()); //TODO
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           console.log(result);
  //           dispatch(setShelters(result.shelters))
  //         },
  //         (error) => {
  //           console.log(error)
  //         }
  //       )
  //   }
  //   fetchData();
  // }, [dispatch])

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
