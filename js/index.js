//inicio con tinymce
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });


const Orden = [];

//Validacion
function validacion(){
    selector = document.querySelector("#horario-select").value;
    val = document.querySelector("#valor-int").value;
    if(selector == "Desayuno"){
        if(val >= 1000 && val <= 10000){
            return true;
        }else{
            return false;
        }
    }else if(selector == "Almuerzo"){
        if(val >= 10000 && val <= 20000){
            return true;
        }else{
            return false;
        }
    }else if(selector == "Once"){
        if(val >= 5000 && val <= 15000){
            return true;
        }else{
            return false;
        }
    }else if(selector == "Cena"){
        if(val > 15000){
            return true;
        }else{
            return false;
        }
    }
};

const iconoferta = () =>{
    validacion();
    if(selector == "Desayuno" && val < 5000){
        return true;
    }else if(selector == "Almuerzo" && val < 15000){
        return true;
    }else if(selector == "Once" && val <10000){
        return true;
    }else if(selector == "Cena" && val <20000){
        return true;
    }else{
        return false;
    }
};

//cargar tabla
const cargarTabla = () =>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i = 0; i < Orden.length; ++i){
        let o = Orden[i];
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = o.nombre;
        let tdHorario = document.createElement("td");
        tdHorario.innerText = o.horario;
        let tdValor = document.createElement("td");
        tdValor.innerText = ("$" + o.valor);
        let tdDesc = document.createElement("td");
        tdDesc.innerHTML = o.descripcion;
        let tdOferta = document.createElement("td");
        let icono = document.createElement("i");
        if (iconoferta() == true){
            icono.classList.add("fas","fa-hand-holding-usd","fa-2x");
            console.log("hola")
        }else{
            icono.classList.add("fas","fa-receipt","fa-2x");
            console.log("chao")
        }
        tdOferta.appendChild(icono);
        tr.appendChild(tdNombre);
        tr.appendChild(tdHorario);
        tr.appendChild(tdValor);
        tr.appendChild(tdDesc);
        tr.appendChild(tdOferta);
        tbody.appendChild(tr);
    }
};

//boton registrar
document.querySelector("#registrar-btn").addEventListener("click", () => {
    let nombre = document.querySelector("#nombre-txt").value;
    let horario = document.querySelector("#horario-select").value;
    let valor = document.querySelector("#valor-int").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    let pedido = {};
    pedido.nombre = nombre;
    pedido.horario = horario;
    pedido.valor = valor;
    pedido.descripcion = descripcion;
    validacion();
    if (validacion() == true){
        Orden.push(pedido);
        Swal.fire("Registro de menu realizado","","success")
    }else{
        Swal.fire("El valor esta fuera del rango de horario","","error")
    }
    cargarTabla();
});
