import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from "axios";
import {Container} from "semantic-ui-react";
import {Activity} from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  
  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id))
  }
  
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }
  
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
        .then(response => {
          setActivities(response.data);
        })
  }, []);
  
  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </>
  );
}

export default App;
