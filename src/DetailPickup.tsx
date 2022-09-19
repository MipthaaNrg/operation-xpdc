import { IonActionSheet, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import { checkboxOutline, checkmarkOutline, chevronBackOutline, closeOutline, ellipseOutline, pencilOutline, printOutline } from "ionicons/icons"
import { useState } from "react";
import { useHistory } from "react-router";


const DetailPickup: React.FC = () => {
    const [showAction, setShowAction] = useState(false);
    const history = useHistory();

    function openAction(){
        setShowAction(true)
    }
return(
    <IonPage>
    <IonHeader>
        <IonToolbar>
            {/* <IonButtons slot="start">
                <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
            </IonButtons> */}
            <div style={{textAlign:"start", display:"flex", margin:"10px 0"}}>
                        <button onClick={history.goBack} style={{padding:"0" ,border:"none" , background: "transparent"}}>
                            <IonIcon icon={chevronBackOutline} id='iconBack' style={{fontSize:"32px" , margin:"0", color:"#0000A0"}}/>
                        </button>
                        <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                            <IonText mode='ios' style={{margin:"8px 5px", fontSize:"18px", textAlign:"center", justifyContent:"center", color:"#0000A0"}}>Pickup Order Detail</IonText>
                        </IonRow>
                    </div>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonRow style={{margin:"15px", borderBottom:"1px solid black", paddingBottom:"5px"}}>
            <IonCol style={{textAlign:"start"}}>
                <IonText mode="ios" style={{fontSize:"18px", fontWeight:"bold"}}> No.Tracking</IonText>
            </IonCol>
            <IonCol style={{textAlign:"end"}}>
                <IonText mode="ios" style={{fontSize:"18px"}}> XPDC2022080621</IonText>
            </IonCol>
        </IonRow>
        <IonRow style={{borderBottom:"1px solid black", margin:"15px"}}>
            <IonCol size='2'>
              <IonRow style={{padding:"10px 0"}}>
                <IonIcon icon={ellipseOutline} style={{background:"#A3A3A3", width:"24px", height:"24px", borderRadius:"50%", color:"#A3A3A3", margin:"auto"}}></IonIcon>
              </IonRow>
              <IonRow style={{padding:"10px 0"}}>
                <IonIcon icon={ellipseOutline} style={{background:"#0000A0", width:"24px", height:"24px", borderRadius:"50%", color:"#0000A0", margin:"auto"}}></IonIcon>
              </IonRow>
            </IonCol>
            <IonCol >
              <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
              {/* {a['id']} */}
                <h6 style={{margin:0, padding:0, color:"black"}}>
                  Dikha
                </h6>
                <p style={{margin:0, padding:0}}>
                  Kepulauan Riau, Indonesia
                </p>
              </IonRow>
              <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
              <h6 style={{margin:0, padding:0, color:"black"}}>
                 Miptha
                </h6>
                <p style={{margin:0, padding:0}}>
                  Tangerang, Banten, Indonesia
                </p>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonText mode="ios" style={{fontSize:"18px", margin:"15px", padding:"0"}}>Detail</IonText>
          </IonRow>
          <IonCard style={{margin:"15px", fontSize:"16px", borderRadius:"10px 10px 0 0" }} >
            <IonRow style={{padding:"10px", background:"#0000A0"}}>
                <IonText mode="ios" style={{color:"white"}}>XPDC2022080621</IonText>
            </IonRow>
            <IonRow style={{padding:"0"}}>
                <IonCol >
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Berat: 10 Kg</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Scan:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"0"}}>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Panjang: 10 cm</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Reweight:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Lebar: 10 cm</IonText>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Tinggi: 10 cm</IonText>
            </IonRow>
          </IonCard>
          <IonActionSheet
        isOpen={showAction}
        onDidDismiss={() => setShowAction(false)}
        buttons={[{
          text: 'Konfirmasi Pickup',
        //   handler: () => {
            
        //   }
        },{
          text: 'Gagal Pickup',
        //   role:'destructive',
        //   handler: () => {
        //     ;
            
        //   }
        },{
            text: 'Print Label',
          //   role:'destructive',
          //   handler: () => {
          //     ;
              
          //   }
        },{
            text: 'Update Jumlah Koli',
          //   role:'destructive',
          //   handler: () => {
          //     ;
              
          //   }
        }, {
          text: 'Cancel',
          role: 'cancel',
        //   handler: () => {
        //     console.log('cancel');
        //   }
        }]}
        mode='ios'
      >
      </IonActionSheet>
    </IonContent>
    <IonFooter style={{background:"white"}}>
            <IonGrid style={{padding:"10px 0", margin:"5px"}} onClick={openAction}>
                <IonRow>
                    <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                        <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                            ACTION
                        </IonText>
                    </button>
                </IonRow>
                </IonGrid>
        </IonFooter>
</IonPage>
)
}
export default DetailPickup