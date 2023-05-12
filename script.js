const step1 = document.querySelector("#s1")
const step2 = document.querySelector("#s2")
const btn1 = document.querySelector(".step__button1")
document.querySelector("#s3").style.display = 'none';

function next(a, b){
    document.querySelector(`#s${a}`).remove();
    if (document.querySelector(`#s${b}`).style.display === 'none') {
        document.querySelector(`#s${b}`).style.display = 'block';}}

function nextClick(a, b){
    document.querySelector(`#s${a}a`).addEventListener('click', function(){
        document.querySelector(`#s${a}`).remove();
        if (document.querySelector(`#s${b}`).style.display === 'none') {
            console.log(b);
            document.querySelector(`#s${b}`).style.display = 'block';}});
    document.querySelector(`#s${a}b`).addEventListener('click', function(){
        document.querySelector(`#s${a}`).remove();
            if (document.querySelector(`#s${b}`).style.display === 'none') {
                console.log(b);
                document.querySelector(`#s${b}`).style.display = 'block';}});
        }

function excute(){
        document.querySelector(".step__field__input").addEventListener("input", function(){
            
            const enter = document.querySelector(".step__field__placeholder");
            const inv = document.querySelector("#invalid");
            const va = document.querySelector(".step__field__valid");
            var input= document.querySelector(".step__field__input").value;

            enter.style.display = 'none';
            if (input >=25 && input<85){
                if (inv.style.display === 'block'){
                    inv.style.display = 'none';
                }
                inv.innerHTML = "";
                va.style.display = 'block';
                age = "old";
                console.log("older");
                document.querySelector(".step__button_extra").addEventListener('click', function(){ 
                    next(8,10);});

            } else if (input <= 24 && input > 15){
                if (inv.style.display === 'block'){
                    inv.style.display = 'none';
                }
                va.style.display = 'block';
                inv.innerHTML = "";
                age = "young";
                document.querySelector(".step__button_extra").addEventListener('click', function(){ 
                    next(8,10);
                });

            } else if(input <15 && input>10){
                va.style.display = 'none';
                const age = "invalid";
                var invalid = "Sorry, You Are Not Eligible";
                inv.innerHTML = invalid;
                
                            }

            else if(input >85 || input<10){
                va.style.display = 'none';
                const age = "invalid";
                var invalid = "Please Enter A Valid Age";
                inv.innerHTML = invalid;
                console.log(invalid);
            } 
             else{
                va.style.display = 'none';
                const age = "invalid";
                var invalid = "Please Enter A Valid Age";
                inv.innerHTML = invalid;

                console.log(invalid);}
});
}

function onClick(){
    document.querySelector(".step__buttonL").addEventListener('click', function(e){ 
        if (age =="young"){
            window.open('http://example.com/', '_blank', '');
            window.location.href = 'https://example.com/page2';
        } else {
            window.open('https://www.cars.com', '_blank');
        }});
}

function up(){
    document.querySelector("#15").style="transform: translateY(0px);";
}

btn1.addEventListener('click', function(){

    step1.remove();
    if (step2.style.display === 'none') {
        step2.style.display = 'block';
        function hide(){
        next(2, 3);
        nextClick(3,4);
        nextClick(4,5);
        nextClick(5,8);
        excute();
        document.querySelector("#s10a").addEventListener('click', function(){
                if (document.querySelector("#s15").style.display === 'none') {
                    document.querySelector("#s15").style="background: url() top left no-repeat #000000e5; background-size: cover !important; bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 200;";


                
                }});
                    
        document.querySelector("#s10b").addEventListener('click', function(){
                if (document.querySelector("#s15").style.display === 'none') {
                    document.querySelector("#s15").style="background: url() top left no-repeat #000000e5; background-size: cover !important; bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 200;";
                    document.querySelector("footer").style.display === 'none;';


                
                }});

               
        onClick();
    }
        setTimeout(hide, 3500);}
       }
    );