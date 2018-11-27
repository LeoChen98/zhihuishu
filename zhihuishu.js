console.log("智慧树刷课脚本 v1.0 by Leo \r\n项目主页:https://github.com/LeoChen98/zhihuishu");
var ti = $("body");
var video = $(".catalogue_ul1 li[id*=video-]");
var i = 1;
var v = 1;
video.css("color", "blue");
console.log("已选取" + video.length + "个小节,并已用蓝色标明,请检查是否有遗漏,如有遗漏,概不负责");
setTimeout(function () {
    $('.speedTab15').click();
    $('.volumeIcon').click();
    console.log("已进行静音和1.5倍加速");
}, 3000);
ti.on("DOMNodeInserted", function (e) {
    if (e.target.textContent == "关闭") {
        console.log("检测到第" + i + "个弹题窗口");
        window.setTimeout(function () {
            $(".popbtn_cancel").click();
            console.log("已关闭");
        }, 3000);
        i++;
    }
    else if (e.target.textContent == "本节视频,累计观看时间『100%』") {
        console.log("检测到视频观看完成，准备跳到下一节");
        $('.next_lesson_bg').find('a').trigger('click');
        console.log("已跳转");
        setTimeout(function () {
            $('.volumeIcon').click();
            $('.speedTab15').click();
            console.log("已进行静音和1.5倍加速");
        }, 6000);
        v++;
        console.log("目前播放了" + v + "个视频");
    }
});
