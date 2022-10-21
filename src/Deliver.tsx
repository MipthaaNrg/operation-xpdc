import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import { filter } from "ionicons/icons"

const Deliver: React.FC = () => {
    return(
        <IonPage>
             <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
                    </IonButtons>
                    <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                        <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>DELIVER ORDER</IonText>
                    </IonRow>
                    {/* <IonButtons slot="end">
                        <IonIcon src="assets/icon/filter.svg" style={{fontSize:"30px"}}></IonIcon>
                    </IonButtons> */}
                </IonToolbar>
            </IonHeader>
            <IonContent>

            </IonContent>
        </IonPage>
    )
}
export default Deliver