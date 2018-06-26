export class Order{

    clientId : string;
    localAddress : string;
    localLng : number;
    localLat: number;
    destAddress  : string;
    destLng : number;
    destLat: number;
    typeDelivery: string;
    motoboyId : string;
    price   : number;
    dateOrder  : Date;
    dateCollect : Date;
    dateDelivery : Date;
    contactDestination : string;
    phoneDestination : string;

    constructor() {}

}