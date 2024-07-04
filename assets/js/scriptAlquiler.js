const propiedades_alquiler = [
    {
        nombre:'Apartamento en el centro de la ciudad',
        src:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion:'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion:'123 Main Street, Anytown, CA 91234',
        habitaciones:'2 habitaciones',
        baños:'2 baños',
        costo:2000,
        smoke:false,
        pets:true,
    },
    {
        nombre:'Apartamento luminoso con vista al mar',
        src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", 
        descripcion:'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion:'456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones:'3 habitaciones',
        baños:'3 baños',
        costo:2500,
        smoke:true,
        pets:true,
    },
    {
        nombre:' Condominio moderno en zona residencial',
        src:'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 
        descripcion:'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion:'123 Main Street, Anytown, CA 91234',
        habitaciones:'2 habitaciones',
        baños:'2 baños',
        costo:2200,
        smoke:false,
        pets:false,
    },
    {
        nombre:'Acogedora cabaña rodeada de naturaleza',
        src:"assets/img/cabana2.jpg", 
        descripcion:'Esta acogedora cabaña ofrece vistas panorámicas al lago',
        ubicacion:'Lago Llew Llew, Tirúa. Chile',
        habitaciones:'3 habitaciones',
        baños:'2 banõs',
        costo:2500,
        smoke:true,
        pets:true,
    },
    {
        nombre:'Espaciosa casa en zona residencial',
        src:"assets/img/casa.jpg", 
        descripcion:'Hermosa casa, con amplios espacios organizados armonicamente',
        ubicacion:'Fulton St and Cliff St. New York city',
        habitaciones:'4 habitaciones',
        baños:'3 baños',
        costo:4000,
        smoke:false,
        pets:true,
    },
    {
        nombre:'Acogedora casa en el árbol',
        src:"assets/img/arbol.jpg", 
        descripcion:'Linda casa construida en un arbol',
        ubicacion:'Bosque del sur de Chile',
        habitaciones:'2 habitaciones',
        baños:'1 baños',
        costo:2000,
        smoke:true,
        pets:true,
    },
]


const generarGaleriaAlquiler = (nombre)=>{
    const sectionAlquiler = document.querySelector(".row")
    let template = ''
    for (let propiedad of propiedades_alquiler){
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
   sectionAlquiler.innerHTML=template
}
generarGaleriaAlquiler("propiedades_alquiler")