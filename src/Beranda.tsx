import { IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { menuOutline, notifications } from "ionicons/icons"
import './Beranda.css';

const Beranda: React.FC = () => {
    function menu(){
        window.open('/components/Menu')
    }
    function openpickup(){
        window.open('/pickup','_self')
    }
    function opendeliver(){
        window.open('/Deliver','_self')
    }
    function openreweight(){
        window.open('/Reweight','_self')
    }
    function opencourier(){
        window.open('/Courier','_self')
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
                    <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                        <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center", fontWeight:"bold"}}>DASHBOARD</IonText>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow style={{margin:"15px"}}>
                    <IonText mode="ios" style={{fontSize:"20px", color:"#0000A0", fontWeight:"bold"}}>Hi, Expeditor TGR</IonText>
                </IonRow>
                <IonRow style={{margin:"0", padding:"0"}}>
                    <img src="assets/images/beranda1.png"></img>
                </IonRow>
                <IonRow style={{margin:"10px", position:"relative", textAlign:"center", justifyContent:"center"}}>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px", background:"#0000A0", padding:"0"}} onClick={openpickup}>
                    <IonRow style={{margin:"15px auto", paddingTop:"10px"}}> 
                        <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-pickup.svg" style={{height:"65px",transform:"translateY(-10%)"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <IonText mode="ios" style={{fontWeight:"bold", color:"white", fontSize:"24px", fontFamily:"Alegreya"}}>PICKUP</IonText>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px", padding:"5px", background:"#0000A0"}}  onClick={opendeliver}>
                <IonRow style={{margin:"15px auto", paddingTop:"5px"}}> 
                        <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/deliver-menu.svg" style={{height:"65px",transform:"translateY(-10%)"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <IonText mode="ios" style={{fontWeight:"bold", color:"white", fontSize:"24px", fontFamily:"Alegreya"}}>DELIVER</IonText>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonCard>
                </IonRow>
                <IonRow style={{margin:"10px", textAlign:"center", justifyContent:"center"}}>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px", background:"#0000A0"}} onClick={openreweight}>
                    <IonRow style={{margin:"15px auto", paddingTop:"10px"}}> 
                        <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-reweight.svg" style={{height:"75px",transform:"translateY(-15%)"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <IonText mode="ios" style={{fontWeight:"bold", color:"white", fontSize:"24px", fontFamily:"Alegreya"}}>REWEIGHT</IonText>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{width:"40%", height:"auto", borderRadius:"15px", background:"#0000A0"}} onClick={opencourier}>
                    <IonRow style={{margin:"15px auto", paddingTop:"10px"}}> 
                        <IonCol style={{textAlign:"center", justifyContent:"center"}}>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <img src="assets/icon/menu-courier.svg" style={{height:"75px",transform:"translateY(-15%)"}}></img>
                        </IonRow>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <IonText mode="ios" style={{fontWeight:"bold", color:"white", fontSize:"24px", fontFamily:"Alegreya"}}>COURIER</IonText>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonCard>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
export default Beranda