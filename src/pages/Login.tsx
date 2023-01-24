import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";

const Login = () => {
  const navigation = useIonRouter();

  const handleLogin = () => {
    navigation.push("/app", "forward", "replace");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={() => handleLogin()}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
