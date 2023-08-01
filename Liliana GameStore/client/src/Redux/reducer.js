import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL } from "./action-type";

const initialState = {
    products: [
      {
        id: 1,
        name: 'Laptop Acer Aspire',
        price: 800,
        image: 'https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/a/s/aspire-3---foto-5-con-solapa.jpg',
        stock: 25,
        rating: 4.5,
        description: 'Laptop Acer Aspire con procesador Intel Core i5 y pantalla Full HD de 15.6 pulgadas.'
      },
      {
        id: 2,
        name: 'Smartphone Samsung Galaxy S20',
        price: 1000,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g781bzblaro/gallery/ar-galaxy-s20-fe-5g-g781-sm-g781bzblaro-532206751?$650_519_PNG$',
        stock: 15,
        rating: 4.8,
        description: 'Smartphone Samsung Galaxy S20 con pantalla AMOLED de 6.2 pulgadas y cámara de 64MP.'
      },
      {
        id: 3,
        name: 'Smart TV LG 55"',
        price: 1200,
        image: 'https://www.lg.com/ar/images/televisores/md07540633/gallery/2-1100x730.jpg',
        stock: 10,
        rating: 4.7,
        description: 'Smart TV LG de 55 pulgadas con resolución 4K y tecnología OLED.'
      },
      {
        id: 4,
        name: 'Auriculares Sony WH-1000XM4',
        price: 300,
        image: 'https://www.sony.com.ar/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        stock: 30,
        rating: 4.9,
        description: 'Auriculares inalámbricos Sony WH-1000XM4 con cancelación de ruido y hasta 30 horas de autonomía.'
      },
      {
        id: 5,
        name: 'Tablet Apple iPad Pro',
        price: 900,
        image: 'https://images.fravega.com/f500/9dfd3d3abcd86de7eca96ca7c02ad1d2.jpg',
        stock: 20,
        rating: 4.6,
        description: 'Tablet Apple iPad Pro con pantalla Liquid Retina de 11 pulgadas y chip M1.'
      },
      {
        id: 6,
        name: 'Cámara Mirrorless Canon EOS M50',
        price: 700,
        image: 'https://www.digi-zoom.com.ar/images/productos/2306_1_z.jpg',
        stock: 12,
        rating: 4.4,
        description: 'Cámara Mirrorless Canon EOS M50 con sensor CMOS de 24.1 megapíxeles y grabación de video 4K.'
      },
      {
        id: 7,
        name: 'Consola Xbox Series X',
        price: 500,
        image: 'https://images.start.com.ar/RRT-00002GPUL1M.jpg',
        stock: 8,
        rating: 4.8,
        description: 'Consola Xbox Series X con capacidad de 1TB y soporte para resolución 8K.'
      },
      {
        id: 8,
        name: 'Monitor Gaming ASUS ROG Swift',
        price: 800,
        image: 'https://fullh4rd.com.ar/img/productos/18/monitor-asus-25-rog-swift-pg259qnr-fhd-360hz-1ms-hdmi-dp-0.jpg',
        stock: 18,
        rating: 4.7,
        description: 'Monitor gaming ASUS ROG Swift de 27 pulgadas y frecuencia de actualización de 240Hz.'
      },
      {
        id: 9,
        name: 'Impresora HP LaserJet Pro',
        price: 250,
        image: 'https://s3-sa-east-1.amazonaws.com/saasargentina/4kZjXiXg6Khjg0ODEcmF/imagen',
        stock: 22,
        rating: 4.5,
        description: 'Impresora láser HP LaserJet Pro con impresión a doble cara y conectividad Wi-Fi.'
      },
      {
        id: 10,
        name: 'Altavoz Bluetooth JBL Charge 4',
        price: 150,
        image: 'https://www.sintagmatecnologia.com.ar/Temp/App_WebSite/App_PictureFiles/Items/6925281947254_800.jpg',
        stock: 40,
        rating: 4.6,
        description: 'Altavoz Bluetooth JBL Charge 4 resistente al agua y con una batería de 7500mAh.'
      },
  ],
    productsCopy: [],
    detail: {
      id: 1,
      name: 'Laptop Acer Aspire',
      price: 800,
      image: 'https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/a/s/aspire-3---foto-5-con-solapa.jpg',
      stock: 25,
      rating: 4.5,
      description: 'Laptop Acer Aspire con procesador Intel Core i5 y pantalla Full HD de 15.6 pulgadas.'
    },
}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products : action.payload,
                productsCopy: action.payload,
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                detail: action.payload,
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                detail: {}
            }
        default:
            return {...state}
    }
}

export default reducer;