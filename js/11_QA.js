$(document).ready(function () {
    $('.question h3').click(function (e) {
        // 讓點擊到的 h3 亮起來(觸發active樣式)
        $(this).toggleClass('active');
        // 讓點擊到的 h3找到父元素 .question ，再找裡面的 P 判斷收闔
        $(this).parent().find('p').slideToggle();

        // 自己以外的 h3 移除active樣式
        $(this).parent().siblings().find('h3').removeClass('active');
        // 自己以外的 p 隱藏起來
        $(this).parent().siblings().find('p').slideUp();
    });
});