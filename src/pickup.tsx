import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { IonActionSheet, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItemDivider, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { call, callOutline, closeCircle, closeOutline, downloadOutline, ellipseOutline, logoWhatsapp } from "ionicons/icons"
import { useState } from "react";

const usePickup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenKoli, setIsOpenKoli] = useState(false);
  const [isOpenPickup, setIsOpenPickup] = useState(false);
  const [showAction, setShowAction] = useState(false);
    
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
    <IonPage >
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
                </IonButtons>
                <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                    <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>PICKUP ORDER</IonText>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                <IonGrid>
                  <IonRow>
                    <IonCol size='6' style={{textAlign:"start"}}>
                      <h6 style={{fontWeight:"800", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621</h6>
                    </IonCol>
                  </IonRow>
                  <IonRow onClick={() => {setIsOpen(true)}}>
                    <IonCol>
                      <IonRow>
                        <IonText>Pengirim</IonText>
                      </IonRow>
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
                      {/* {a['id']} */}
                        <h6 style={{margin:0, padding:0, color:"black", fontWeight:"bold"}}>
                          PT. MAJU JAYA
                        </h6>
                        <p style={{margin:0, padding:0}}>
                          Kepuluan Riau, Indonesia
                        </p>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonGrid style={{padding:"10px 0"}}>
                      <IonRow>
                          <IonCol size='6' style={{margin:0, padding:"2px 5px"}}>
                              <button style={{width:"100%", background:"#2dd36d", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                                  <IonText mode='ios' style={{fontSize:"14px", color:"white", margin:"15px 5px"}}>
                                      Chat Whatsapp
                                  </IonText>
                              </button>
                          </IonCol>
                          <IonCol size='6' style={{margin:0, padding:"2px 5px"}}>
                              <button style={{width:"100%", background:"#3780fe", borderRadius:"10px", display:"flex", justifyContent:"center"}}>
                                  <IonText mode='ios' style={{color:"white", fontSize:"14px", margin:"15px 5px"}}>
                                      Telepon
                                  </IonText>
                              </button>
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonRow>
                  <IonRow style={{padding:"5px"}}>
                    <button style={{width:"100%",  borderRadius:"10px", border:"1px solid #2946c7",justifyContent:"center", background:"white", padding:"15px"}}>
                      <IonText style={{ color:"#2946c7", fontSize:"16px"}}>Konfirmasi Pickup!</IonText>
                    </button>
                  </IonRow>
                </IonGrid>
              </IonCard>
              <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                <IonGrid>
                  <IonRow>
                    <IonCol size='6' style={{textAlign:"start"}}>
                      <h6 style={{fontWeight:"800", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621</h6>
                    </IonCol>
                  </IonRow>
                  <IonRow onClick={() => {setIsOpen(true)}}>
                    <IonCol>
                      <IonRow>
                        <IonText>Pengirim</IonText>
                      </IonRow>
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
                      {/* {a['id']} */}
                        <h6 style={{margin:0, padding:0, color:"black", fontWeight:"bold"}}>
                          PT. MAJU JAYA
                        </h6>
                        <p style={{margin:0, padding:0}}>
                          Kepuluan Riau, Indonesia
                        </p>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonGrid style={{padding:"10px 0"}}>
                      <IonRow>
                          <IonCol size='6' style={{margin:0, padding:"2px 5px"}}>
                              <button style={{width:"100%", background:"#2dd36d", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                                  <IonText mode='ios' style={{fontSize:"14px", color:"white", margin:"15px 5px"}}>
                                      Chat Whatsapp
                                  </IonText>
                              </button>
                          </IonCol>
                          <IonCol size='6' style={{margin:0, padding:"2px 5px"}}>
                              <button style={{width:"100%", background:"#3780fe", borderRadius:"10px", display:"flex", justifyContent:"center"}}>
                                  <IonText mode='ios' style={{color:"white", fontSize:"14px", margin:"15px 5px"}}>
                                      Telepon
                                  </IonText>
                              </button>
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonRow>
                  <IonRow style={{padding:"5px"}}>
                    <button style={{width:"100%",  borderRadius:"10px", border:"1px solid #2946c7",justifyContent:"center", background:"white", padding:"15px"}}>
                      <IonText style={{ color:"#2946c7", fontSize:"16px"}}>Konfirmasi Pickup!</IonText>
                    </button>
                  </IonRow>
                </IonGrid>
              </IonCard>

                {/* IonModal  pickup detail*/}
                <IonModal isOpen={isOpen}>
                  <IonHeader>
                    <IonToolbar>
                      <IonButtons slot="start">
                        <IonButton onClick={() => setIsOpen(false)}>
                          <IonIcon src={closeOutline} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                        </IonButton>
                      </IonButtons>
                      <IonTitle style={{fontWeight:"bold"}}>XPDC202298498</IonTitle>
                      <IonButtons slot="end">
                        <IonButton onClick={() => setIsOpen(false)}>
                          <IonIcon src={downloadOutline} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent >
                    <IonText style={{fontSize:"18px", paddingLeft:"10px",margin:"5px"}}>Informasi Pengirim</IonText>
                    <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px", background:"rgba(0, 168, 132, 0.20)"}}>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonRow>
                            <IonText>Pengirim</IonText>
                          </IonRow>
                          <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
                          {/* {a['id']} */}
                            <h6 style={{margin:0, padding:0, color:"black", fontWeight:"bold"}}>
                              PT. MAJU JAYA
                            </h6>
                            <p style={{margin:0, padding:0}}>
                              Lampung, Kota Bandar Lampung, Tanjung Karang Barat, Sukajawa Baru, 35151
                            </p>
                          </IonRow>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                      <IonRow style={{width:"100%"}}>
                        <button style={{width:"100%",  borderRadius:"10px", border:"1px solid #2946c7",justifyContent:"center", background:"white", padding:"15px"}}>
                          <IonText style={{ color:"#2946c7", fontSize:"16px"}}>Hubungi</IonText>
                        </button>
                      </IonRow>
                      </IonRow>
                    </IonGrid>
                  </IonCard>
                  <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px", background:"#F3D5D3"}}>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonRow>
                            <IonText>Penerima</IonText>
                          </IonRow>
                          <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
                          {/* {a['id']} */}
                            <h6 style={{margin:0, padding:0, color:"black", fontWeight:"bold"}}>
                              PT. MAJU JAYA
                            </h6>
                            <p style={{margin:0, padding:0, color:"black"}}>
                              Lampung, Kota Bandar Lampung, Tanjung Karang Barat, Sukajawa Baru, 35151
                            </p>
                          </IonRow>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCard>
                  <IonRow style={{borderBottom:"2px solid gray",width:"96%", marginLeft:"5px", marginBottom:"10px", marginTop:"10px"}}></IonRow>
                  <IonText style={{fontSize:"18px", paddingLeft:"10px",margin:"5px", padding:"5px"}}>Informasi Barang</IonText>
                  <IonGrid style={{background:"#dce0d9", margin:"10px", borderRadius:"5px"}}>
                    <IonRow style={{background:"#2dd36d", padding:"5px", borderRadius:"10px", textAlign:"center", justifyContent:"center", color:"white"}}>
                      <IonText style={{justifyContent:"center", textAlign:"center", color:"white"}}>Nama Barang</IonText>
                    </IonRow>
                    <IonRow style={{padding:"10px", textAlign:"center", justifyContent:"center"}}>
                      <IonText style={{}}>HONDA BEAT NO. POLISI:B1234ZA</IonText>
                    </IonRow>
                  </IonGrid>
                  <IonRow style={{padding:"5px"}}>
                    <IonCol>
                      <IonGrid style={{background:"#dce0d9", borderRadius:"5px"}}>
                      <IonRow style={{background:"#2dd36d", borderRadius:"10px", textAlign:"center", justifyContent:"center", color:"white"}}>
                        <IonText style={{justifyContent:"center", textAlign:"center", color:"white"}}>QTY</IonText>
                      </IonRow>
                      <IonRow style={{padding:"10px", textAlign:"center", justifyContent:"center"}}>
                        <IonText style={{}}>1</IonText>
                      </IonRow>
                      </IonGrid>
                    </IonCol>
                    <IonCol>
                    <IonGrid style={{background:"#dce0d9",  borderRadius:"5px"}}>
                      <IonRow style={{background:"#2dd36d",  borderRadius:"10px", textAlign:"center", justifyContent:"center", color:"white"}}>
                        <IonText style={{justifyContent:"center", textAlign:"center", color:"white"}}>Volume</IonText>
                      </IonRow>
                      <IonRow style={{padding:"10px", textAlign:"center", justifyContent:"center"}}>
                        <IonText style={{}}>10 Kg</IonText>
                      </IonRow>
                      </IonGrid>
                    </IonCol>
                    <IonCol>
                      <IonGrid style={{background:"#dce0d9", borderRadius:"5px"}}>
                      <IonRow style={{background:"#2dd36d", borderRadius:"10px", textAlign:"center", justifyContent:"center", color:"white"}}>
                        <IonText style={{justifyContent:"center", textAlign:"center", color:"white"}}>Berat Aktual</IonText>
                      </IonRow>
                      <IonRow style={{padding:"10px", textAlign:"center", justifyContent:"center"}}>
                        <IonText style={{}}>12 Kg</IonText>
                      </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>
                  </IonContent>
                  <IonFooter style={{background:"white"}}>
                  <IonGrid style={{padding:"10px 0", margin:"5px"}} >
                    <IonRow>
                        <button style={{width:"100%", background:"#2dd36d", borderRadius:"10px", display:"flex",justifyContent:"center"}} onClick={() =>setShowAction(true)}>
                            <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                                MENU
                            </IonText>
                        </button>
                    </IonRow>
                  </IonGrid>
                </IonFooter>
                </IonModal>
                {/* Tutup Modal */}

                  {/* IonModal  Ubah Koli*/}
                  <IonModal isOpen={isOpenKoli}>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Update Jumlah Koli</IonTitle>
                      <IonButtons slot="end">
                        <IonButton onClick={() => setIsOpenKoli(false)}>
                          <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent className="ion-padding">
                    <IonLabel>Jumlah Koli</IonLabel>
                    <IonInput placeholder="Masukan Jumlah Koli" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
                    <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SIMPAN</button>
                  </IonContent>
                </IonModal>
                {/* Tutup Modal */}
                
                  {/* IonModal  Ubah Pickup*/}
                  <IonModal isOpen={isOpenPickup}>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Update Pickup</IonTitle>
                      <IonButtons slot="end">
                        <IonButton onClick={() => setIsOpenPickup(false)}>
                          <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent className="ion-padding">
                    <IonLabel>Quantity</IonLabel>
                    <IonInput placeholder="Masukan Quantity" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
                    <IonLabel>Berat</IonLabel>
                    <IonInput placeholder="Masukan Berat" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
                    <IonLabel>Panjang</IonLabel>
                    <IonInput placeholder="Masukan Panjang" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
                    <IonLabel>Lebar</IonLabel>
                    <IonInput placeholder="Masukan Lebar" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
                    <IonLabel>Tinggi</IonLabel>
                    <IonInput placeholder="Masukan Tinggi" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
                    <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SIMPAN</button>
                  </IonContent>
                </IonModal>
                {/* Tutup Modal */}


                <IonActionSheet
                isOpen={showAction}
                onDidDismiss={() => setShowAction(false)}
                buttons={[{
                  text: 'Update Pickup',
                  handler: () => {setIsOpenPickup(true)
                    
                  }
                },{
                    text: 'Update Jumlah Koli',
                  //   role:'destructive',
                    handler: () => {setIsOpenKoli(true)
                  //     ;
                      
                    }
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
          {/* <IonFooter style={{background:"white"}}>
          <IonGrid style={{padding:"10px 0", margin:"5px"}} onClick={plugBarcode}>
            <IonRow>
                <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                    <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                        SCAN PICKUP
                    </IonText>
                </button>
            </IonRow>
          </IonGrid>
        </IonFooter> */}
    </IonPage>
    )
}

export default usePickup