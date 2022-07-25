/**Declaracion de objetos**/ 
let btnMenu = document.querySelector('.bnt-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

/** Asi se declara una clase, en este caso es un 
 * escuchador de mouse el cual se activara
 * cada que demos clic  **/
btnMenu.addEventListener('click', () => 
{
    /** Va a acceder a la parrte de span para que se cambie
     * a una X cada vez que se abre, para eso es la clase
     * .toggle **/
    document.querySelector('.bnt-menu i').classList.toggle('fa-times');

    /*Sera verdadero si clic en el menu
    de barras*/ 
    if(activador)
    {
        menu.style.left ="0";
        menu.style.transition="0.5s";

        activador=false;
    }
    else
    {   
        menu.style.left ="-100%";
        menu.style.transition="0.5s";


        activador=true;
    }

});

let enlaces = document.querySelectorAll('.lists li a');
    /** Bucle forEach **/

    /** sirve para recorer arreglos son varios elementos
     * almacenados en una variable, los lementos de list
     * son varios por ende es un arreglo de elementos**/

    enlaces.forEach( (element) => 
    {   

        element.addEventListener('clic', (event) =>{
            
            enlaces.forEach((link) =>{

                link.classList.remove('activo');

            });

            event.target.classList.add('activo');

        });

    });

    /** Efecto scroll **/
    //Devulve el valor de la ventana antes de mover el scroll
    let prevScrollPos = window.pageYOffset;
    let goTop = document.querySelector('.go-top');

    window.onscroll=()=>
    {
        /**
         * Al estar dentro del escuchar del scroll queremos que
         * nos devulva el valor de la ventana cuando ya se movio 
         * con el scroll la cual sera diferente cada vez que
         * se mueva
         */
        let currenScrollPos = window.pageYOffset;
        let goTop = document.querySelector('.go-top');
        //mostrar y ocultar menu
        if(prevScrollPos>currenScrollPos)
        {
            containerMenu.style.top="0";
            containerMenu.style.transition="0.5s";
        }
        else
        {
            containerMenu.style.top="-60px";
            containerMenu.style.transition="0.5s";
        }
        prevScrollPos=currenScrollPos;


        //Mostrar y ocultar scroll estilos

        let arriba = window.pageYOffset;

        if(arriba <= 600)
        {
            containerMenu.style.borderBottom= "none";
            goTop.style.right = "-100%";
        }
        else
        {
            containerMenu.style.borderBottom= "3px solid #ff2e63";
            goTop.style.right = "0";
            goTop.style.transition = "0.5s";
        }

    }

goTop.addEventListener('click', () =>
{
    //Esto es para safari de apple
    document.body.scrollTop = 0;
    //y para chrome y firefox es lo siguiente
    document.documentElement.scrollTop = 0;
});

let VerAbajo = document.querySelector('#abajo');
VerAbajo.addEventListener('click', () =>{
    //Esto es para safari de apple
    document.body.scrollTop = 600;
    //y para chrome y firefox es lo siguiente
    document.documentElement.scrollTop = 600;
});
  


