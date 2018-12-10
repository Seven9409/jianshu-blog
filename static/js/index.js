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
        getBlogData();
    });

    //推荐作者 换一批
    $("#refresh-author").click(function () {
        cleanRecommendedAuthors();
        getRecommendedAuthorsData();
    });

    //初始化获取轮播图
    getBannerData();
    //初始化获取分类
    getCategoryData();
    //初始化获取文章
    getBlogData();
    //初始化推荐作者
    getRecommendedAuthorsData();
});

//获取轮播图
function getBannerData() {
    $.ajax({
        url: 'http://api.com/banner',
        dataType: 'json'
    }).done(function (data, status, xhr) {
        let bannerList = data.banner;
        // console.log(data);
        for (let index in  bannerList) {
            let bannerTemplate = `<div class="carousel-item">
                            <div class="banner" data-banner-name="` + bannerList[index].text + `">
                                <a target="_blank"
                                   href="` + bannerList[index].url + `">
                                    <img id="banner-img2" src="` + bannerList[index].img + `">
                                </a>
                            </div>
                        </div>
                    `;
            $("#banner-img-container").append(bannerTemplate);
            $("#banner-img-container .carousel-item:first").addClass("active")
        }
    });
}

//获取分类
function getCategoryData() {
    $.ajax({
        url: 'http://api.com/category',
        dataType: 'json'
    }).done(function (data, status, xhr) {
        let categoryList = data.category;
        // console.log(data);
        for (let index in  categoryList) {
            let categoryTemplate = `
                <a class="collection" target="_blank" href="` + categoryList[index].url + `">
                    <img src="` + categoryList[index].img + `">
                    <div class="name">` + categoryList[index].text + `</div>
                </a>
                    `;
            $("#category-container").prepend(categoryTemplate);
        }
    });
}

//获取文章
function getBlogData() {
    $.ajax({
        url: 'http://api.com/blog',
        dataType: 'json'
    }).done(function (data, status, xhr) {
        let blogList = data.blog;
        // console.log(data);
        for (let index in  blogList) {
            let tempStr = "";
            if (blogList[index].img !== '') {
                tempStr = `
                 <a class="warp-img" target="_blank" href="` + blogList[index].url + `">
                        <img class="img-blur-done" src="` + blogList[index].img + `" alt="120">
                    </a>
                       <div  id="biog-content" class="content">
                `;

            }else {
                tempStr=` <div  id="biog-content">`
            }
            let blogTemplate = `
                <li class="have-img">
                    ` + tempStr + `
                        <div class="author">
                            <a class="avatar" target="_blank" href="` + blogList[index].author.link + `">
                                <img src="` + blogList[index].author.avatar + `" alt="64">
                            </a>
                            <div class="info">
                                <a class="nickname" target="_blank" href="#">` + blogList[index].author.name + `</a>
                                <span class="time">` + Time.ago(new Date(blogList[index].postDate)) + `</span>
                            </div>
                        </div>
                        <a class="title" target="_blank" href="#">` + blogList[index].title + `</a>
                        <p class="abstract">
                        ` + blogList[index].text + `
                        </p>
                        <div class="meta">
                            <a class="collection-tag" target="_blank" href="#">
                            ` + blogList[index].category + `
                            </a>
                            <a target="_blank" href="#">
                                <i class="iconfont icon-yanjing"></i>  ` + blogList[index].viewCount + `
                            </a>
                            <a target="_blank" href="#">
                                <i class="iconfont icon-iconfontcommentfill"></i>  ` + blogList[index].replyCount + `
                            </a>
                            <span>
                                <i class="iconfont icon-xihuan"></i>  ` + blogList[index].likeCount + `
                            </span>
                        </div>
                    </div>
                </li>
                    `;
            $("#blog-list-container").append(blogTemplate);
        }
    });
}

//获取推荐作者
function getRecommendedAuthorsData() {
    $.ajax({
        url: 'http://api.com/recommended-authors',
        dataType: 'json'
    }).done(function (data, status, xhr) {
        let authors = data.author;
        console.log(data);
        for (let index in  authors) {
            let authorTemplate = `
            <li>
                <a href="` + authors[index].link + `" target="_blank" class="avatar">
                    <img src="` + authors[index].avatar + `"></a>
                <a class="follow">
                    <i class="iconfont icon-guanzhu"></i>关注</a>
                <a href="` + authors[index].link + `" target="_blank" class="name">` + authors[index].name + `</a>
                <p>
                    写了` + numFormat(authors[index].wordCount) + `字 · ` + numFormat(authors[index].likeCount) + `喜欢
                </p>
            </li>
            `;
            $("#recommended-authors-container").append(authorTemplate);
        }
    });
}

function cleanRecommendedAuthors() {
    $("#recommended-authors-container").text("");

}

function numFormat(num) {
    return (num / 1000).toFixed(1) + 'k';
}










