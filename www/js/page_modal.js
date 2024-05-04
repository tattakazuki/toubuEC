const popup = document.getElementById('popup');

function showPopup() {
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.opacity = '1';
    }, 77);

    setTimeout(() => {
        hidePopup();
    }, 777);
}

// ポップアップを非表示にする関数
function hidePopup() {
    popup.style.opacity = '0';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 277);
}

const modalwindow = (obj) => {
  const inputId = obj.id;
  const modal = $('#' + inputId + 'modal');
  const closeBtn = $('#' + inputId + 'cancel');
  const saveBtn = $('#' + inputId + 'save');
  const errorBtn = $('#' + inputId + 'error');
  const tripleBtn_1 = $('#' + inputId + '_1');
  const tripleBtn_2 = $('#' + inputId + '_2');
  const tripleBtn_3 = $('#' + inputId + '_3');
  document.body.style.overflow = 'hidden';
  modal.show();

  closeBtn.off("click").on("click", function () {
    modal.hide();
    document.body.style.overflowY = 'auto';
  });

  saveBtn.off("click").on("click", function () {
    const inputValue = document.getElementById(inputId + "input").value;
    if(!inputValue){
        window.alert("空の数値は保存できません");
        return;
    }
    document.getElementById(inputId + "span").innerText = inputValue;
    localStorage.setItem(inputId, inputValue);
    document.getElementById(inputId).classList.remove("badactive");
    document.getElementById(inputId).classList.add("goodactive");
    document.getElementById(inputId).innerText = "良";
    //window.alert(`「${inputValue}」保存しました。`);
    showPopup();
    modal.hide();
    document.body.style.overflowY = 'auto';
  });

  errorBtn.off("click").on("click", function () {
    localStorage.setItem(inputId, "否");
    document.getElementById(inputId).classList.remove("goodactive");
    document.getElementById(inputId).classList.add("badactive");
    
    let errorcomment = localStorage.getItem(inputId + "e");
    if(errorcomment === null){
        errorcomment = prompt("異常の内容を入力してください","");
    } else {
        errorcomment = prompt("異常の内容を入力してください",errorcomment);
    }
    if(errorcomment){
        localStorage.setItem(inputId + "e",errorcomment);
    } else {
        localStorage.removeItem(inputId + "e",errorcomment);
    }
    document.getElementById(inputId + "span").innerText = "";
    document.getElementById(inputId).innerText = "否";
    modal.hide(); 
    document.body.style.overflowY = 'auto';
  });

    // プラマイボタン
    const buttons = [
    { id: "plus1", value: 1 },
    { id: "minus1", value: -1 },
    { id: "plus5", value: 5 },
    { id: "minus5", value: -5 },
    { id: "plus10", value: 10 },
    { id: "minus10", value: -10 },
    { id: "plus50", value: 50 },
    { id: "minus50", value: -50 },
    { id: "plus100", value: 100 },
    { id: "minus100", value: -100 },
    { id: "plus01", value: 0.1 },
    { id: "minus01", value: -0.1 },
    { id: "plus05", value: 0.5 },
    { id: "minus05", value: -0.5 },
    { id: "plus001", value: 0.01 },
    { id: "minus001", value: -0.01 },
    { id: "plus005", value: 0.05 },
    { id: "minus005", value: -0.05 },
    { id: "plus0001", value: 0.001 },
    { id: "minus0001", value: -0.001 },
    { id: "plus0005", value: 0.005 },
    { id: "minus0005", value: -0.005 },
    { id: "plus00001", value: 0.0001 },
    { id: "minus00001", value: -0.0001 },
    { id: "plus00005", value: 0.0005 },
    { id: "minus00005", value: -0.0005 },
    ];

    buttons.forEach(function(button) {
        let btn = $('#' + inputId + button.id);
        btn.off("click").on("click", function () {
            updateTemperature(button.value);
        });
    });

    // 数値入力の要素
    const temperatureInput = document.getElementById(inputId + "input");

    // 数値の増減を行う関数
    function updateTemperature(value) {
        const currentTemperature = parseFloat(temperatureInput.value);
        let newTemperature = currentTemperature + value;
        // 最小値と最大値の制約を適用
        if (newTemperature < parseFloat(temperatureInput.min)) {
            newTemperature = parseFloat(temperatureInput.min);
        } else if (newTemperature > parseFloat(temperatureInput.max)) {
            newTemperature = parseFloat(temperatureInput.max);
        }
        //値の更新・小数点による分岐
        const decimalType = obj.value;
        switch (decimalType) {
        case "0.0001":
            temperatureInput.value = newTemperature.toFixed(4);
            break;
        case "0.01":
            temperatureInput.value = newTemperature.toFixed(2);
            break;
        case "0.1":
            temperatureInput.value = newTemperature.toFixed(1);
            break;            
        case "1":
            temperatureInput.value = newTemperature.toFixed(0);
            break;
        }

    }

    
  tripleBtn_1.off("click").on("click", function(){
    document.getElementById(inputId).classList.add("goodactive");
    document.getElementById(inputId).innerText = "良";
    showPopup();
    localStorage.setItem("inputId", "1");
    document.getElementById(`${inputId}span`).innerText = "1";
    modal.hide();
    document.body.style.overflowY = 'auto';
  });

  tripleBtn_2.off("click").on("click", function(){
    document.getElementById(inputId).classList.add("goodactive");
    document.getElementById(inputId).innerText = "良";
    showPopup();
    localStorage.setItem("inputId", "2");
    document.getElementById(`${inputId}span`).innerText = "2";
    modal.hide();
    document.body.style.overflowY = 'auto';
  });

  tripleBtn_3.off("click").on("click", function(){
    document.getElementById(inputId).classList.add("goodactive");
    document.getElementById(inputId).innerText = "良";
    showPopup();
    localStorage.setItem("inputId", "3");
    document.getElementById(`${inputId}span`).innerText = "3";
    modal.hide();
    document.body.style.overflowY = 'auto';
  });

}

//コメントモーダル
const modal = document.getElementById("cmModal");

function openCmModal1(){
    document.getElementById("comment1").value = localStorage.getItem("A201");
    document.getElementById("comment2").value = localStorage.getItem("A202");
    document.getElementById("comment3").value = localStorage.getItem("A203");
    document.getElementById("comment4").value = localStorage.getItem("A204");
    document.getElementById("comment5").value = localStorage.getItem("A205");
    document.getElementById("comment6").value = localStorage.getItem("A206");
    modal.classList.add("showCmModal")
    document.body.style.overflow = 'hidden';
}

function closeCmModal1(){
    modal.classList.remove("showCmModal")
    const comment1 = document.getElementById("comment1").value;
    const comment2 = document.getElementById("comment2").value;
    const comment3 = document.getElementById("comment3").value;
    const comment4 = document.getElementById("comment4").value;
    const comment5 = document.getElementById("comment5").value;
    const comment6 = document.getElementById("comment6").value;
    localStorage.setItem("A201",comment1);
    localStorage.setItem("A202",comment2);
    localStorage.setItem("A203",comment3);
    localStorage.setItem("A204",comment4);
    localStorage.setItem("A205",comment5);
    localStorage.setItem("A206",comment6);
    document.body.style.overflowY = 'auto';
}

function openCmModal2(){
    document.getElementById("comment1").value = localStorage.getItem("A601");
    document.getElementById("comment2").value = localStorage.getItem("A602");
    document.getElementById("comment3").value = localStorage.getItem("A603");
    document.getElementById("comment4").value = localStorage.getItem("A604");
    document.getElementById("comment5").value = localStorage.getItem("A605");
    document.getElementById("comment6").value = localStorage.getItem("A606");
    modal.classList.add("showCmModal")
    document.body.style.overflow = 'hidden';
}

function closeCmModal2(){
    modal.classList.remove("showCmModal")
    const comment1 = document.getElementById("comment1").value;
    const comment2 = document.getElementById("comment2").value;
    const comment3 = document.getElementById("comment3").value;
    const comment4 = document.getElementById("comment4").value;
    const comment5 = document.getElementById("comment5").value;
    const comment6 = document.getElementById("comment6").value;
    localStorage.setItem("A601",comment1);
    localStorage.setItem("A602",comment2);
    localStorage.setItem("A603",comment3);
    localStorage.setItem("A604",comment4);
    localStorage.setItem("A605",comment5);
    localStorage.setItem("A606",comment6);
    document.body.style.overflowY = 'auto';
}

