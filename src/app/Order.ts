export class Order{
    
    orderId : number;
    customerId : number;
    motoboyId : number;
    latitudeOriginAddress : number;
    longitudeOriginAddress:number;
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
    status: string ;

    constructor() {}

}
