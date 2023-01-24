import React from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { timeOutline, barChartOutline, diamondOutline } from "ionicons/icons";
import Chronometer from "../components/Chronometer";
import Laps from "../components/Laps";
import Records from "../components/Records";
import { Route, Redirect } from "react-router-dom";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/chronometer" component={Chronometer} />
        <Route path="/app/records" component={Records} />
        <Route path="/app/laps" component={Laps} />
        <Route path="/app" render={() => <Redirect to="/app/chronometer" />} exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="chronometer" href="/app/chronometer">
          <IonIcon icon={timeOutline} />
          <IonLabel>Chronometer</IonLabel>
        </IonTabButton>
        <IonTabButton tab="records" href="/app/records">
          <IonIcon icon={diamondOutline} />
          <IonLabel>Records</IonLabel>
        </IonTabButton>
        <IonTabButton tab="laps" href="/app/laps">
          <IonIcon icon={barChartOutline} />
          <IonLabel>Laps</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
