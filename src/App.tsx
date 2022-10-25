import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Beranda from './Beranda';
import Deliver from './Deliver';
import pickup from './pickup';
import DetailPickup from './DetailPickup';
import Login from './Login';
import Lupapassword from './Lupapassword';
import { ScreenOrientation} from '@awesome-cordova-plugins/screen-orientation';
import { StatusBar } from '@capacitor/status-bar';
import notifikasi from './notifikasi';



setupIonicReact();

const App: React.FC = () => {
  ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)
  StatusBar.setBackgroundColor({color:"#0000A0"});
  // Hide the splash (you should do this on app launch)
  // SplashScreen.hide();

  // Show the splash for an indefinite amount of time:
  // SplashScreen.show({
  //   autoHide: false,
  // });

  // Show the splash for two seconds and then automatically hide it:
  // SplashScreen.show({
  //   showDuration: 100,
  //   autoHide: true,
  // });
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Login"/>
            </Route>
            <Route path="/Beranda" component={Beranda} exact={true}/>
            <Route path="/Deliver" component={Deliver} exact={true}/>
            <Route path="/pickup" component={pickup} exact={true}/>
            <Route path="/DetailPickup" component={DetailPickup} exact={true}/>
            <Route path="/Lupapassword" component={Lupapassword} exact={true}/>
            <Route path="/notifikasi" component={notifikasi} exact={true}/>
            <Route path="/Login" component={Login} exact={true} />
            {/* <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>

         {/*<!--  No Sidemenu  -->*/} 
         {/* <IonReactRouter>
            <IonRouterOutlet>
            <Route path="/Login" component={Login} exact />
            </IonRouterOutlet>
          </IonReactRouter> */}
    </IonApp>
  );
};

export default App;
