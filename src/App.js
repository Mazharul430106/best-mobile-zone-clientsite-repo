import './App.css';
import { RouterProvider } from "react-router-dom";
import { routes } from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div className="w-[1440px] mx-auto ">
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
