import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';
// import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  // const dispath = useDispatch();

  // React.useEffect(() => {
  //   // axios.get('http://localhost:3001/pizzas').then(({ data }) => {
  //   //   dispath(setPizzas(data));
  //   // });
  //   dispath(fetchPizzas());
  // }, []);

  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
// это старая версия чтобы она работала нужно поменять еще файл home это на 7 уроке обьяснялось
// function App() {
//   // const [pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header></Header>
//       <div className="content"></div>
//       <Routes>
//         <Route path="/" element={<Home items={pizzas} />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
