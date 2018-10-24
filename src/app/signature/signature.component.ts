import { Component, ViewChild, Input } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { OrdersService } from '../orders.service';
import { Order } from '../Order';
 

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent  {
  @Input() order: Order
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
 
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 3,
    'canvasWidth': 400,
    'canvasHeight': 200
  };
  
  constructor(private ordersServices : OrdersService) { }
 
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 3); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.order.signature = this.signaturePad.toDataURL()
    
    //this.ordersServices.uploadSignature(image)
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }



  
      
}
