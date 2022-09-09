import { IonBadge, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { notifications } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <IonFab vertical='top' horizontal='end' style={{ top:"5px", right:"5px", background:"#FFFFFF"}}>
              <IonFabButton  href='/notifikasi' style={{top:"0", width:"40px", height:"40px", background:"#FFFFFF"}}>
                <IonIcon icon={notifications} style={{color:"#0000A0", top:"0",fontSize:"20px"}}></IonIcon>
             <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px"}}></IonBadge>
      {/* <IonBadge className='badge' mode='ios'>3</IonBadge> */}
              </IonFabButton>
            </IonFab>
          {/* <IonTitle>Home</IonTitle> */}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Page;
