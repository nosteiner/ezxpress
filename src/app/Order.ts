export class Order{

    
    orderId : number;
    customerId : number;
    motoboyId : number;
    localAddress : string;
    latitudeOriginAddress : number;
    longitudeOriginAddress:number;
    destAddress: string;
    latitudeDestAddress:number;
    longitudeDestAddress:number;
    price: number;
    orderDate: Date ;
    collectDate: Date ;
    deliveryDate: Date ;
    contactDestination: string ;
    phoneDestination: string ;
    phoneNumber: string ;
    deliveryType: string ;
    statusId: number;
    active : boolean;
    signature: string;
    description: string;


    constructor() {}

}
