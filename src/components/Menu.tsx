import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
  IonText,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, closeOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Beranda',
    url: '/page/Beranda',
    iosIcon: 'assets/icon/home.svg',
    mdIcon: 'assets/icon/home.svg'
  },
  {
    title: 'Courier',
    url: '/page/Outbox',
    iosIcon: 'assets/icon/courier.svg',
    mdIcon: 'assets/icon/courier.svg'
  },
  {
    title: 'Deliver',
    url: '/page/Favorites',
    iosIcon: 'assets/icon/delivery.svg',
    mdIcon: 'assets/icon/delivery.svg'
  },
  {
    title: 'Pickup',
    url: '/page/Archived',
    iosIcon: 'assets/icon/pickup.svg',
    mdIcon: 'assets/icon/pickup.svg'
  },
  {
    title: 'Reweight',
    url: '/page/Trash',
    iosIcon: 'assets/icon/reweight.svg',
    mdIcon: 'assets/icon/reweight.svg'
  },
  {
    title: 'Keluar',
    url: '/page/Spam',
    iosIcon: 'assets/icon/keluar.svg',
    mdIcon: 'assets/icon/keluar.svg'
  }
];
const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" style={{background:"white"}}>
      <IonContent style={{background:"white"}}>
        <IonList id="inbox-list">
          <IonRow style={{textAlign:"center", justifyContent:"center"}}>
            <img src='assets/images/logo-xentra.png' width="25%" height="auto" style={{textAlign:"center", justifyContent:"center"}}></img>
          </IonRow>
          <IonFab vertical="center" horizontal='end'>
            <IonFabButton>
              <IonIcon icon={closeOutline}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonListHeader style={{color:"black"}}>Miptha</IonListHeader>
          <IonNote>dev.miptha@gmail.com</IonNote>
          {/* {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })} */}
          <IonMenuToggle>
            <IonItem lines='none' href='/Beranda'>
              <IonIcon src='assets/icon/home.svg' style={{fontSize:"30px"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px"}}>Beranda</IonText>
            </IonItem>
            <IonItem lines='none' href='/Beranda'>
              <IonIcon src='assets/icon/courier.svg' style={{fontSize:"30px"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px"}}>Courier</IonText>
            </IonItem>
            <IonItem lines='none' href='/Beranda'>
              <IonIcon src='assets/icon/delivery.svg' style={{fontSize:"30px"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px"}}>Deliver</IonText>
            </IonItem>
            <IonItem lines='none' href='/Beranda'>
              <IonIcon src='assets/icon/pickup.svg' style={{fontSize:"30px"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px"}}>Pickup</IonText>
            </IonItem>
            <IonItem lines='none' href='/Beranda'>
              <IonIcon src='assets/icon/reweight.svg' style={{fontSize:"30px"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px"}}>Reweight</IonText>
            </IonItem>
            <IonItem lines='none' href='/Beranda'>
              <IonIcon src='assets/icon/keluar.svg' style={{fontSize:"30px"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px"}}>Keluar</IonText>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
