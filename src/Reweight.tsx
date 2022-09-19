import { IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const Reweight: React.FC = () => {
    function plugBarcode(){
        BarcodeScanner.scan({
          preferFrontCamera:false,
          showFlipCameraButton:false,
          showTorchButton:true,
          torchOn:false,
          prompt:"Scan Barcode Tracking Ke Dalam Kotak Area",
          resultDisplayDuration:500,
          formats:'EAN_13,EAN_8,QR_CODE,PDF_417,CODABAR,CODE_128',
          orientation: 'potrait',
        }).then( r => {
          alert(JSON.stringify(r))
        }).catch(err => {
          alert(err)
        })
      }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
                    </IonButtons>
                    <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                        <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>REWEIGHT ORDER</IonText>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               </IonContent>
                   <IonFooter style={{background:"white"}}>
                       <IonGrid style={{padding:"10px 0"}}>
                               <IonRow>
                                   <IonCol style={{margin:0, padding:"2px 5px"}} onClick={plugBarcode}>
                                       <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                                           <IonText mode='ios' style={{fontSize:"14px", color:"white", margin:"15px 5px"}}>
                                               SCAN BARCODE
                                           </IonText>
                                       </button>
                                   </IonCol>
                               </IonRow>
                        </IonGrid>
                    </IonFooter>
           </IonPage>
    )
}
export default Reweight