function start(){
  const currentDate = new Date(); 
  const year = currentDate.getFullYear() - 2018;// 年を取得
  const month = currentDate.getMonth() + 1;// 月を取得（0から11で表されるため1を足す）
  const day = currentDate.getDate();// 日を取得
  const weekday = currentDate.getDay(); // 曜日を取得（0が日曜、1が月曜、6が土曜に対応）
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];//配列によって数字で取得する曜日変換
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const current =`令和 ${year}年 ${month}月 ${day}日（${weekdays[weekday]}）`;
  const weather = document.getElementById("weather").value;
  const currentWeather = `${current} 天候:${weather}`
  const name = document.getElementById("name").value;
  const guard = document.getElementById("guard").value;//1直2直
  const ampm = document.getElementById("ampm").value;
  const furnace = document.getElementById("furnace").value;
  const startTime = ("0" + hours).slice(-2) + "時" + ("0" + minutes).slice(-2) + "分";

  if(weather && name && guard && ampm && furnace){
    const A911 = localStorage.getItem("A911");
    const A912 = localStorage.getItem("A912");
    if(ampm === "午前" && guard === "1直" && A911 || ampm === "午後" && guard === "1直" && A912){
     const restart = window.confirm("前回のデータが残っています。点検を再開しますか？");
        if(furnace !== localStorage.getItem("A906")){
            window.alert("error：前回データと稼働中の炉が一致しません。一致させるか、データ消去してください");
            return;
        }
        if(restart && ampm === "午前"){
            localStorage.setItem("A911", "続きから");
            location.href = "pages/page1.html";
            return;
        } else if(restart && ampm === "午後"){
            localStorage.setItem("A912", "続きから");
            location.href = "pages/page2.html";
            return;
        } else {
            window.alert("データ消去ボタン押して再度お試しください");
            return;
        }
     }

    localStorage.setItem("A900",current);
    localStorage.setItem("A901",weather);
    localStorage.setItem("A902",currentWeather);
    localStorage.setItem("A903",name);
    localStorage.setItem("A904",guard);
    localStorage.setItem("A905",ampm);
    localStorage.setItem("A906",furnace);
    
    //リンク先分岐
    if(ampm === "午前"){
        if(guard === "1直"){
            localStorage.setItem("A911","データあり");
            localStorage.setItem("A907",startTime);
            location.href = "pages/page1.html";
        } else {//2直の場合
            window.alert("アプリ点検は1直のみ");
        }
    } else {//午後の場合
        if(guard === "1直"){
            localStorage.setItem("A912","データあり");
            localStorage.setItem("A907",startTime);
            location.href = "pages/page2.html";
        } else {//2直の場合
            window.alert("アプリ点検は1直のみしか実装してません＞＜");
        }
    }

  } else {
    window.alert("error：未選択の項目があります");
  }  
  
}

function del(){
    const A911 = localStorage.getItem("A911");
    const A912 = localStorage.getItem("A912");
    if(!A911 && !A912){
        window.alert("データがありません");
    } else {
        let result = window.confirm("前回の点検データを消去してよろしいですか？※前日の読み値は保存されます");
            if(result){
            localStorage.removeItem("A731s");
            localStorage.removeItem("A831s");
            localStorage.removeItem("A526d");
            localStorage.removeItem("A528d");
            localStorage.removeItem("A739d");
            localStorage.removeItem("A839d");
            localStorage.removeItem("A742s");
            localStorage.removeItem("A842s");
            const processRange = (start, end) => {
                for (let i = start; i <= end; i++) {
                    localStorage.removeItem("A" + i);
                }
            };
            processRange(100, 912);

            const processRange2 = (start, end) => {
                for (let i = start; i <= end; i++) {
                    localStorage.removeItem("A" + i + "e");
                }
            };
            processRange2(100, 912);
        }
    }
}

function favReg(){
    const name = document.getElementById("name").value;
    const A913 = localStorage.getItem("A913");
    if(A913){
        localStorage.removeItem("A913");
        document.getElementById("star").classList.remove("fa-solid");
        document.getElementById("favTxt").innerText = " 登録";
    } else {
        if(name){
        localStorage.setItem("A913", name);
        window.alert(`「${name}」★お気に入り登録しました`);
        setTimeout(function(){
        window.close();
        }, 1000);
        document.getElementById("star").classList.add("fa-solid");
        document.getElementById("favTxt").innerText = " 解除";
        }
    }
}

window.addEventListener("load",function fav(){
    const A913 = localStorage.getItem("A913");
    if(A913){
        document.getElementById("name").value = A913;
        document.getElementById("star").classList.add("fa-solid");
        document.getElementById("favTxt").innerText = " 解除";
    }
})