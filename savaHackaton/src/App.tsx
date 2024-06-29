import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { LandingPage } from './pages/LandingPage';
import { NavBar } from './components/NavBar';
import { RegisterPage } from './pages/Register';
import SignInPage from './components/SignInPage/SignInPage';
import { SideBar } from './components/SideBar';
import { PageContainer } from './components/PageContainer';
import { SearchBar } from './components/SearchBar';
import { MyProfile } from './pages/MyProfile';


import Policy from './components/MyProfileComp/Policy';
import Damages from './components/Damages/Damages';
import Invoices from './components/Invoices/Invoices';

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element:<>
      <NavBar/>
      <p>Page Not Found</p>
      </> ,
    },
    {
      path: "/",
      element:<>
      <NavBar/>
      <LandingPage/>
      </> ,
    },
    {
      path: "/signIn",
      element:<>
      <NavBar/>
      <SignInPage/>
      </> ,
    },
    {
      path: "/register",
      element:<>
      <NavBar/>
      <RegisterPage/>
      </> ,
    },
    {
      path: "/myProfile",
      element:
      <section className='containerSection'>
        <SideBar/>
        <PageContainer>
          <SearchBar/>
          <MyProfile/>
        </PageContainer>
      </section>
       ,
    },
    {
      path: "/policies",
      element:
      <section className='containerSection'>
        <SideBar/>
        <PageContainer>
          <SearchBar/>
          <Policy/>
        </PageContainer>
      </section>
       ,
    },
    {
      path: "/damages",
      element:
      <section className='containerSection'>
        <SideBar/>
        <PageContainer>
          <SearchBar/>
          <Damages />
        </PageContainer>
      </section>
       ,
    },
    {
      path: "/invoices",
      element:
      <section className='containerSection'>
        <SideBar/>
        <PageContainer>
          <SearchBar/>
          <Invoices />
        </PageContainer>
      </section>
       ,
    },
    {
      path: "/contact",
      element:
      <section className='containerSection'>
        <SideBar/>
        <PageContainer>
          <SearchBar/>
        <p>contact</p>
        </PageContainer>
      </section>
       ,
    },
    {
      path: "/settings",
      element:
      <section className='containerSection'>
        <SideBar/>
        <PageContainer>
          <SearchBar/>
        <p>settings</p>
        </PageContainer>
      </section>
       ,
    },
    {
      path: "/policy",
      element:
      <Policy />
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
