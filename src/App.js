import './App.css';
import {useContext} from 'react';
import { RouterProvider } from "react-router-dom";
import { routes } from './Pages/Routes/Routes/Routes';
import BookingModal from './Pages/BookingModal/BookingModal';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';

function App() {
  const {modalData} = useContext(AuthContext);
  return (
    <div >
        <RouterProvider router={routes}></RouterProvider>
        <BookingModal modalData={modalData}></BookingModal>
    </div>
  );
}

export default App;


