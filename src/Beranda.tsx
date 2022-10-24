import { IonBadge, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
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

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton style={{color:"#0000A0"}}/>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonIcon icon={notifications} style={{fontSize:"28px", color:"#0000A0", paddingRight:"10px"}}></IonIcon>
                        <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"0", right:"0", marginLeft:"10px", fontSize:"14px", background:"red"}}>5
                        </IonBadge>
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
                    <img src="assets/images/beranda1.png" style={{marginBottom:"15px"}}></img>
                </IonRow>
                 {/* Grid Menu */}
                 <IonGrid style={{margin:"0", padding:"0"}}>
                    <IonRow style={{margin:"0", padding:"0"}}>
                        <IonCol  style={{padding:"10px", position:"relative", paddingLeft:"20px"}}>
                        <img src='assets/icon/pickup.png' style={{margin:"2px auto", width:"99%", height:"97%"}}
                         onClick={() =>{openpickup()}}/>
                          <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px", fontSize:"30px", background:"red"}}>15
                        </IonBadge>
                        </IonCol>
                        <IonCol  style={{padding:"10px", position:"relative"}}>
                        <img src='assets/icon/deliver.png' style={{margin:"2px auto", width:"100%", height:"100%" }} onClick={() =>{opendeliver()}}/>
                        <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px", fontSize:"30px", background:"red"}}>15
                        </IonBadge>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* <IonRow style={{margin:"10px", position:"relative", textAlign:"center", justifyContent:"center"}}>
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
                </IonRow> */}
            </IonContent>
        </IonPage>
    )
}
export default Beranda