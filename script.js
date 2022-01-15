var a = document.getElementById("parcourirvideo");

var d = document.getElementById("titrevideo");
function video1(){
    
    $.ajax({url:"Qyiana.php",success:function(result){
        document.getElementById("videoi").src = result;  
        
        d.innerHTML = 'HOW TO PLAY QIYANNA';
        
    }})
}
function video2(){
    $.ajax({url:"Yasuo.php",success:function(result){
        document.getElementById("videoi").src = result;  
        d.innerHTML = 'HOW TO PLAY Yasuo';
    }})
}
function video3(){
    $.ajax({url:"Darius.php",success:function(result){
        document.getElementById("videoi").src = result;  
        d.innerHTML = 'HOW TO PLAY DARIUS';
    }})
}
function video4(){
    $.ajax({url:"Talon.php",success:function(result){
        document.getElementById("videoi").src = result;  
        d.innerHTML = 'HOW TO PLAY TALON';
    }})
}
function video5(){
    $.ajax({url:"Thresh.php",success:function(result){
        document.getElementById("videoi").src = result;  
        d.innerHTML = 'HOW TO PLAY THRESH';
    }})
}


// a.childNodes[1].addEventListener("click",qyanna);
// a.childNodes[3].addEventListener("click",yasuo);
// a.childNodes[5].addEventListener("click",darius);
// a.childNodes[7].addEventListener("click",talon);
// a.childNodes[9].addEventListener("click",support);



// function qyanna(){
//     var c = document.getElementById("changevideo");
//     var d = document.getElementById("titrevideo");
//     c.innerHTML = '<a href="https://www.youtube.com/watch?v=1YgxTY4NxAw"><div class="imgBox"><iframe width="560" height="315" src="https://www.youtube.com/embed/EQOgrrmOAp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></a>';
//     d.innerHTML = 'HOW TO PLAY QIYANNA';
//     console.log("ok");
    
// }j

// function yasuo(){
//     var c = document.getElementById("changevideo");
//     c.innerHTML = '<a href="https://www.youtube.com/watch?v=1YgxTY4NxAw"><div class="imgBox"><iframe width="560" height="315" src="https://www.youtube.com/embed/Va1Q3ffWNPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></a>';
//     console.log("ok");
//     var d = document.getElementById("titrevideo");
//     d.innerHTML = 'HOW TO PLAY YASUO';
// }

// function darius(){
//     var c = document.getElementById("changevideo");
//     c.innerHTML = '<a href="https://www.youtube.com/watch?v=1YgxTY4NxAw"><div class="imgBox"><iframe width="560" height="315" src="https://www.youtube.com/embed/yPmsbibywcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></a>';
//     console.log("ok");
//     var d = document.getElementById("titrevideo");
//     d.innerHTML = 'HOW TO PLAY DARIUS';
// }

// function talon(){
//     var c = document.getElementById("changevideo");
//     c.innerHTML = '<a href="https://www.youtube.com/watch?v=1YgxTY4NxAw"><div class="imgBox"><iframe width="560" height="315" src="https://www.youtube.com/embed/MyiXB-egH2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></a>';
//     console.log("ok");
//     var d = document.getElementById("titrevideo");
//     d.innerHTML = 'HOW TO PLAY TALON';
// }

// function support(){
//     var c = document.getElementById("changevideo");
//     c.innerHTML = '<a href="https://www.youtube.com/watch?v=1YgxTY4NxAw"><div class="imgBox"><iframe width="560" height="315" src="https://www.youtube.com/embed/IpF5G47wTAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></a>';
//     console.log("ok");
//     var d = document.getElementById("titrevideo");
//     d.innerHTML = 'HOW TO PLAY TRESH';
// }
// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       document.getElementById("videoi").src = this.responseText;
//       console.log(this.responseText);
//       alert(this.responseText);
//       }
//     xhttp.open("GET", "ajax.php", true);
//     xhttp.send();
// }
