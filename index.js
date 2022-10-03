/*Dado el siguiente arreglo de objetos, realizar una función que permita buscar y ver las propiedades de un contacto, según el nombre escrito y la propiedad seleccionada al hacer clic en el botón buscar. En caso de que se seleccionen todas las propiedades en el elemento select, deben mostrarse todas las propiedades con sus respectivos valores. Si solo se selecciona una, se debe mostrar solo esa propiedad con su respectivo valor. Si el contacto no existe, escribir el texto, no encontrado. Si los datos no se digitaron completos, mostrar una alerta indicando que los datos no están completos. Al hacer click sobre el input nombre, se debe vaciar todos los elementos.*/

contacto = [
    {
        nombre: "Ronald",
        apellido: "Nav",
        numero: "313265498",
        gustos: ['pizza', 'programación', 'enseñar']
      
    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372684',
        gustos: ['Hogwarts', 'magia']
    },

    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['clases interesantes', 'violin']
    },
    {
        nombre: 'Goku',
        apellido: '',
        numero: '123412523',
        gustos: ['Artes Marciales', 'Milk', 'Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: ['Correr superrapido', '	Iris West', 'Misterios']
    },
    {
        nombre: 'Tony',
        apellido: 'Star',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },


]

const buscar=document.getElementById('buscar');

buscar.addEventListener('click',()=>{
let texto = document.getElementById('texto');
let nombre=document.getElementById('nombre').value;
let propiedad=document.getElementById('propiedad')
propiedad=propiedad.options[propiedad.selectedIndex].text

if(nombre ==='' || propiedad===''){
    alert('vacio')
}else{
for(let i=0; i<contacto.length; i++){
    if(nombre===contacto[i].nombre){
        texto.innerText='' 
        for (const key in contacto[i]) {
            
            if(propiedad==='apellido'){
                texto.innerText=contacto[i].apellido
            }
            else if(propiedad==='numero'){
                texto.innerText=contacto[i].numero
            }
            else if(propiedad==='gustos'){
                texto.innerText=contacto[i].gustos
            }
            else{
                texto.innerText=`${contacto[i].nombre} ${contacto[i].apellido} ${contacto[i].numero} ${contacto[i].gustos}`
            } 
            }
            break;
    }else{
        texto.innerText='hay ninguno' 

    }
}
}
})

nombre.addEventListener('click',()=>{
    nombre=document.getElementById('nombre').value=''
    propiedad=document.getElementById('propiedad').value=''
    texto.innerHTML=''
})





















