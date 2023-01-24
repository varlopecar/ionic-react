import React, { useEffect } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useStopwatch } from "../hooks/useStopwatch";
import { useLaps, useLapsActions } from "../stores/laps";

const Chronometer = () => {
  const { time, laps, start, stop, reset, lap } = useStopwatch();

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Chronometer</IonTitle>
      </IonToolbar>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-text-center">
            <IonCol size="auto">
              <IonTitle>Time</IonTitle>
              <IonTitle>{time}</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonButton onClick={start}>Start</IonButton>
            <IonButton onClick={stop}>Stop</IonButton>
            <IonButton onClick={reset}>Reset</IonButton>
            <IonButton onClick={lap}>Lap</IonButton>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonList>
            {laps.map((lap, index) => (
              <IonItem key={index}>
                <IonLabel>{lap.lap}</IonLabel>
                <IonLabel>{lap.time}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Chronometer;
