import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import ListTripsPage from './Components/Pages/ListTripsPage';
import ApplicationFormPage from './Components/Pages/ApplicationFormPage';
import AdminHomePage from './Components/Pages/AdminHomePage';
import LoginPage from './Components/Pages/LoginPage';
import CreateTripPage from './Components/Pages/CreateTripPage';
import TripDetails from './Components/Pages/TripDetailsPage';


function App() {


  return (


    <BrowserRouter>

      <Switch>
        
        <Route exact path='/'>

          <HomePage />

        </Route>

        <Route exact path='/trips/list'>

          <ListTripsPage />

        </Route>

        <Route exact path='/trips/application'>

          <ApplicationFormPage />

        </Route>

        <Route exact path='/login'>

          <LoginPage />

        </Route>

        <Route exact path='/admin/trips/list'>

          <AdminHomePage />

        </Route>

        <Route exact path='/admin/trips/create'>

          <CreateTripPage />

        </Route>

        <Route exact path='/admin/trips/:id'>

          <TripDetails />

        </Route>

      </Switch>

    </BrowserRouter>

  );
}

export default App;
