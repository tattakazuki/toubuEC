window.addEventListener("load",function yesterday(){
    var A526s = localStorage.getItem("A526");
    var A739s = localStorage.getItem("A739");
    var A839s = localStorage.getItem("A839");
    var A528s = localStorage.getItem("A528");

    if(A526s){
        document.getElementById("A526s" + "span").innerText = A526s;
        document.getElementById("A526s" + "input").value = A526s;
        document.getElementById("A739s" + "span").innerText = A739s;
        document.getElementById("A739s" + "input").value = A739s;
        document.getElementById("A839s" + "span").innerText = A839s;
        document.getElementById("A839s" + "input").value = A839s;
        document.getElementById("A528s" + "span").innerText = A528s;
        document.getElementById("A528s" + "input").value = A528s;
        //localストレージに保存しているわけではなく、あくまで初期値として取得している
    } 
});