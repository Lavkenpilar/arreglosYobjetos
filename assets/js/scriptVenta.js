const propiedades_venta = [
    {
        nombre:'Apartamento de lujo en zona exclusiva',
        src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", 
        descripcion:'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion:'123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones:'4 habitaciones',
        baños:'4 baños',
        costo:5000,
        smoke:false,
        pets:false,
    },
    {
        nombre:'Apartamento acogedor en la montaña',
        src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg", 
        descripcion:'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion:'789 Mountain Road,Summit Peaks, CA 23456',
        habitaciones:'2 habitaciones',
        baños:'1 baño',
        costo:1200,
        smoke:true,
        pets:true,
    },
    {
        nombre:' Penthouse de lujo con terraza panorámica',
        src:'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg', 
        descripcion:'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion:'567 Skyline Avenue,Skyview City, CA 56789',
        habitaciones:'3 habitaciones',
        baños:'3 baños',
        costo:4500,
        smoke:false,
        pets:true,
    },
    {
        nombre:'Acogedora cabaña en el Lago',
        src:"assets/img/cabana.jpg", 
        descripcion:'Esta acogedora cabaña se encuentra ubicada frente al lago, ofreciendo excelentes vistas del paisaje',
        ubicacion:'Lago Elizalde, Coyhaique. Chile',
        habitaciones:'2 habitaciones',
        baños:'2 banõs',
        costo:2000,
        smoke:true,
        pets:true,
    },
    {
        nombre:'Lujoso departamento en el centro de la ciudad',
        src:"assets/img/apartamento.jpg", 
        descripcion:'Este departamento se encuentra cercano a centro financiero y centros históricos/culturales',
        ubicacion:'Fulton St and Cliff St. New York city',
        habitaciones:'4 habitaciones',
        baños:'2 baños',
        costo:6000,
        smoke:false,
        pets:true,
    },
    {
        nombre:'Mansión en el árbol',
        src:"assets/img/casaArbol.webp", 
        descripcion:'Lujosa mansión ubicada en medio de un bosque nativo',
        ubicacion:'Bosque del sur de Chile',
        habitaciones:'4 habitaciones',
        baños:'2 baños',
        costo:3000,
        smoke:true,
        pets:true,
    },
]


const generarGaleriaVenta = (nombre)=>{
    const sectionVenta = document.querySelector(".row")
    let template = ''
    for (let propiedad of propiedades_venta){
        template+=/*html*/`
        <div class="col-md-4 mb-4">
              <div class="card">
              <h3>${propiedad.nombre}</h3>
              <img src=${propiedad.src}>
              <p>${propiedad.descripcion}</p>
              <p> <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p> <i class="fas fa-bed"></i> ${propiedad.habitaciones} | <i class="fas fa-bath"></i> ${propiedad.baños}</p>
              <p> <i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              ${propiedad.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>':'<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</p>
              ${propiedad.pets ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>':' <p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}</p>
             </div>
     </div>`
     
   } 
   sectionVenta.innerHTML=template
}
generarGaleriaVenta("propiedades_venta")