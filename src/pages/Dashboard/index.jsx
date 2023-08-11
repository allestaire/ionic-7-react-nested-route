import { IonApp, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import Profile from './pages/Profile';
import Home from './pages/Home';
import { Route } from 'react-router';
import NotFound from './pages/NotFound';
import React from 'react';

const Dashboard = () => {
  const [show, setShow] = React.useState(false)


  React.useEffect(() => {
    console.log('Entered o the page')
    setTimeout(() => {
      setShow(true)
      console.log('Showed')
    }, 100)
  }, [])

  if (!show) {
    return (
      <IonPage>
        <IonRouterOutlet>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route path="/dashboard/profile">
            <Profile />
          </Route>
          <Route render={() => <NotFound />} />
        </IonRouterOutlet>
      </IonPage>
    )
  }

  return (
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/dashboard">
          <Home />
        </Route>
        <Route path="/dashboard/profile">
          <Profile />
        </Route>
        <Route render={() => <NotFound />} />
      </IonRouterOutlet>
    </IonApp>
  );
};

export default Dashboard;
