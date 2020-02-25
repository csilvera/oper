localStorage.setItem("view", 'certificaciones');

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    cr = JSON.parse(this.responseText);
	  console.log(cr);
	  let cer = $("#Content");
    $("#Content").empty();
    if(cr == 0){
            cer.html();
            cer.append(`<div class="lista-inf">No hay resultados</div>`)
    }else{
            cer.html();
            cr.forEach(cert => {
                cer.append(`
              					<tr class="list-b">
              						<td>
              							<div>${cert.descripcion}</div>
              							<div class="c-fech">${cert.taladro} - ${cert.desde} - ${cert.hasta}</div>
              							<td>
              					</tr>

              				`);
            });

          }
  }
};
xmlhttp.open("GET", "https://didigitales.tigersoftware.net.ve/certifica-lista", true);

xmlhttp.send();
