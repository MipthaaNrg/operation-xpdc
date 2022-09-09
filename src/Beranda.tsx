import { IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { menuOutline, notifications } from "ionicons/icons"
import './Beranda.css';

const Beranda: React.FC = () => {
    function menu(){
        window.open('/components/Menu')
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton style={{color:"#0000A0"}}/>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonIcon icon={notifications} style={{fontSize:"28px", color:"#0000A0", paddingRight:"10px"}}></IonIcon>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow style={{margin:"15px"}}>
                    <IonText mode="ios" style={{fontSize:"18px"}}>Hi, Expeditor TGR</IonText>
                </IonRow>
                <IonRow style={{margin:"15px"}}>
                    <IonText mode="ios" style={{fontSize:"18px"}}>Welcome to My Expeditor</IonText>
                </IonRow>
                <IonRow>
                    <img src="assets/images/gambar1.svg"></img>
                </IonRow>
                <IonRow style={{margin:"10px 10px 10px 35px", position:"relative"}}>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px"}} className="bck-card">
                    <IonRow style={{margin:"15px auto", paddingTop:"25px"}}> 
                        <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-pickup.svg" style={{height:"55px"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center", margin:"5px"}}>
                            <IonText mode="ios">PICKUP</IonText>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px", padding:"5px"}} className="bck-card">
                    <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-deliver.svg" style={{height:"80px"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center", margin:"5px"}}>
                            <IonText mode="ios">DELIVER</IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
                </IonRow>
                <IonRow style={{margin:"10px 10px 10px 35px", position:"relative"}}>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px"}} className="bck-card">
                    <IonRow style={{margin:"15px auto", paddingTop:"15px"}}> 
                        <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-reweight.svg" style={{height:"60px"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center", margin:"5px"}}>
                            <IonText mode="ios">PICKUP</IonText>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px"}} className="bck-card">
                    <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-courier.svg" style={{height:"80px"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center", margin:"5px"}}>
                            <IonText mode="ios">COURIER</IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
export default Beranda