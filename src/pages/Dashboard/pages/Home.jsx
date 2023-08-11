import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory()
  const handleGotoProfile = () => {
    history.push('/dashboard/profile')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={handleGotoProfile}>Go to Profile</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
