export class MotoBoy{
    motoboyId :number;
    idNumber : string;
    firsName : string;
    lastName : string;
    email    : string;
    phoneNumber : number;
    rate     : number;
    photo    : string;
    latitude : number;
    longitude: number;
    icon: string;
    active : boolean;
    constructor() {

        this.active = true; 
        this.rate = null ;
        this.icon = "https://png.icons8.com/ios/40/3CBC32/cycling-road-filled.png"

    }

    asingToOrder(order){
        if ((order.active)&&(order.motoboyId==null)){
            order.motoboyId = this.motoboyId;
            order.ststus = 2 ;
            //Needs to be define 
           //sendNotificationToclient(order){}
        }

    }
    cancelAsignToOrder(order){
        if ((order.active)&&(order.motoboyId==null)){
            order.motoboyId = null;
            order.ststus = 1 ;
            //Needs to be define 
           //sendNotificationToclient(order){}
        }

    }


}