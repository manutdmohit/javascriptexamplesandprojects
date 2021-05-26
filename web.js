let a = document.links;
Array.from(a).forEach(function(element){
    if(element.href.includes("facebook")){
        console.log(element.href);
    }
    });