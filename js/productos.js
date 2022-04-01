/*
 DIAZ SERGIO
 */
 
 // Consola:
var c = console.log;
// localStorage:
c(localStorage);
// Document:
var d = document;
// Buscamos los elementos:
var aProductos = {
 Todos : [
		{
		nombre: 'Frank-Finnegans',
		precio: 2550,
		img : 'items/finnegans.jpg',
		descripcion:'Tercer álbum de Finnegans que cuenta con ocho canciones' ,
		codigodeproducto:'ff1920' ,
		},
		{	
		nombre: 'Campo-Malman',
		precio: 2800,
		img : 'items/malman campo.jpg',
		descripcion:'Primer album de Malman lanzado , mezclado y masterizado en Estudio Humano',
		codigodeproducto:'mc1123' ,
		},
		{
		nombre: 'Prevalecer-Valor Interior',
		precio: 2000,
		img : 'items/valor interior.jpg',
		descripcion:'Tercer album de Valor interior lanzado en 2013',
		codigodeproducto:'vip6450' ,
		},
		{	
		nombre: 'Uno-Afterlife',
		precio: 1800,
		img : 'items/afterlife.jpg',
		descripcion:'Primer album de Afterlife lanzado en 2017',
		codigodeproducto:'al1920' ,
		},
		{	
		nombre: 'Acido Argentino-Hermetica',
		precio: 2900,
		img : 'items/acido argentino.jpg',
		descripcion:'Segundo album de Hemetica lanzado en 1991',
		codigodeproducto:'har4520' ,
		},
		{	
		nombre: 'Nada Personal-Soda Stereo',
		precio: 2400,
		img : 'items/nadapersonal.jpg',
		descripcion:'Segundo album de Soda Stereo lanzado en 1986',
		codigodeproducto:'np8320' ,
		},
		{
		nombre: 'All we now is falling-Paramore',
		precio: 2100,
		img : 'items/all we know is falling.jpg',
		descripcion:'Album debut de Paramore lanzado en 2005' ,
		codigodeproducto:'awnisf1220' ,
		},
		{	
		nombre: 'Follow the Leader-Korn',
		precio: 2800,
		img : 'items/freakontheleash.jpg',
		descripcion:'Tercer album de Korn lanzado en 1998',
		codigodeproducto:'ftl1330' ,
		},
		{	
		nombre: 'The End-Black Sabbatth',
		precio: 3100,
		img : 'items/theend.jpg',
		descripcion:'Ultimo ep devenido en Vinilo de Black Sabbatth lanzado en 2013',
		codigodeproducto:'te3480' ,
		},
		{	
		nombre: 'Linkin Park-Linkin Park',
		precio: 2850,
		img : 'items/linkinpark.jpg',
		descripcion:'Primer album de linkin park lanzado en 1998 ',
		codigodeproducto:'lp6550' ,
		},
		{	
		nombre: 'One Night in Buenos Aires-Megadeth',
		precio: 3500,
		img : 'items/megadethbsas.jpg',
		descripcion:'Es un dvd reversionado a Vinilo lanzado en 2007',
		categoria:'Todos' ,
		codigodeproducto:'onib4143' ,
		},
		{	
		nombre: 'Dystopia-Megadeth',
		precio: 3000,
		img : 'items/megadethdystopia.jpg',
		descripcion:'Ultimo album de la banda lanzado en 2016',
		codigodeproducto:'d34211' ,
		},
		{
		nombre: 'Encordado Ernie Ball',
		precio: 1600,
		img : 'items/encordadoernieball.jpg',
		descripcion:'Cuerdas Eléctrica Ernie Ball por Targuet Music S.A ' ,
		codigodeproducto:'eeb0324' ,
		},
		{	
		nombre: 'Caja de puas',
		precio: 3100,
		img : 'items/cajapuas.jpg',
		descripcion:'Caja Stagg PBOX181 con 100 púas Tamaño 81',
		codigodeproducto:'cdp14124' ,
		},
		{	nombre: 'Encordado Ernie',
		precio: 1900,
		img : 'items/encordadoernie.jpg',
		descripcion:'Cuerdas para guitarra eléctrica Ernie Ball Nickel Wound hechas a base de alambre con acero niquelado',
		codigodeproducto:'ee43920' ,
		},
		{	nombre: 'Cuerdas campana export',
		precio: 900,
		img : 'items/campexport.jpg',
		descripcion:'6 Cuerdas plateadas de excelente Calidad por Industria Argentina',
		codigodeproducto:'c31920' ,
		},
		{	nombre: 'Cuerdas regular sinky',
		precio: 2650,
		img : 'items/cuerdaregularsinky.jpg',
		descripcion:'Cuerdas ernie EB2221 regular Slinky 010-046',
		codigodeproducto:'crs142920' ,
		},
		{	nombre: 'Auricular Bluetooth',
		precio: 1550,
		img : 'items/auricularbluetooth.jpg',
		descripcion:'Auricular Inalámbrico Bluetooth Rojo con microfono, radio fm y sonido potente',
		codigodeproducto:'ab32133' ,
		}
	],
	Nacionales: [
		{
		nombre: 'Frank-Finnegans',
		precio: 2550,
		img : 'items/finnegans.jpg',
		descripcion:'Tercer álbum de Finnegans que cuenta con ocho canciones' ,
		codigodeproducto:'ff1920' ,
		},
		{	
		nombre: 'Campo-Malman',
		precio: 2800,
		img : 'items/malman campo.jpg',
		descripcion:'Primer album de Malman lanzado , mezclado y masterizado en Estudio Humano',
		codigodeproducto:'mc1123' ,
		},
		{
		nombre: 'Prevalecer-Valor Interior',
		precio: 2000,
		img : 'items/valor interior.jpg',
		descripcion:'Tercer album de Valor interior lanzado en 2013',
		codigodeproducto:'vip6450' ,
		},
		{	
		nombre: 'Uno-Afterlife',
		precio: 1800,
		img : 'items/afterlife.jpg',
		descripcion:'Primer album de Afterlife lanzado en 2017',
		codigodeproducto:'al1920' ,
		},
		{	
		nombre: 'Acido Argentino-Hermetica',
		precio: 2900,
		img : 'items/acido argentino.jpg',
		descripcion:'Segundo album de Hemetica lanzado en 1991',
		codigodeproducto:'har4520' ,
		},
		{	
		nombre: 'Nada Personal-Soda Stereo',
		precio: 2400,
		img : 'items/nadapersonal.jpg',
		descripcion:'Segundo album de Soda Stereo lanzado en 1986',
		codigodeproducto:'np8320' ,
		}
	],
	Internacionales: [
		{
		nombre: 'All we now is falling-Paramore',
		precio: 2100,
		img : 'items/all we know is falling.jpg',
		descripcion:'Album debut de Paramore lanzado en 2005' ,
		codigodeproducto:'awnisf1220' ,
		},
		{	
		nombre: 'Follow the Leader-Korn',
		precio: 2800,
		img : 'items/freakontheleash.jpg',
		descripcion:'Tercer album de Korn lanzado en 1998',
		codigodeproducto:'ftl1330' ,
		},
		{	
		nombre: 'The End-Black Sabbatth',
		precio: 3100,
		img : 'items/theend.jpg',
		descripcion:'Ultimo ep devenido en Vinilo de Black Sabbatth lanzado en 2013',
		codigodeproducto:'te3480' ,
		},
		{	
		nombre: 'Linkin Park-Linkin Park',
		precio: 2850,
		img : 'items/linkinpark.jpg',
		descripcion:'Primer album de linkin park lanzado en 1998 ',
		codigodeproducto:'lp6550' ,
		},
		{	
		nombre: 'One Night in Buenos Aires-Megadeth',
		precio: 3500,
		img : 'items/megadethbsas.jpg',
		descripcion:'Es un dvd reversionado a Vinilo lanzado en 2007',
		categoria:'Todos' ,
		codigodeproducto:'onib4143' ,
		},
		{	
		nombre: 'Dystopia-Megadeth',
		precio: 3000,
		img : 'items/megadethdystopia.jpg',
		descripcion:'Ultimo album de la banda lanzado en 2016',
		codigodeproducto:'d34211' ,
		}
	],
	Accesorios: [
		{
		nombre: 'Encordado Ernie Ball',
		precio: 1600,
		img : 'items/encordadoernieball.jpg',
		descripcion:'Cuerdas Eléctrica Ernie Ball por Targuet Music S.A ' ,
		codigodeproducto:'eeb0324' ,
		},
		{	
		nombre: 'Caja de puas',
		precio: 3100,
		img : 'items/cajapuas.jpg',
		descripcion:'Caja Stagg PBOX181 con 100 púas Tamaño 81',
		codigodeproducto:'cdp14124' ,
		},
		{	nombre: 'Encordado Ernie',
		precio: 1900,
		img : 'items/encordadoernie.jpg',
		descripcion:'Cuerdas para guitarra eléctrica Ernie Ball Nickel Wound hechas a base de alambre con acero niquelado',
		codigodeproducto:'ee43920' ,
		},
		{	nombre: 'Cuerdas campana export',
		precio: 900,
		img : 'items/campexport.jpg',
		descripcion:'6 Cuerdas plateadas de excelente Calidad por Industria Argentina',
		codigodeproducto:'c31920' ,
		},
		{	nombre: 'Cuerdas regular sinky',
		precio: 2650,
		img : 'items/cuerdaregularsinky.jpg',
		descripcion:'Cuerdas ernie EB2221 regular Slinky 010-046',
		codigodeproducto:'crs142920' ,
		},
		{	nombre: 'Auricular Bluetooth',
		precio: 1550,
		img : 'items/auricularbluetooth.jpg',
		descripcion:'Auricular Inalámbrico Bluetooth Rojo con microfono, radio fm y sonido potente',
		codigodeproducto:'ab32133' ,
		}
	],
};

var pp = d.getElementById('productos');

var verCarrito = d.querySelectorAll("header button")[0];



var tod = d.querySelector("#Todos");
var Nac = d.querySelector("#Nacionales");
var Int = d.querySelector("#Internacionales");
var acc = d.querySelector("#Accesorios");

var divC, img, div, h3, p, p2, acumulador = 0 ,span, btn1, btn2, carrito = [], productosCarrito = [], items = 0, total = 0;

var agregar = document.getElementsByClassName("btn btn-outline-secondary");

var align = "Todos";


for(var i = 0; i< aProductos.Todos.length;i++){


	divC = d.createElement('div');
	divC.className = 'col-  col-sm-4  col-md-4  col-lg-4  col-xl-4';
	divC.setAttribute('data-categoria', 'Todos');
	pp.appendChild(divC);
	
	img = d.createElement('img');
	img.className = 'img-fluid img-thumbnail';
	img.src = aProductos.Todos[i].img;
	img.alt = aProductos.Todos[i].nombre;
	divC.appendChild(img);
	
	h3 = d.createElement("h3");
	h3.innerHTML = aProductos.Todos[i].nombre;
	divC.appendChild(h3);
	
	p = d.createElement("p");
	p.innerHTML = "$" + aProductos.Todos[i].precio;
	divC.appendChild(p);
	
	p1 = d.createElement("p");
	p1.innerHTML = aProductos.Todos[i].descripcion;
	divC.appendChild(p1);
	
	btn1=d.createElement("button");
	btn1.className ="btn btn-outline-secondary";
	btn1.innerHTML = 'Agregar Carrito';
	btn1.style.width = '100%';
	btn1.id = i;
	divC.appendChild(btn1);
	
	ImgAmpliar();
	agregarProducto(agregar, align);
}

function agregarProducto(agregar, categoria){
	for(var i = 0; i < agregar.length; i++){
	
		agregar[i].onclick = function() {
			
			var cont = d.getElementsByTagName('span');
			//console.log(cont);
			items++;
			
			var posicion = this.id;
			
			total =  total + aProductos[categoria][posicion].precio;
			
			

			
	
			cont[0].innerHTML = items;
			cont[1].innerHTML = "$" + total;
			
          
           
		   
            productosCarrito.push(posicion);
            
			acumulador +=aProductos[categoria][2].precio;
		}
	}
}


function ImgAmpliar(){

var aImg = d.getElementsByClassName('img-fluid img-thumbnail');

for (var i = 0; i < aImg.length; i++) {
	aImg[i].onclick = function(){
		var id = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.id;
		let cat = this.parentElement.dataset.categoria;
		Ampliar(this, id, cat);
	}
}
}



function Ampliar(imagen, id, categoria) {
	
	
	var div = d.createElement('div');
	div.className = 'modal-fade-show';
	div.id = 'modalProducto';	
	
	var div12 = d.createElement('div');
	div12.className = 'modal-dialog';
	
	var a = d.createElement('a');
	a.href = 'javascript:void(0)';
	a.innerHTML = 'X';
	a.className = 'close';
	a.onclick = function () {
		console.log(d.getElementById('modalProducto'));
		d.body.removeChild(d.getElementById('modalProducto'));
		return false;
	}

	var div1 = d.createElement('div');
	div1.className = 'modal-content';

	var div2 = d.createElement('div');
	div2.className = 'modal-body';

	var p2 = d.createElement('p2');
	
	
	
	
	
	
	
	var h3 = d.createElement('h3');
	h3.className = 'modal-title';
	
	var p = d.createElement('p');
	var p1 = d.createElement('p');
	var span = d.createElement('span');
	p.innerHTML = "$";
	p1.innerHTML = aProductos[categoria][id].descripcion;
	p2.innerHTML = 'Codigo del producto : ' + aProductos[categoria][id].codigodeproducto;
	h3.innerHTML = imagen.alt;
	
	span.innerHTML = aProductos[categoria][id].precio;

	var img = d.createElement('img');
	img.src = imagen.src;
	img.alt = imagen.alt;
	img.className = 'img-fluid img-thumbnail';
	img.className = 'rounded mx-auto d-block';
	img.style.width = '55%';
	
	d.body.appendChild(div);
	div.appendChild(div12);
	div12.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(a);
	div2.appendChild(img);
	div2.appendChild(h3);
	div2.appendChild(p);
	p.appendChild(span);
	div2.appendChild(p1);
	div2.appendChild(p2);
	
}

verCarrito.addEventListener("click", function () {
    AmpliarCarrito();
})

tod.addEventListener("click", function () {
    
	
		align = this.id;
		c(align);

	var pp = document.getElementById("productos");
	AmpliarBanner();
	
	while (pp.firstChild) {
	pp.removeChild(pp.firstChild);
	}
		
	
	for(var i = 0; i< aProductos.Todos.length;i++){
	
	
	divC = d.createElement('div');
	divC.className = 'col-  col-sm-4  col-md-4  col-lg-4  col-xl-4';
	divC.setAttribute('data-categoria', 'Todos');
	pp.appendChild(divC);
	
	img = d.createElement('img');
	img.className = 'img-fluid img-thumbnail';
	img.src = aProductos.Todos[i].img;
	img.alt = aProductos.Todos[i].nombre;
	divC.appendChild(img);
	
	h3 = d.createElement("h3");
	h3.innerHTML = aProductos.Todos[i].nombre;
	divC.appendChild(h3);
	
	p = d.createElement("p");
	p.innerHTML = "$" + aProductos.Todos[i].precio;
	divC.appendChild(p);
	
	p1 = d.createElement("p");
	p1.innerHTML = aProductos.Todos[i].descripcion;
	divC.appendChild(p1);
	
	btn1=d.createElement("button");
	btn1.className ="btn btn-outline-secondary";
	btn1.innerHTML = 'Agregar Carrito';
	btn1.style.width = '100%';
	btn1.id = i;
	divC.appendChild(btn1);
	ImgAmpliar();
	agregarProducto(agregar, align);

}
})
Nac.addEventListener("click", function () {
    
	  align = this.id;
	  c(align);

	var pp = document.getElementById("productos");
 
	AmpliarBanner();
	
	while (pp.firstChild) {
	pp.removeChild(pp.firstChild);
	}
		
	
	for(var i = 0; i< aProductos.Nacionales.length;i++){
	
	
	divC = d.createElement('div');
	divC.className = 'col-  col-sm-4  col-md-4  col-lg-4  col-xl-4';
	divC.setAttribute('data-categoria', 'Nacionales');
	pp.appendChild(divC);
	
	img = d.createElement('img');
	img.className = 'img-fluid img-thumbnail';
	img.src = aProductos.Nacionales[i].img;
	img.alt = aProductos.Nacionales[i].nombre;
	divC.appendChild(img);
	
	h3 = d.createElement("h3");
	h3.innerHTML = aProductos.Nacionales[i].nombre;
	divC.appendChild(h3);
	
	p = d.createElement("p");
	p.innerHTML = "$" + aProductos.Nacionales[i].precio;
	divC.appendChild(p);
	
	p1 = d.createElement("p");
	p1.innerHTML = aProductos.Nacionales[i].descripcion;
	divC.appendChild(p1);
	
	btn1=d.createElement("button");
	btn1.className ="btn btn-outline-secondary";
	btn1.innerHTML = 'Agregar Carrito';
	btn1.style.width = '100%';
	btn1.id = i;
	divC.appendChild(btn1);
	
	ImgAmpliar();
	agregarProducto(agregar, align);

}
})

Int.addEventListener("click", function () {
    align = this.id;
		c(align);
	var pp = document.getElementById("productos");
 
	AmpliarBanner();
	
	while (pp.firstChild) {
	pp.removeChild(pp.firstChild);
	}
	
	for(var i = 0; i< aProductos.Internacionales.length;i++){
	
	
	divC = d.createElement('div');
	divC.className = 'col-  col-sm-4  col-md-4  col-lg-4  col-xl-4';
	divC.setAttribute('data-categoria', 'Internacionales');
	pp.appendChild(divC);
	
	img = d.createElement('img');
	img.className = 'img-fluid img-thumbnail';
	img.src = aProductos.Internacionales[i].img;
	img.alt = aProductos.Internacionales[i].nombre;
	divC.appendChild(img);
	
	h3 = d.createElement("h3");
	h3.innerHTML = aProductos.Internacionales[i].nombre;
	divC.appendChild(h3);
	
	p = d.createElement("p");
	p.innerHTML = "$" + aProductos.Internacionales[i].precio;
	divC.appendChild(p);
	
	p1 = d.createElement("p");
	p1.innerHTML = aProductos.Internacionales[i].descripcion;
	divC.appendChild(p1);
	
	btn1=d.createElement("button");
	btn1.className ="btn btn-outline-secondary";
	btn1.innerHTML = 'Agregar Carrito';
	btn1.style.width = '100%';
	btn1.id = i;
	divC.appendChild(btn1);
	
	ImgAmpliar();
	agregarProducto(agregar, align);

}
})

acc.addEventListener("click", function () {
    align = this.id;
		c(align);
	var pp = document.getElementById("productos");
	
	AmpliarBanner();
	
	while (pp.firstChild) {
	pp.removeChild(pp.firstChild);
	}
	
	for(var i = 0; i< aProductos.Accesorios.length;i++){
	
	
	divC = d.createElement('div');
	divC.className = 'col-  col-sm-4  col-md-4  col-lg-4  col-xl-4';
	divC.setAttribute('data-categoria', 'Accesorios');
	pp.appendChild(divC);
	
	img = d.createElement('img');
	img.className = 'img-fluid img-thumbnail';
	img.src = aProductos.Accesorios[i].img;
	img.alt = aProductos.Accesorios[i].nombre;
	divC.appendChild(img);
	
	h3 = d.createElement("h3");
	h3.innerHTML = aProductos.Accesorios[i].nombre;
	divC.appendChild(h3);
	
	p = d.createElement("p");
	p.innerHTML = "$" + aProductos.Accesorios[i].precio;
	divC.appendChild(p);
	
	p1 = d.createElement("p");
	p1.innerHTML = aProductos.Accesorios[i].descripcion;
	divC.appendChild(p1);
	
	btn1=d.createElement("button");
	btn1.className ="btn btn-outline-secondary";
	btn1.innerHTML = 'Agregar Carrito';
	btn1.style.width = '100%';
	btn1.id = i;
	divC.appendChild(btn1);
	
	ImgAmpliar();
	agregarProducto(agregar, align);

}
})

var aInfo = d.getElementById('boton-informacion');
aInfo.onclick = AmpliarInfo;
function AmpliarInfo() {
	 
  
    var div = d.createElement('div');
    div.className = 'modal';
    div.id = 'modal2';
	div.tabIndex = '-1';
	div.role = 'dialog';
	div.ariaLabelledby = 'titulo_modal';
	div.ariaHidden = 'true';
  

    var div31 = d.createElement('div');
	div31.className = 'modal-dialog';
	div31.role = 'document';
	
	
    var div32 = d.createElement('div'); 
	div32.className = 'modal-content';
	

    var div33 = d.createElement('div'); 
	div33.className = 'modal-header';

	
    var h3 = d.createElement('h3');
	h3.className = 'modal-title';
	h3.innerHTML = 'El creador de disqueria nights';
	
	
	var a1 = d.createElement('a');
	a1.href = 'javascript:void(0)';
	a1.innerHTML = 'X';
	a1.className = 'close';
	a1.setAttribute("data-dismiss", "modal");
    a1.onclick = function () {
        d.body.removeChild(d.getElementById('modal2'));
        return false;
    }
	
    
    var div4 = d.createElement('div');
	div4.className = 'modal-body';
	

    var ul = d.createElement('ul');
	
	
    d.body.appendChild(div);
    div.appendChild(div31);
	div31.appendChild(div32);
	div32.appendChild(div33);
	div33.appendChild(h3);
    div33.appendChild(a1);
    div32.appendChild(div4);
    div4.appendChild(ul);
	
	

	var li1 = d.createElement('li');
	li1.innerHTML ='Carrera: Diseño web';

	var li2 = d.createElement('li');
	li2.innerHTML ='Materia: Interaccion con dispositivos moviles';

	var li3 = d.createElement('li');
	li3.innerHTML ='Comisión: 2A';

	var li4 = d.createElement('li');
	li4.innerHTML ='Carrera: Diseño web';

	var li5 = d.createElement('li');
	li5.innerHTML ='Turno: Mañana';

	var li6 = d.createElement('li');
	li6.innerHTML ='Año: 2019';

	var li7 = d.createElement('li');
	li7.innerHTML ='Cuatrimestre: 2(segundo)';

	var li8 = d.createElement('li');
	li8.innerHTML ='Docente: Omar Toyos';

	var li9 = d.createElement('li');
	li9.innerHTML ='Carácter de entrega: Final';

	var li10 = d.createElement('li');
	li10.innerHTML ='Diaz Sergio';
	
	
   	var figure = d.createElement('figure');
	
	var picture = d.createElement('picture');

	var img = d.createElement('img');
	img.src = "imagenes/fotosergio.jpg";
	img.alt = "Sergio Diaz";
	img.className="img-fluid figure-img"
	
	var figcaption = d.createElement('figcaption');
	figcaption.innerHTML ='Sergio Diaz';
	figcaption.style.textAlign ='center';
	
	
	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	ul.appendChild(li4);
	ul.appendChild(li5);
	ul.appendChild(li6);
	ul.appendChild(li7);
	ul.appendChild(li8);
	ul.appendChild(li9);
	ul.appendChild(li10);
	div4.appendChild(figure);
	figure.appendChild(img);
	figure.appendChild(figcaption);
}


var btn = document.getElementsByTagName("button")[0];

function AmpliarCheckout () {
	
    var form = d.createElement('form');
    form.className = 'modal-fade-show';
    form.id = 'frm';

    var div31 = d.createElement('div');
	div31.className = 'modal-dialog';

    var div32 = d.createElement('div'); 
	div32.className = 'modal-content';

    var div3 = d.createElement('div');
	div3.className = 'modal-body';

    var div4 = d.createElement('div');
	div4.className = 'form-group';
	
    var bot = d.createElement('button');
	bot.href = 'javascript:void(0)';
	bot.className = 'btn btn-outline-secondary';
	bot.style.width = '100%';
	bot.innerHTML = 'Cancelar';
    bot.onclick = function () {
        d.body.removeChild(d.getElementById('frm'));
        return false;
    }
	
	// Creo el div y le doy sus propiedades:
    var fieldset = d.createElement('fieldset');
	
	// Creo el div y le doy sus propiedades:
    var legend = d.createElement('legend');
	legend.innerHTML = 'Finalizar compra';
	
    var inputNombre = d.createElement('input');
    inputNombre.type = 'text';
    inputNombre.name = 'nombre';
	inputNombre.style.width = '100%';
    inputNombre.placeholder = 'Nombre';
    inputNombre.required = true;

    var inputEmail = d.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = 'email';
	inputEmail.style.width = '100%';
    inputEmail.placeholder = 'Email';
    inputEmail.required = true;

    var inputTel = d.createElement('input');
    inputTel.type = 'number';
    inputTel.name = 'Telefono';
	inputTel.style.width = '100%';
    inputTel.placeholder = 'Telefono';
    inputTel.required = true;
	
	
	var inputEnviar = d.createElement('input');
    inputEnviar.type = 'submit';
    inputEnviar.className = 'btn btn-outline-secondary';
	inputEnviar.style.width = '100%';
	inputEnviar.value = 'Confirmar Compra';
	
	var legend2 = d.createElement('legend');
    legend2.innerHTML ='Fecha de entrega';
	  
	var inputFecha = d.createElement('input');
    inputFecha.type = 'date';
    inputFecha.name = 'fecha';
    inputFecha.max = '2001-12-31';
    inputFecha.value = '1999-06-05';
	
    var legend1 = d.createElement('legend');
	legend1.innerHTML = 'Provincia y ciudad';
	
	var selProvincia = d.createElement('select');
    selProvincia.name = 'prov';
    selProvincia.placeholder = 'Provincia';
    selProvincia.required = true;
	
	var selCiudad = d.createElement('select');
    selCiudad.name = 'ciud';
    selCiudad.placeholder = 'Ciudad';
    selCiudad.required = true;
	

	var selectPago = d.createElement('select');
    selectPago.name = 'pago';
	selectPago.required = true;
	
	var ModPago = d.createElement('select');
    ModPago.name = 'modo';
	ModPago.required = true;
	
	
	var selectCuotas = d.createElement('select');
    selectCuotas.name = 'cuotas';
	
      var optionCuota1 = d.createElement('option');
      optionCuota1.innerHTML= '1 cuota de $' + total;
      optionCuota1.value= '1';
	  
      var optionCuotas3 = d.createElement('option');
      optionCuotas3.innerHTML= '3 cuotas de $' + Math.round(total/3);
      optionCuotas3.value= '3';
	  
      var optionCuotas6 = d.createElement('option');
      optionCuotas6.innerHTML= '6 cuotas de $' + Math.round(total/6);
      optionCuotas6.value= '6';
	  
      var optionCuotas9 = d.createElement('option');
      optionCuotas9.innerHTML= '9 cuotas de $' + Math.round(total/9);
      optionCuotas9.value= '9';
	  
      var optionCuotas12= d.createElement('option');
      optionCuotas12.innerHTML= '12 cuotas de $' + Math.round(total/12);
      optionCuotas12.value= '12';
	
	var optionCuotas18= d.createElement('option');
      optionCuotas18.innerHTML= '18 cuotas de $' + Math.round(total/18);
      optionCuotas18.value= '18';
	
	
	
	
	
	
// Provincias y Ciudades:
var aCiudades = {
	'Buenos Aires' : ['Adolfo Alsina','Adolfo Gonzales Chaves','Alberti','Almirante Brown','Arrecifes','Avellaneda','Ayacucho','Azul','Bahía Blanca','Balcarce','Baradero','Benito Juárez','Berazategui','Berisso','Bolívar','Bragado','Brandsen','Campana','Cañuelas','CABA','Capitán Sarmiento','Carlos Casares','Carlos Tejedor','Carmen de Areco','Castelli','Chacabuco','Chascomús','Chivilcoy','Colón','Coronel Dorrego','Coronel Pringles','Coronel Rosales','Coronel Suárez','Daireaux','Dolores','Ensenada','Escobar','Esteban Echeverría','Exaltación de la Cruz','Ezeiza','Florencio Varela','Florentino Ameghino','General Alvarado','General Alvear','General Arenales','General Belgrano','General Guido','General Lamadrid','General Las Heras','General Lavalle','General Madariaga','General Paz','General Pinto','General Pueyrredón','General Rodríguez','General San Martín','General Viamonte','General Villegas','Guaminí','Hipólito Yrigoyen','Hurlingham','Ituzaingó','José Clemente Paz','Junín','La Costa','La Matanza','La Plata','Lanús','Laprida','Las Flores','Leandro N. Alem','Lezama','Lincoln','Lobería','Lobos','Lomas de Zamora','Luján','Magdalena','Maipú','Malvinas Argentinas','Mar Chiquita','Marcos Paz','Mercedes','Merlo','Monte','Monte Hermoso','Moreno','Morón','Navarro','Necochea','Nueve de Julio','Olavarría','Patagones','Pehuajó','Pellegrini','Pergamino','Pila','Pilar','Pinamar','Presidente Perón','Puan','Punta Indio','Quilmes','Ramallo','Rauch','Rivadavia','Rojas','Roque Pérez','Saavedra','Saladillo','Salliqueló','Salto','San Andrés de Giles','San Antonio de Areco','San Cayetano','San Fernando','San Isidro','San Miguel','San Nicolás de los Arroyos','San Pedro','San Vicente','Suipacha','Tandil','Tapalqué','Tigre','Tordillo','Tornquist','Trenque Lauquen','Tres Arroyos','Tres de Febrero','Tres Lomas','Veinticinco de Mayo','Vicente López','Villa Gesell','Villarino','Zárate'],
	'Catamarca' : ['Ambato', 'Ancasti', 'Andalgalá', 'Antofagasta de la Sierra.', ' Belén', ' Capayán', ' Capital','El Alto','Fray Mamerto Esquiú',' Paclín','Capayán','Pomán','Santa María','Santa Rosa',' Tinogasta','Valle Viejo'],
	'Chaco' : ['Almirante Brown', 'Bermejo', 'Chacabuco', 'Comandante Fernández', 'Doce de Octubre', 'Dos de Abril', 'Fray Justo Santa María de Oro', 'General Belgrano', 'General Donovan', 'General Güemes', 'Independencia', 'Libertad', 'Libertador General San Martín', 'Maipú', ' Mayor Fontana', 'Nueve de Julio', 'O’Higgins', ' Presidencia de la Plaza', 'Primero de Mayo', 'Quitilipi', 'San Fernando', 'San Lorenzo', 'Sargento Cabral', 'Tapenagá', ' Veinticinco de Mayo'],
	'Chubut' : ['Biedma', 'Cushamen', 'Escalante', 'Florentino Ameghino', 'Futaleufú', 'Gaiman', 'Gastre', 'Mártires', 'Paso de Indios', 'Rawson', 'Río Senguer', 'Sarmiento', 'Tehuelches','Telsen'],
	'Córdoba' : ['Calamuchita', 'Capital', 'Colón', 'Cruz del Eje', 'General Roca','General San Martín', 'Punilla', 'Río Cuarto', 'Río Primero', 'Río Seco', 'Presidente Roque Sáenz Peña', 'Río Segundo', 'San Alberto', 'San Javier', 'San Justo', 'Santa María', 'Sobremonte', 'Tercero Arriba', 'Totoral', 'Tulumba', ' Unión'],
	'Corrientes' : ['Capital', 'Bella Vista', 'Berón de Astrada', 'Concepción','Curuzú Cuatiá', 'Empedrado', 'Esquina', 'General Alvear', 'General Paz', 'Goya', 'Itatí', 'Lavalle', 'Mburucuyá', 'Mercedes', 'Monte Caseros', 'Paso de los Libres', 'Saladas', ' San Cosme', 'San Luis del Palmar', 'San Martín', 'San Miguel', 'San Roque', 'Santo Tomé', 'Sauce'],
	'Formosa' : ['Bermejo','Formosa','Laishí','Matacos','Patiño', 'Pilagás','Pilcomayo','Pirané','Ramón Lista'],
	'Jujuy' : ['Cochinoca','Doctor Manuel Belgrano','El Carmen','Humahuaca','Ledesma','Palpalá','Rinconada','San Antonio','San Pedro','Santa Bárbara','Santa Catalina','Susques','Tilcara','Tumbaya','Valle Grande','Yavi'],
	'La Pampa' : ['Atreucó','Caleu Caleu' ,'Capital','Catriló','Chalileo','Chapaleufú','Chical Co','Conhelo','Curacó','Guatraché','Hucal','Lihuel Calel','Limay Mahuida','Loventué','Maracó','Puelén','Quemú Quemú','Rancul','Realicó','Toay','Trenel','Utracán'],
	'La Rioja' : ['Arauco','Capital','Castro Barros','Chamical','Chilecito','Coronel Felipe Varela','Famatina','General Ángel Vicente Peñaloza','General Belgrano','General Juan Facundo Quiroga','General Lamadrid','General Ocampo','General San Martín','Independencia','Rosario Vera Peñaloza','San Blas de los Sauces','Sanagasta','Vinchina'],
	'Mendoza' : ['Capital','General Alvear','General San Martín','Godoy Cruz','Guaymallén','Junín','La Paz','Las Heras','Lavalle','Luján de Cuyo','Maipú','Malargüe','Rivadavia','San Carlos','San Rafael','Santa Rosa','Tunuyán','Tupungato'],
	'Misiones' : ['25 de Mayo','Apóstoles','Cainguás','Candelaria','Capital','Concepción','Eldorado','General Manuel Belgrano','Guaraní','Iguazú','Leandro N. Alem','Libertador General San Martín','Montecarlo','Oberá','San Ignacio','San Javier','San Pedro'],
	'Neuquén' : ['Aluminé','Añelo','Catan Lil','Chos Malal','Collón Curá','Confluencia','Huiliches','Lácar','Loncopué','Los Lagos','Minas','Ñorquín','Pehuenches','Picún Leufú'],
	'Río Negro' : ['25 de Mayo','9 de Julio','Adolfo Alsina','Avellaneda','Bariloche','Conesa','El Cuy','General Roca','Ñorquincó','Pichi Mahuida','Pilcaniyeu','San Antonio','Valcheta'],
	'Salta' : ['Angastaco', 'Cabra Corral', 'Cachi', 'Cafayate', 'Campo Quijano', 'Cerrillos', 'Chicoana', 'Coronel Moldes', 'Embarcacion', 'General Guemes', 'General Mosconi', 'Iruya', 'Joaquin V. Gonzalez', 'La Caldera', 'La Poma', 'Molinos', 'Oran', 'Rosario de la Frontera', 'Salta Capital', 'Salta Capital', 'S. Antonio de los Cobres', 'San Carlos', 'San Jose de Metan', 'Santa Rosa', 'Seclantas', 'Tartagal', 'Tolar Grande', ' Vaqueros', ' Villa San Lorenzo'],
	'San Juan' : ['9 de Julio','Angaco','Calingasta','Capital','Caucete','Chimbas','Iglesia','Jáchal','Pocito','Rawson','San Martín','Santa Lucía','Sarmiento','Ullum','Valle Fértil','Zonda'],
	'Santa Cruz' : ['Corpen Aike','Deseado','Güer Aike','Lago Argentino','Lago Buenos Aires','Magallanes','Río Chico'],
	'Santa Fe' : ['9 de Julio','Belgrano','Caseros','Castellanos','Constitución','Garay','General López','General Obligado','Iriondo','La Capital','Las Colonias','Rosario','San Cristóbal','San Javier','San Jerónimo','San Justo','San Lorenzo','San Martín', 'Vera'],
	'San Luis' : ['Ayacucho','Belgrano','Chacabuco','Coronel Pringles','General Pedernera','Gobernador Dupuy','Juan Martín de Pueyrredón','Junín','Libertador General San Martín'],
	'Santiago del Estero' : ['Capital','Aguirre','Alberdi','Atamisqui','Avellaneda','Banda','Belgrano','Choya','Copo','Figueroa','General Taboada','Guasayán','Jiménez','Juan Felipe Ibarra','Loreto','Mitre','Moreno','Ojo de Agua','Pellegrini','Quebrachos','Río Hondo','Rivadavia','Robles','Salavina','San Martín','Sarmiento','Silípica'],
	'Tierra del Fuego' : ['Río Grande','Tolhuin','Ushuaia','Antártida Argentina','Islas del Atlántico Sur'],
	'Entre Rios' : ['Colón','Concordia','Diamante','Federación' ,'Federal','Feliciano','Gualeguay','Gualeguaychú','Islas del Ibicuy','La Paz','Nogoyá','Paraná','San Salvador','Tala','Uruguay','Victoria'],
	'Tucumán' : ['Burruyacú','Capital','Chicligasta','Cruz Alta','Famaillá','Graneros','Juan Bautista Alberdi','La Cocha','Leales','Lules','Monteros','Río Chico','Simoca','Tafí del Valle','Tafí Viejo','Trancas','Yerba Buena']
};

var o;

var frm = d.querySelector('#form');

inputNombre.onblur = function () {
	if (this.value.length < 3) {
		this.setCustomValidity('Debe tener 3 caracteres como mínimo');
	} else {
		this.setCustomValidity('');
	}
}

inputTel.onblur = function () {
	if (this.value.length < 10) {
		this.setCustomValidity('Ingrese los 10 numeros solicitados');
	} else {
		this.setCustomValidity('');
	}
}


for (var prov in aCiudades) {
	o = d.createElement('option');
	o.value = prov;
	o.innerHTML = prov;
	selProvincia.appendChild(o);
}

Ciud('Buenos Aires');

selProvincia.onchange = function () {
	Ciud(this.value);
}

function Ciud(prov) {
	selCiudad.innerHTML = '';
	for (var i = 0; i < aCiudades[prov].length; i++) {
		o = d.createElement('option');
		o.value = aCiudades[prov][i];
		o.innerHTML = aCiudades[prov][i];
		selCiudad.appendChild(o);
	}
}

var aPagos = {
	'Debito' : ['Diners Club','American Express','Visa','Brubank','Naranja','Mastercard','SíCard'],
	'Credito' : ['Diners Club','American Express','Visa','Naranja','Mastercard','SíCard'],
	'Otros' : ['Paypal','Bitcoin','Transferencia bancaria']
};


for (var pago in aPagos) {
	o = d.createElement('option');
	o.value = pago;
	o.innerHTML = pago;
	selectPago.appendChild(o);
}

Modo('Debito');

selectPago.onchange = function () {
	Modo(this.value);
}

function Modo(pago) {
	ModPago.innerHTML = '';
	for (var i = 0; i < aPagos[pago].length; i++) {
		o = d.createElement('option');
		o.value = aPagos[pago][i];
		o.innerHTML = aPagos[pago][i];
		ModPago.appendChild(o);
	}
}

    d.body.appendChild(form);
	form.appendChild(div31);
	div31.appendChild(div32);
    div32.appendChild(div3);
    div3.appendChild(div4);
	div3.appendChild(bot);
	div4.appendChild(fieldset);
	fieldset.appendChild(legend);
	fieldset.appendChild(inputNombre);
	fieldset.appendChild(inputEmail);
	fieldset.appendChild(inputTel);
	fieldset.appendChild(legend1);
	fieldset.appendChild(selProvincia);
	fieldset.appendChild(selCiudad);
	fieldset.appendChild(selectPago);
	fieldset.appendChild(ModPago);
	fieldset.appendChild(selectCuotas);
	selectCuotas.appendChild(optionCuota1);
	selectCuotas.appendChild(optionCuotas3);
	selectCuotas.appendChild(optionCuotas6);
	selectCuotas.appendChild(optionCuotas9);
	selectCuotas.appendChild(optionCuotas12);
	selectCuotas.appendChild(optionCuotas18);
	fieldset.appendChild(legend2);
	legend2.appendChild(inputFecha);
	div3.appendChild(inputEnviar);
	
}




function Vaciar () {
	
	var cont = d.getElementsByTagName('span');
	localStorage.clear('cont');
	
	var listaUl = document.getElementById("lista");
 
	c(listaUl.childNodes);
	
	while (listaUl.firstChild) {
	listaUl.removeChild(listaUl.firstChild);
	}

	productosCarrito.splice(0);
	
	
	items = 0;
    total = 0;
	
	cont[0].innerHTML = items;
    cont[1].innerHTML = total;

	c(localStorage);
	
	return false;
}

function Quitar () {
	
	c("Valor span: " + this.parentNode.getElementsByTagName('span')[0].innerHTML);

	var precioProducto = this.parentNode.getElementsByTagName('span')[0].innerHTML;
	c("precioProducto: " + precioProducto);
	//Precio filtrado sin simbolo pesos
	precioProducto = parseInt(precioProducto.replace("$",''));
	c("precioProducto filtrado y parseado: " + precioProducto);
	total = total - precioProducto;

	var cont = d.getElementsByTagName('span');
	// c(cont);
	items--;
	
	localStorage.removeItem('span');
	c(localStorage);
	var posicion = this.id;
	
	
	cont[0].innerHTML = items;
	cont[1].innerHTML = "$" + total;

	
	productosCarrito.splice(-2, 1);
	
	
	this.parentNode.parentNode.removeChild(this.parentNode);
	return false;
}


function AmpliarCarrito() {

    
    var div = d.createElement('div');
    div.className = 'modal-fade-show';
    div.id = 'modalCarrito';
   
    var a1 = d.createElement('a');
	a1.href = 'javascript:void(0)';
	a1.innerHTML = 'X';
	a1.className = 'close';
    a1.onclick = function () {
        d.body.removeChild(d.getElementById('modalCarrito'));
        return false;
    }
	

    var div31 = d.createElement('div');
	div31.className = 'modal-dialog';
	
    var div32 = d.createElement('div'); 
	div32.className = 'modal-content';
	
    var div3 = d.createElement('div');
	div3.className = 'modal-body';
    
    var div4 = d.createElement('div');
	div4.className = 'container-fluid';
   
    var ul = d.createElement('ul');
	ul.id  = 'lista';
	

    d.body.appendChild(div);
    div.appendChild(div31);
	div31.appendChild(div32);
	div32.appendChild(div3);
    div3.appendChild(a1);
    div3.appendChild(div4);
    div4.appendChild(ul);


    
    for (var i = 0; i < productosCarrito.length; i++) {
        var posicion = productosCarrito[i];
        var prod = aProductos[align][posicion];
        
    
        var li = d.createElement('li');
        li.innerText = prod.nombre ;
	
        var span = d.createElement('span');
		span.innerText = "$" + prod.precio ;
	
        var a2 = d.createElement('a');
        a2.href = 'javascript:void(0)';
        a2.innerHTML = 'Quitar';
		a2.onclick = Quitar;
		

	
        ul.appendChild(li);
        li.appendChild(span);
        li.appendChild(a2);
        

    }

		var btn2 = d.createElement('button');
        btn2.href = 'javascript:void(0)';
        btn2.innerHTML = 'Vaciar Carrito';
		btn2.className = 'btn btn-outline-secondary';
		btn2.style.width = '100%';
        btn2.onclick = Vaciar;
		div4.appendChild(btn2);
		
		var btnC = d.createElement('button');
        btnC.href = 'javascript:void(0)';
        btnC.innerHTML = 'Continuar compra';
		btnC.className = 'btn btn-outline-secondary';
		btnC.style.width = '100%';
        btnC.onclick = AmpliarCheckout;
		div4.appendChild(btnC);
	
	
		
}

var tiempo;	


function AmpliarBanner() {

	
	var div = d.createElement('div');
	div.className = 'modal-fade-show';
	div.id = 'modalBanner';	
	
	var div12 = d.createElement('div');
	div12.className = 'modal-dialog';
	
	
	var a = d.createElement('a');
	a.href = 'javascript:void(0)';
	a.innerHTML = 'X';
	a.className = 'close';
	a.onclick = cerrar;

	
	var div1 = d.createElement('div');
	div1.className = 'modal-content';
	
	var div2 = d.createElement('div');
	div2.className = 'modal-body';
	
	var img = d.createElement('img');
	img.src = 'img/banner' + Math.round(Math.random()) + '.jpg';
	img.style.width = '100%';
	img.alt = 'banner';

	
	d.body.appendChild(div);
	div.appendChild(div12);
	div12.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(a);
	div2.appendChild(img);
	
	tiempo = setTimeout(cerrar, 10000);
	
}
function cerrar(){
clearTimeout(tiempo);
d.body.removeChild(d.getElementById('modalBanner'));
}


