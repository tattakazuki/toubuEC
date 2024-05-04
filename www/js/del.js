window.addEventListener("load",function del(){
    const furnace = localStorage.getItem("A906");
    switch (furnace) {
    case "1号稼働＝2号休炉":
        hiddenStyle(2);
        break;
    case "2号稼働＝1号休炉":
        hiddenStyle(1);
        break;
    default:
        break;
    }
})

function hiddenStyle(i){
    const style = document.createElement("style");
    style.innerHTML = `.hidden${i} { display: none; }`;
    document.head.appendChild(style);
}

window.addEventListener("load", function load() {
  const A911 = localStorage.getItem("A911");
  const A912 = localStorage.getItem("A912");
  if (A911 === "続きから") {
    for (let i = 100; i <= 499; i++) {
      let id = "A" + i;
      let value = localStorage.getItem(id);

      btnlump(id, value);
    }
    localStorage.setItem("A911","データあり");
  } else if(A912 === "続きから") {
    for (let i = 500; i <= 899; i++) {
      let id = "A" + i;
      let value = localStorage.getItem(id);
      btnlump(id, value);
    }

    btnlump("A526s", localStorage.getItem("A526s"));
    btnlump("A526d", localStorage.getItem("A526d"));
    btnlump("A739s", localStorage.getItem("A739s"));
    btnlump("A739d", localStorage.getItem("A739d"));
    btnlump("A839s", localStorage.getItem("A839s"));
    btnlump("A839d", localStorage.getItem("A839d"));
    btnlump("A528s", localStorage.getItem("A528s"));
    btnlump("A528d", localStorage.getItem("A528d"));

    localStorage.setItem("A912","データあり");
  } else {

  }
});

function btnlump(id, value) {
    console.log(id);
    if(value === "良"){
        document.getElementById(id + "g").classList.add("goodactive");
    } else if(value === "否"){
        const element = document.getElementById(id + "b");
        if (element) {
            document.getElementById(id + "b").classList.add("badactive");
            document.getElementById(id + "b").innerText = "否";
        } else {
            document.getElementById(id).classList.add("badactive");
            document.getElementById(id).innerText = "否";
        }
    } else if(value === "停止中"){
        document.getElementById(id).classList.add("goodactive");
        document.getElementById(id).innerText = "停";
    } else if(!value){
        //空のkeyは飛ばす
    } else {
        //良でも否でもないなら数値が入っているはず
        //運転号機1or2の場合の分け
        if (id === "A731" || id === "A831" || id === "A742" || id === "A842") {
            switch(value){
                case "1":
                    document.getElementById(`${id}g`).classList.add("goodactive");
                    document.getElementById(`${id}sb`).classList.add("goodactive");
                break;
                case "2":
                    document.getElementById(`${id}b`).classList.add("goodactive");
                    document.getElementById(`${id}sg`).classList.add("goodactive");
                break;
            }
        } else if(id === "A723" || 
                  id === "A823" || 
                  id === "A728" || 
                  id === "A828" || 
                  id === "A520" || 
                  id === "A523" || 
                  id === "A740" || 
                  id === "A840" || 
                  id === "A561" || 
                  id === "A576" || 
                  id === "A582"
                  ){
                    console.log(id);
            switch(value){
                case "1":
                    document.getElementById(`${id}g`).classList.add("goodactive");
                break;
                case "2":
                    document.getElementById(`${id}b`).classList.add("goodactive");
                break;
            } 

        } else {
            //数値入力の場合
            console.log(id);
            document.getElementById(id).classList.add("goodactive");
            document.getElementById(id).innerText = "良";
            document.getElementById(`${id}span`).innerText = value;
        }
    }
}