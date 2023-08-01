const products = [
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
    {
        id:20,
        name:'Sony PlayStation 5 825GB Standard color blanco y negro',
        price:'500000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_841787-MLA44484414455_012021-F.webp',
        descripcion:'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.'
    },
    {
        id:21,
        name:'Xbox One S 500GB',
        price:'260000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_827517-MLA40655732582_022020-F.webp',
        descripcion:'Con tu consola Xbox One tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.'
    },
    {
        id:22,
        name:'Meoria RAM Spectrix D50 8GB',
        price:'20000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_943975-MLA45769609804_042021-F.webp',
        descripcion:'Si notás que tu computadora tiene bajo rendimiento o que su capacidad no se adapta a tus necesidades de uso, es momento de renovar su memoria RAM. Aumentarás su productividad y podrás trabajar de manera rápida y en simultáneo con múltiples aplicaciones.'
    },
    {
        id:23,
        name:'AMD Ryzen 5 5600g',
        price:'100000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_928642-MLA47847420037_102021-F.webp',
        descripcion:'Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G, diseñado para brindarte un rendimiento excepcional en tus juegos favoritos. Con sus 6 núcleos y 12 hilos, este procesador te permitirá disfrutar de una multitarea fluida y eficiente. Gracias a su arquitectura x86-64 y litografía de 7 nm, obtendrás un rendimiento óptimo con un menor consumo de energía.'
    },
  ];
  