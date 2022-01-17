import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignupForm from "./components/Signup/signup";
import Login from "./components/Login/login";
import UpdateForm from "./components/Update/update";
import Header from "./components/Header/header";
import PrivateRoute from "./components/Auth/privateRoute";
import {cache} from "./components/Auth/cache";
import ErrorBoundary from "./utils/errorBoundaries";
import {
  ApolloClient,
  ApolloProvider,
} from "@apollo/client"
import TableLayout from './components/Profile/profile';
//import dotenv from 'dotenv'

//dotenv.config()


const client = new ApolloClient({
  uri: "https://daba-test-api.herokuapp.com/graphql",
  cache,
  headers: { 
    authorization: localStorage.getItem('token')
  }
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <ApolloProvider client={client}>
        <ErrorBoundary>
          <Header />
            <Routes>

              <Route path="/" element={
                // <PrivateRoute>
                  <TableLayout />
                // </PrivateRoute>
              } />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/update" element={
                // <PrivateRoute>
                  <UpdateForm />
                // </PrivateRoute>
              } />

            </Routes>
        </ErrorBoundary>
      </ApolloProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
