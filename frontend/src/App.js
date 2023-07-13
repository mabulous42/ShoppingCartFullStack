import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shopping from './StateLifting/Shopping';
import EditItem from './StateLifting/EditItem';
import ListStateLifting from './StateLifting/ListStateLifting';
import Shop from './Shop';
import Edit from './Edit';

function App() {
  return (
    <>
    <ListStateLifting />
      {/* <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/editItem' element={<Edit />}/>
      </Routes> */}
    </>
  );
}

export default App;
