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
processRange(902, 903);//902は読み取られない
processRange(907, 908);
processRange(700, 704);
processRange(800, 804);
content += localStorage.getItem("A705") + ",\n";
content += localStorage.getItem("A805") + ",\n";
processRange(706, 713);
processRange(806, 813);
processRange(714, 717);
processRange(814, 817);
processRange(500, 504);
processRange(718, 722);
processRange(818, 822);
processRange(723, 727);
processRange(823, 827);
processRange(505, 515);
processRange(728, 730);
processRange(828, 830);
processRange(516, 519);
processRange(731, 736);
content += localStorage.getItem("A731s") + ",\n";
processRange(737, 738);
processRange(831, 836);
content += localStorage.getItem("A831s") + ",\n";
processRange(837, 838);
processRange(520, 525);
content += localStorage.getItem("A526s") + ",\n";
content += localStorage.getItem("A526") + ",\n";
content += localStorage.getItem("A526d") + ",\n";
content += localStorage.getItem("A527") + ",\n";
content += localStorage.getItem("A739s") + ",\n";
content += localStorage.getItem("A739") + ",\n";
content += localStorage.getItem("A739d") + ",\n";
processRange(740, 741);
content += localStorage.getItem("A839s") + ",\n";
content += localStorage.getItem("A839") + ",\n";
content += localStorage.getItem("A839d") + ",\n";
processRange(840, 841);
content += localStorage.getItem("A528s") + ",\n";
content += localStorage.getItem("A528") + ",\n";
content += localStorage.getItem("A528d") + ",\n";
processRange(529, 539);
processRange(742, 744);
content += localStorage.getItem("A742s") + ",\n";
content += localStorage.getItem("A745") + ",\n";
processRange(842, 844);
content += localStorage.getItem("A842s") + ",\n";
content += localStorage.getItem("A845") + ",\n";
processRange(540, 571);
processRange(746, 752);
processRange(846, 852);
processRange(572, 600);

const processRange2 = (start, end) => {
  for (let i = start; i <= end; i++) {
    const num = localStorage.getItem("A" + i + "e");
    content += num + ",\n";
  }
};

processRange2(700, 704);
processRange2(800, 804);
content += localStorage.getItem("A705e") + ",\n";
content += localStorage.getItem("A805e") + ",\n";
processRange2(706, 713);
processRange2(806, 813);
processRange2(714, 717);
processRange2(814, 817);
processRange2(500, 504);
processRange2(718, 722);
processRange2(818, 822);
processRange2(724, 727);
processRange2(824, 827);
processRange2(505, 515);
processRange2(729, 730);
processRange2(829, 830);
content += localStorage.getItem("A516e") + ",\n";
processRange2(518, 519);
processRange2(732, 738);
processRange2(832, 838);
processRange2(521, 522);
processRange2(524, 527);
content += localStorage.getItem("A739e") + ",\n";
content += localStorage.getItem("A741e") + ",\n";
content += localStorage.getItem("A839e") + ",\n";
content += localStorage.getItem("A841e") + ",\n";
processRange2(528, 535);
processRange2(537, 539);
processRange2(743, 745);
processRange2(843, 845);
processRange2(540, 560);
processRange2(562, 571);
processRange2(746, 752);
processRange2(846, 852);
processRange2(572, 575);
processRange2(577, 581);
processRange2(583, 600);

const processRange3 = (start, end) => {
  for (let i = start; i <= end; i++) {
    const num = localStorage.getItem("A" + i);
    content += num + ",\n";
  }
};

processRange3(601, 606);

    content = content.slice(0, -2); // 最後のカンマを削除

    window.plugins.share.show(
        {
            subject: `${localStorage.getItem("A902")} 午後点検`,
            text: content ,//格納データをテキストに出力、データはcsvにすぐ変換できるようカンマ区切り
        },
        function() {}, // Success function
        function() {alert('Share failed')} // Failure function
    );
}