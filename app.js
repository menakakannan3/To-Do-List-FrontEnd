//close button
var lisst = document.getElementsByTagName('LI');
var i; //function
for(i=0; i<lisst.length;i++){ //++(increment adds 1)
    var span = document.createElement("SPAN"); //createElement() to create a new HTML element span is used to do something The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.
    var txt = document.createTextNode(" \u00D7");
    span.className="close"; //used to style in css
    span.appendChild(txt);
    lisst[i].appendChild(span);//appendchild used to append somting at the end of the list 

}
//close button activation 
var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++){
    close[i].onclick = function(){// on clicking this the function is run 
        var div = this.parentElement; //this is global object
        div.style.display="none"
    }
}

//add a checked button
var list = document.querySelector('ul');
list.addEventListener('click',function(ok){// onclicking the lists its checked
    if (ok.target.tagName ==='LI'){
      ok.target.classList.toggle('checked');// checked on css class 
    }
}, false)

// creating a new list button when clicking on add button
function newElement(){
    var li = document.createElement('li');// creating a li
    let inputValue = document.getElementById("myinput").value;// getting a element by id 
    var qu = document.createTextNode(inputValue);// creating a text as li if <P> then its creating a text as <P>
    li.appendChild(qu); // appending li as text mode as (qu)
    
    if(inputValue === ''){
        alert("you must write something..!");// if the input is empty then we are alerting else we are appending in li 
    }else{
        document.getElementById("myul").appendChild(li);
        
    }
    document.getElementById("myinput").value="";

    var span = document.createElement("SPAN");//The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.
    var txt = document.createTextNode("\u00D7");// creating a close button to ew list
    span.className="close";//class name is close used to style
    span.appendChild(txt);//append to each list that newly aded
    li.appendChild(span);

    for (i=0; i< close.length; i++) {
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }

}

//local storage codingto be fully inserted in next commit 
//let getlocalstorage = localStorage.getItem("newtodo");//new 
//if(getlocalstorage == null ){
//    listArr =[];
//}else{
//    listArr=JSON.parse(getlocalstorage);
//}
//listArr.push(inputValue);
//localStorage.setItem("newtodo", JSON.stringify(listArr)); //new