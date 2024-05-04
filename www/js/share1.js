function share() {

const currentTime = new Date();
const finishHours = currentTime.getHours();
const finishMinutes = currentTime.getMinutes();
const finishTime = ('0' + finishHours).slice(-2) + '時' + ('0' + finishMinutes).slice(-2) + "分";
localStorage.setItem("A908",finishTime);

let content = "";
const processRange = (start, end) => {
  for (let i = start; i <= end; i++) {
    const num = localStorage.getItem("A" + i);
    content += num + ",\n";
  }
};

processRange(902, 903);
processRange(907, 908);
processRange(100, 109);
processRange(300, 301);
processRange(400, 401);
content += localStorage.getItem("A302") + ",\n";
content += localStorage.getItem("A402") + ",\n";
content += localStorage.getItem("A303") + ",\n";
content += localStorage.getItem("A403") + ",\n";
processRange(304, 305);
processRange(404, 405);
content += localStorage.getItem("A306") + ",\n";
content += localStorage.getItem("A406") + ",\n";
processRange(110, 119);
processRange(307, 310);
processRange(407, 410);
content += localStorage.getItem("A311") + ",\n";
content += localStorage.getItem("A411") + ",\n";
processRange(120, 157);
content += localStorage.getItem("A312") + ",\n";
content += localStorage.getItem("A412") + ",\n";
content += localStorage.getItem("A313") + ",\n";
content += localStorage.getItem("A413") + ",\n";
processRange(314, 315);
processRange(414, 415);
content += localStorage.getItem("A158") + ",\n";
content += localStorage.getItem("A316") + ",\n";
content += localStorage.getItem("A416") + ",\n";
processRange(159, 160);
processRange(317, 318);
processRange(417, 418);
content += localStorage.getItem("A319") + ",\n";
content += localStorage.getItem("A419") + ",\n";
content += localStorage.getItem("A320") + ",\n";
content += localStorage.getItem("A420") + ",\n";
processRange(321, 328);
processRange(421, 428);
content += localStorage.getItem("A329") + ",\n";
content += localStorage.getItem("A429") + ",\n";
content += localStorage.getItem("A330") + ",\n";
content += localStorage.getItem("A430") + ",\n";
processRange(331, 332);
processRange(431, 432);
content += localStorage.getItem("A333") + ",\n";
content += localStorage.getItem("A433") + ",\n";
processRange(161, 185);
processRange(334, 336);
processRange(434, 436);
content += localStorage.getItem("A337") + ",\n";
content += localStorage.getItem("A437") + ",\n";
content += localStorage.getItem("A338") + ",\n";
content += localStorage.getItem("A438") + ",\n";
content += localStorage.getItem("A339") + ",\n";
content += localStorage.getItem("A439") + ",\n";

const processRange2 = (start, end) => {
  for (let i = start; i <= end; i++) {
    const num = localStorage.getItem("A" + i + "e");
    content += num + ",\n";
  }
};

processRange2(100, 109);
processRange2(300, 301);
processRange2(400, 401);
content += localStorage.getItem("A302e") + ",\n";
content += localStorage.getItem("A402e") + ",\n";
content += localStorage.getItem("A303e") + ",\n";
content += localStorage.getItem("A403e") + ",\n";
processRange2(304, 305);
processRange2(404, 405);
content += localStorage.getItem("A306e") + ",\n";
content += localStorage.getItem("A406e") + ",\n";
processRange2(110, 119);
processRange2(307, 310);
processRange2(407, 410);
content += localStorage.getItem("A311e") + ",\n";
content += localStorage.getItem("A411e") + ",\n";
processRange2(120, 157);
content += localStorage.getItem("A312e") + ",\n";
content += localStorage.getItem("A412e") + ",\n";
content += localStorage.getItem("A313e") + ",\n";
content += localStorage.getItem("A413e") + ",\n";
content += localStorage.getItem("A314e") + ",\n";
content += localStorage.getItem("A414e") + ",\n";
content += localStorage.getItem("A315e") + ",\n";
content += localStorage.getItem("A415e") + ",\n";
content += localStorage.getItem("A158e") + ",\n";
content += localStorage.getItem("A316e") + ",\n";
content += localStorage.getItem("A416e") + ",\n";
processRange2(159, 160);
processRange2(317, 318);
processRange2(417, 418);
content += localStorage.getItem("A319e") + ",\n";
content += localStorage.getItem("A419e") + ",\n";
content += localStorage.getItem("A320e") + ",\n";
content += localStorage.getItem("A420e") + ",\n";
processRange2(321, 326);
content += localStorage.getItem("A328e") + ",\n";
processRange2(421, 426);
content += localStorage.getItem("A428e") + ",\n";
content += localStorage.getItem("A329e") + ",\n";
content += localStorage.getItem("A429e") + ",\n";
content += localStorage.getItem("A330e") + ",\n";
content += localStorage.getItem("A430e") + ",\n";
processRange2(331, 332);
processRange2(431, 432);
content += localStorage.getItem("A333e") + ",\n";
content += localStorage.getItem("A433e") + ",\n";
processRange2(161, 182);
processRange2(184, 185);
processRange2(334, 336);
processRange2(434, 436);
content += localStorage.getItem("A337e") + ",\n";
content += localStorage.getItem("A437e") + ",\n";
content += localStorage.getItem("A338e") + ",\n";
content += localStorage.getItem("A438e") + ",\n";
content += localStorage.getItem("A339e") + ",\n";
content += localStorage.getItem("A439e") + ",\n";

const processRange3 = (start, end) => {
  for (let i = start; i <= end; i++) {
    const num = localStorage.getItem("A" + i);
    content += num + ",\n";
  }
};

processRange3(201, 206);

    content = content.slice(0, -2); // 最後のカンマを削除

    window.plugins.share.show(
        {
            subject: `${localStorage.getItem("A902")} 午前点検`,
            text: content ,//格納データをテキストに出力、データはcsvにすぐ変換できるようカンマ区切り
        },
        function() {}, // Success function
        function() {alert('Share failed')} // Failure function
    );
}