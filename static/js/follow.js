$(function () {
    $switchOn = $(".switch-btn:first-child");
    $switchOff = $(".switch-btn:last-child");
    $switchOn.click(function () {
        $switchOn.addClass("active");
        $switchOff.removeClass("active");
    });
    $switchOff.click(function () {
        $switchOff.addClass("active");
        $switchOn.removeClass("active");
    });
    $("identifier").click(function () {
        $("#myCarousel").carousel('cycle');

    });


    $(".fontPic").click(function () {
        $(".fontHide").toggle()
    });
    $(".uerser").click(function () {
        $(".homeHide").toggle()
    });

    //阅读更多
    $("#read-more").click(function () {
        getRecommendData();
    });
// 推荐
    $(".tab-menu li").click(function(){
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $(".tab-list>ul").eq(_index).show().siblings().hide();
        //改变选中时候的选项框的样式，移除其他几个选项的样式
        $(this).addClass("active").siblings().removeClass("active");
    });


    //初始化获取推荐列表
    getRecommendData();
});

function getRecommendData() {
    $.ajax({
        url: 'http://api.com/recommend',
        dataType: 'json'
    }).done(function (data, status, xhr) {
        let recommendTopic = data.category;
        let recommendAuthor = data.author;
        for (let index in  recommendTopic) {
            let recommendTopicTemplate = `
            <li>
                <a  href="` + recommendTopic[index].url + `" class="btn btn-success follow">
                   <i class="iconfont icon-guanzhu"></i>
                   <span>关注</span>
                </a>
                <div class="tag">
                    <i class="iconfont icon-tuijian1"></i>
                    <span>简书推荐专题</span>
                </div>
                <a href="` + recommendTopic[index].url + `"  target="_blank" class="avatar-collection">
                     <img src="`+ recommendTopic[index].img +`">
                </a>
                <div class="info">
                    <a href="` + recommendTopic[index].url + `" target="_blank" class="name">
                    ` + recommendTopic[index].text + `
</a>
                    <p>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 ...</p>
                    <a href="` + recommendTopic[index].url + `" target="_blank">
                       <i class="iconfont icon-tuijianmoban"></i>
                     <span>` + numFormat(recommendTopic[index].article) + `篇文章   ` + numFormat(recommendTopic[index].likeCount) + `人关注</span>
                       </a>
                </div>
            </li>`;
            $("#recommend-list").append(recommendTopicTemplate);
            $("#topic-list").append(recommendTopicTemplate);
        }
        for (let index in  recommendAuthor) {
            let recommendAuthorTemplate = `
            <li>
                <a href="\` + recommendAuthor[index].link + \`" class="btn btn-success follow">
                    <i class="iconfont icon-guanzhu"></i>
                    <span>关注</span>
                </a>
                <div class="tag">
                    <i class="iconfont icon-tuijian1"></i>
                    <span>简书推荐作者</span>
                </div>
                <a href="` + recommendAuthor[index].link + `"  target="_blank" class="avatar-collection">
                    <img src="` + recommendAuthor[index].avatar + `">
                </a>
                <div class="info">
                     <a href="` + recommendAuthor[index].link + `"  target="_blank" class="name">
                     ` + recommendAuthor[index].name + `</a>
                     <p> ` + recommendAuthor[index].text + ` </p>
                     <a href="` + recommendAuthor[index].link + `"  target="_blank">
                          <i class="iconfont icon-article"></i>
                          <span>` + recommendAuthor[index].title.title1 + ` </span>
                     </a>
                     <a href="` + recommendAuthor[index].link + `"  target="_blank">
                          <i class="iconfont icon-article"></i>
                          <span>` + recommendAuthor[index].title.title2 + ` </span>
                      </a>
                   </div>
            </li>`;
            $("#recommend-list").append(recommendAuthorTemplate);
            $("#author-list").append(recommendAuthorTemplate);
        }
    });
}




function numFormat(num) {
    return (num / 1000).toFixed(1) + 'k';
}







