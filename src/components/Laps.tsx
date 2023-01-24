import React from "react";
import {
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Laps = () => {
  // const formattedLaps = useLapsStore((state) => state.formattedLaps);

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Laps</IonTitle>
      </IonToolbar>
      <IonContent className="ion-padding">
        <IonList>
          {/* {formattedLaps.map((lap, index) => (
            <IonItem key={index}>
              <IonLabel>{lap.lap}</IonLabel>
              <IonLabel>{lap.time}</IonLabel>
            </IonItem>
          ))} */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Laps;
