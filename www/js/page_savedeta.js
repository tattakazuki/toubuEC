function goodSaveDeta(obj) {
    const key = obj.value;//対応する点検項目の値（idの数字を値としている）をkeyに設定
    const key2 = key + "e";//上記と同じ項目のエラーコメントについて、このあと消去するためkey2に取得しておく
    const good = obj.id;//良ボタンにはidの数字にgがついているため、変数で取得しておく
    const bad = good.replace("g","b");//1文字目を変換することで否ボタンも変数で取得する
    localStorage.setItem(key,"良");//良を保存
    document.getElementById(good).classList.add("goodactive");//ボタンの色切替（良点灯）
    document.getElementById(bad).classList.remove("badactive");//ボタンの色切替（否消灯）
    document.getElementById(good).innerText = "良";
    localStorage.removeItem(key2);//否→良に切替のため、エラーコメント消去
}

function badSaveDeta(obj) {
    const key = obj.value;
    const key2 = key + "e";
    const bad = obj.id;
    const good = bad.replace("b","g");//1文字目を変換;
    localStorage.setItem(key,"否");
    document.getElementById(bad).classList.add("badactive");
    document.getElementById(good).classList.remove("goodactive");
    let errorcomment = localStorage.getItem(key2);

    if(errorcomment === null){
        errorcomment = prompt("異常の内容を入力してください","");
    }else{
        errorcomment = prompt("異常の内容を入力してください",errorcomment);
    }

    if(errorcomment){
        localStorage.setItem(key2,errorcomment);
    }else{
        localStorage.removeItem(key2,errorcomment);
    }
}

function toggle1(obj) {
    const key = obj.value;//対応する点検項目の値（idの数字を値としている）をkeyに設定
    const good = obj.id;//良ボタンにはidの数字にgがついているため、変数で取得しておく
    const bad = good.replace("g","b");//1文字目を変換することで否ボタンも変数で取得する
    localStorage.setItem(key,"1");//良を保存
    document.getElementById(good).classList.add("goodactive");//ボタンの色切替（良点灯）
    document.getElementById(bad).classList.remove("goodactive");//ボタンの色切替（否消灯）
}

function toggle2(obj) {
    const key = obj.value;
    const bad = obj.id;
    const good = bad.replace("b","g");//1文字目を変換;
    localStorage.setItem(key,"2");
    document.getElementById(bad).classList.add("goodactive");
    document.getElementById(good).classList.remove("goodactive");
}

//運転機・停止機同時に
function toggle3(obj) {
    const key = obj.value;//対応する点検項目の値（idの数字を値としている）をkeyに設定
    const key2 = key + "s";
    localStorage.setItem(key,"1");
    localStorage.setItem(key2,"2");
    document.getElementById(`${key}g`).classList.add("goodactive");//ボタンの色切替（良点灯）
    document.getElementById(`${key}sb`).classList.add("goodactive");//ボタンの色切替（良点灯）
    document.getElementById(`${key}b`).classList.remove("goodactive");//ボタンの色切替（否消灯）
    document.getElementById(`${key}sg`).classList.remove("goodactive");//ボタンの色切替（否消灯）
}

function toggle4(obj) {
    const key = obj.value;
    const key2 = key + "s";
    localStorage.setItem(key,"2");
    localStorage.setItem(key2,"1");
    document.getElementById(`${key}b`).classList.add("goodactive");
    document.getElementById(`${key}sg`).classList.add("goodactive");
    document.getElementById(`${key}g`).classList.remove("goodactive");
    document.getElementById(`${key}sb`).classList.remove("goodactive");
}

function difference(obj){
    const inputId = obj.id;
    const tId = inputId.replace("d","")
    const yId = inputId.replace("d","s")
    const tValue = localStorage.getItem(tId);
    const yValue = localStorage.getItem(yId);
    const difference = yValue - tValue;

    if(difference > 0 && difference <= 15){
        document.getElementById(inputId).classList.remove("badactive");
        document.getElementById(inputId).classList.add("goodactive");
        document.getElementById(inputId).innerText = "良";
        document.getElementById(inputId + "span").innerText = difference;
        localStorage.setItem(inputId, difference);
    } else {
        document.getElementById(inputId).classList.remove("goodactive");
        document.getElementById(inputId).classList.add("badactive");
        document.getElementById(inputId).innerText = "否";
        window.alert("error");
        localStorage.setItem(inputId, "否");
        document.getElementById(inputId + "span").innerText = "";
    }
}

function coolStop(){
    document.getElementById("A129").classList.remove("badactive");
    document.getElementById("A130").classList.remove("badactive");
    document.getElementById("A144").classList.remove("badactive");
    document.getElementById("A129").classList.add("goodactive");
    document.getElementById("A130").classList.add("goodactive");
    document.getElementById("A144").classList.add("goodactive");
    document.getElementById("A129").innerText = "停";
    document.getElementById("A130").innerText = "停";
    document.getElementById("A144").innerText = "停";
    document.getElementById("A129span").innerText = "";
    document.getElementById("A130span").innerText = "";
    document.getElementById("A144span").innerText = "";
    localStorage.setItem("A129","停止中");
    localStorage.setItem("A130","停止中");
    localStorage.setItem("A144","停止中");
    localStorage.removeItem("A129e");
    localStorage.removeItem("A130e");
    localStorage.removeItem("A144e");
}

function heatStop(){
    document.getElementById("A131").classList.remove("badactive");
    document.getElementById("A132").classList.remove("badactive");
    document.getElementById("A131").classList.add("goodactive");
    document.getElementById("A132").classList.add("goodactive");
    document.getElementById("A131").innerText = "停";
    document.getElementById("A132").innerText = "停";
    document.getElementById("A131span").innerText = "";
    document.getElementById("A132span").innerText = "";
    localStorage.setItem("A131","停止中");
    localStorage.setItem("A132","停止中");
    localStorage.removeItem("A131e");
    localStorage.removeItem("A132e");
}

function gomiStop1(){
    document.getElementById("A319b").classList.remove("badactive");
    document.getElementById("A319g").classList.add("goodactive");
    document.getElementById("A319g").innerText = "停";
    localStorage.setItem("A319","停止中");
    localStorage.removeItem("A319e");
}

function gomiStop2(){
    document.getElementById("A419b").classList.remove("badactive");
    document.getElementById("A419g").classList.add("goodactive");
    document.getElementById("A419g").innerText = "停";
    localStorage.setItem("A419","停止中");
    localStorage.removeItem("A419e");
}

function gateStop(){
    document.getElementById("A162").classList.remove("badactive");
    document.getElementById("A163").classList.remove("badactive");
    document.getElementById("A164b").classList.remove("badactive");
    document.getElementById("A162").classList.add("goodactive");
    document.getElementById("A163").classList.add("goodactive");
    document.getElementById("A164g").classList.add("goodactive");
    document.getElementById("A162").innerText = "停";
    document.getElementById("A163").innerText = "停";
    document.getElementById("A164g").innerText = "停";
    document.getElementById("A162span").innerText = "";
    document.getElementById("A163span").innerText = "";
    localStorage.setItem("A162","停止中");
    localStorage.setItem("A163","停止中");
    localStorage.setItem("A164","停止中");
    localStorage.removeItem("A162e");
    localStorage.removeItem("A163e");
    localStorage.removeItem("A164e");
}

function gateStop2(){
    document.getElementById("A165").classList.remove("badactive");
    document.getElementById("A166").classList.remove("badactive");
    document.getElementById("A167b").classList.remove("badactive");
    document.getElementById("A165").classList.add("goodactive");
    document.getElementById("A166").classList.add("goodactive");
    document.getElementById("A167g").classList.add("goodactive");
    document.getElementById("A165").innerText = "停";
    document.getElementById("A166").innerText = "停";
    document.getElementById("A167g").innerText = "停";
    document.getElementById("A165span").innerText = "";
    document.getElementById("A166span").innerText = "";
    localStorage.setItem("A165","停止中");
    localStorage.setItem("A166","停止中");
    localStorage.setItem("A167","停止中");
    localStorage.removeItem("A165e");
    localStorage.removeItem("A166e");
    localStorage.removeItem("A167e");
}

function supply(obj){
    document.getElementById(obj).classList.remove("badactive");
    document.getElementById(obj).classList.add("goodactive");
    document.getElementById(obj).innerText = "補";
    document.getElementById(`${obj}span`).innerText = "";
    localStorage.setItem(obj,"補給");
    localStorage.removeItem(`${obj}e`);
}