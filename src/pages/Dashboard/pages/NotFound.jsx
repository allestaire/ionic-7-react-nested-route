import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const NotFound = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Not Found</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default NotFound;
