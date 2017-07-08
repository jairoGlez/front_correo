$(document).ready(function(){
  $("#buscar").click(function(){
    console.log("Click!!!")

    $("#resultados").find("tr[id='datos']").each(function(index,value){
      value.remove()
    })

    $.ajax({
      url:"http://127.0.0.1:5000/buscar",
      data: $("#correo").serialize(),
      type: "POST",
      success: function(respuesta){
        console.log(respuesta)
        mostrar(respuesta)
      },
      error: function(respuesta){
        console.log("No jalo")
        console.log(respuesta)
      }
    })
  })
})

function mostrar (respuesta){
  $.each(respuesta, function(index,valor){
    var fila = "<tr id='datos'>"
    fila += "<td>" + valor["id"] +"</td>"
    fila += "<td>" + valor["nombre"] +"</td>"
    fila += "<td>" + valor["direccion"] +"</td>"
    fila += "<td>" + valor["contraseña"] +"</td>"
    fila += "</tr>"

    $("#resultados").append(fila)
  })
}
