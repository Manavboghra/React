import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./component/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactForm from "./component/ContactForm";
import ContactDetails from "./component/ContactDetails";
import ContactLayout from "./layout/ContactLayout";
import PageNotFound from "./component/PageNotFound";
import JobLayout from "./layout/JobLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { JobDetailsLoader } from "./component/JobDetails";
import Error from "./component/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="form" element={<ContactForm />} />
          <Route path="details" element={<ContactDetails />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="jobs" element={<JobLayout />} errorElement={<Error/>}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route path=":id" element={<JobDetails/>} loader={JobDetailsLoader}/>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
