localStorage.setItem("view", 'certificaciones');
localStorage.setItem("reload", 'certifica');

var m = 1; var b = 1;
function welcome(){
  if (navigator.onLine) {
  scroll();
  var t = setTimeout(function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cr = JSON.parse(this.responseText);
  	  //console.log(cr);
      localStorage.setItem("rcertifica", cr);
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
},2000);
  }
  else{
    scroll();
    cr = localStorage.getItem('rcertifica');
    $('#Status').empty();
    $('#Status').append(`
    <div class="cd-status bg-primary">
      <i class="icon icon-ind"></i>
      <div class="txt-msj">
        Verifica tu conexión
      </div>
    </div>`);
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
}
$('#Menu').on('click', function(){
  if(m == 1){
      m = 0;
      $('#M-left').animate({left:'0%'},'show');
  }
  else{
      m = 1;
      $('#M-left').animate({left:'-80%'},'show');
  }
});
$('#Back').on('click', function(){
  if(b == 1){
      b = 0;
      $('#M-left').animate({left:'-80%'},'show');
  }
  else{
      b = 1;
      $('#M-left').animate({left:'0%'},'show');
  }
});
$('#Reload').on('click', function(){
  navigator.vibrate(2000);
    var v = localStorage.getItem('reload');
    if (v == 'certifica') {
      certifica();
    }else{
      inventario();
    }
});
$('#Certifica').on('click', function(){
  navigator.vibrate(2000);
  $('#Titulo').text('Certificaciones');
  b = 0;
  $('#M-left').animate({left:'-80%'},'show');
  localStorage.setItem("reload", 'certifica');
  var v = localStorage.getItem('reload');
  if (v == 'certifica') {
    certifica();
  }else{
    inventario();
  }
});
$('#Inventario').on('click', function(){
  navigator.vibrate(2000);
  $('#Titulo').text('Inventario');
  b = 0;
  $('#M-left').animate({left:'-80%'},'show');
  localStorage.setItem("reload", 'inventario');
  var v = localStorage.getItem('reload');
  if (v == 'certifica') {
    certifica();
  }else{
    inventario();
  }
});

function certifica(){
  if (navigator.onLine) {
  var xmlhttp = new XMLHttpRequest();
  $('#Status').empty();
  $('#Status').append(`
  <div class="cd-status bg-primary">
    <i class="icon icon-ind"></i>
    <div class="txt-msj">
      Cargando. espere...
    </div>
  </div>`);
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cr = JSON.parse(this.responseText);
      localStorage.setItem("rcertifica", cr);
  	  //console.log(cr);
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
  }
  else{
    scroll();
    cr = localStorage.getItem('rcertifica');
    $('#Status').empty();
    $('#Status').append(`
    <div class="cd-status bg-primary">
      <i class="icon icon-ind"></i>
      <div class="txt-msj">
        Verifica tu conexión
      </div>
    </div>`);
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
}

function inventario(){
  if (navigator.onLine) {
  scrollinv();
  $('#Status').empty();
  $('#Status').append(`
  <div class="cd-status bg-primary">
    <i class="icon icon-ind"></i>
    <div class="txt-msj">
      Cargando. espere...
    </div>
  </div>`);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ins = JSON.parse(this.responseText);
  	  //console.log(ins);
  	  let inv = $("#Content");
      $("#Content").empty();
      if(ins == 0){
              inv.html();
              inv.append(`<div class="lista-inf">No hay resultados</div>`)
      }else{
              inv.html();
              ins.forEach(invent => {
                  inv.append(`

                          <tr class="list-b">
            							<td>
            							<div class="txt-mat">${invent.descripcion}</div>
            							<div class="st-m">${invent.stock}</div>
            							<div class="ce-fech">${invent.codigo}</div>
            							<td>
            						  	</tr>
                				`);
              });

            }
    }
  };
  xmlhttp.open("GET", "https://didigitales.tigersoftware.net.ve/inventario-lista", true);
  xmlhttp.send();

  }else{
    scroll();
    cr = localStorage.getItem('rcertifica');
    $('#Status').empty();
    $('#Status').append(`
    <div class="cd-status bg-primary">
      <i class="icon icon-ind"></i>
      <div class="txt-msj">
        Verifica tu conexión
      </div>
    </div>`);
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
}

var app = {
    initialize: function() {
       this.bindEvents();
    },
    // Enlazar los eventos que se requieren en el inicio.
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function(){
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        document.addEventListener("menubutton", onMenuKeyDown, false);
    },
    onDeviceReady: function(){
        checkConnection();
        welcome();

    }
};
app.initialize();
function onBackKeyDown() {
  var r = confirm("Desea salir de la aplicación");
  if (r == true) {
    navigator.app.exitApp();
  }
}
function onMenuKeyDown() {
  m = 0;
  $('#M-left').animate({left:'0%'},'show');
}

function scroll(){
    var x = '';
    var px = 700;
    var d = 1;
    var h = 25;
    var no = 1;
    $(window).scroll(function(event){
        var posi = $(window).scrollTop();
        if(posi >= px){
            px = px + 700;
            var desde = h * d;
            d = d + 1;
            var xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function(){
              if (this.readyState == 4 && this.status == 200) {
                var t2 = setTimeout(function(){
                  $('#Status').empty();
                },3000);
                cr = JSON.parse(this.responseText);
                localStorage.setItem("rcertifica", cr);
            	  console.log('cargando scroll: '+cr);
            	  let cer = $("#Content");
                if(cr == 0){
                        cer.html();
                        cer.append(`<div class="lista-inf">No hay resultados</div>`)
                }
                else{
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
            xmlhttp.open("GET", "https://didigitales.tigersoftware.net.ve/cert-m/"+desde, true);
            xmlhttp.send();
        }
    });
}
function scrollinv(){
    var x = '';
    var px = 700;
    var d = 1;
    var h = 25;
    var no = 1;
    $(window).scroll(function(event){
        var posi = $(window).scrollTop();
        if(posi >= px){
            px = px + 700;
            var desde = h * d;
            d = d + 1;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
              if (this.readyState == 4 && this.status == 200) {
                var t2 = setTimeout(function(){
                  $('#Status').empty();
                },3000);
                cr = JSON.parse(this.responseText);
                localStorage.setItem("rcertifica", cr);
            	  //console.log(cr);
            	  let cer = $("#Content");
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
            xmlhttp.open("GET", "https://didigitales.tigersoftware.net.ve/invent-m/"+desde, true);
            xmlhttp.send();
        }
    });
}
