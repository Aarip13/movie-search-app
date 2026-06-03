import { BrowserRouter,createBrowserRouter,RouterProvider,Router,Routes } from 'react-router-dom';
import './App.css';
import DetailMovie from './MovieDetails';
import Search from './MovieSearch';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Search />

  },
  {
    path:'/movie/:id',
    element:<DetailMovie />
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
