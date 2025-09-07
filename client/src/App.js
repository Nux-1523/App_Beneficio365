import './App.css';
import User from './components/getuser/User';
import AddUser from './components/adduser/AddUser';
import UpdateUser from './components/updateuser/UpdateUser';
import Landing from './components/pages/Landing';
import UserList from './components/getuser/UserList';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

// Permitira manejar los errores

function ErrorPage({ error }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! 😅</h1>
      <p>{error?.statusText || error?.message || "Ha ocurrido un error"}</p>
      <a href="/">Volver al inicio</a>
    </div>
  );
}
//Para las rutas que no encuentre
function NotFound() {
  return(
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 Not Found 😬</h1>
      <p>La ruta que buscas no existe.</p>
      <a href="/">Volver al inicio</a>
    </div>
  );
  }
  // Defino las rutas

  const route = createBrowserRouter([
    {
      path: "/",              
      element: <Landing />,
      errorElement: <ErrorPage />
    },
    {
      path: "/users",
      element: <User />,
      errorElement: <ErrorPage />
    },
    {
      path: "/add",
      element: <AddUser />,
      errorElement: <ErrorPage />
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
      errorElement: <ErrorPage />
    },
    {
      path: "/userlist",
      element: <UserList />,
      errorElement: <ErrorPage />
    },
    {
    path: "*",
    element: <NotFound />   // Se usa NotFound
    }
  ])

function App(){
  return (
    <div className="App">
      <header className="App-header">
          <RouterProvider router={route}></RouterProvider>
      </header>
    </div>
  );
}

export default App;