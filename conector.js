$(document).ready(function(){
  console.log("cargado")
  mostrar()
})

function mostrar(){
  $.ajax({
    url:"http://127.0.0.1:5000/cuentas",
    success:function(respuesta){
      console.log("exito")
      enviarDatos(respuesta)
    },
    error:function(respuesta){
      console.log(respuesta)
    }
  })
}

function enviarDatos(datos){
  $.each(datos,function(index,valor){
    var row = "<tr>"
    row += "<td>" + valor[1] + "</td>"
    row += "<td>" + valor[2] + "</td>"
    row += "<td>" + valor[3] + "</td>"

    $("#tablaCuentas").append(row)
  })
}
