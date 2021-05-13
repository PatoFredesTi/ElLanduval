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

//horario
//const cargarHorario = () =>{
//  let horarioSelect = document.querySelector("#horario-select");
//   for(let i = 0; i < ca; ++i){
//      let comida = document.createElement("-")
//      let desayuno = document.createElement("Desayuno");
//      let almuerzo = document.createElement("Almuerzo");
//      let once = document.createElement("Once");
//      let cena = document.createElement("Cena");
//      comida.appendChild(desayuno);
//      comida.appendChild(almuerzo);
//      comida.appendChild(once);
//      comida.appendChild(cena);
//      horarioSelect.appendChild(comida); 
//}
//};

//validar valor

//Generar tabla
//nombre, horario, valor, descripcion, oferta
const Orden = [];

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
        tdValor.innerText = o.valor;
        let tdDesc = document.createElement("td");
        tdDesc.innerHTML = o.descripcion;

        tr.appendChild(tdNombre);
        tr.appendChild(tdHorario);
        tr.appendChild(tdValor);
        tr.appendChild(tdDesc);
        tbody.appendChild(tr);
    }
};
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
    Orden.push(pedido);
    cargarTabla();
    Swal.fire("Registro de menu realizado","","success")
});
