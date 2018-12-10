/*模拟后台*/
// 轮播图
Mock.mock('http://api.com/banner', {
    "banner|3": [{
        "img": "@dataImage('581x251','@cname')",
        // "img": Mock.Random.dataImage('581x251', Mock.mock('@cname')),
        "url": "#",
        "text": '@csentence(3, 5)'
    }]
});
// 分类数据
Mock.mock('http://api.com/category', {
    "category": [
        {
            "img": "@dataImage('32x32', '社会热点')",
            "url": "",
            "text": '社会热点'
        }, {
            "img": "@dataImage('32x32', '摄影')",
            "url": "",
            "text": '摄影'
        }, {
            "img": "@dataImage('32x32', '互联网')",
            "url": "",
            "text": '@IT·互联网'
        }, {
            "img": "@dataImage('32x32', '读书')",
            "url": "",
            "text": '读书'
        }, {
            "img": "@dataImage('32x32', '旅行')",
            "url": "",
            "text": '旅行·在路上'
        }, {
            "img": "@dataImage('32x32', '手绘')",
            "url": "",
            "text": '手绘'
        }, {
            "img": "@dataImage('32x32', '电影')",
            "url": "",
            "text": '简书电影'
        },
    ]
});

// 文章列表
Mock.mock('http://api.com/blog', {
    "blog|10": [{
        "img|0-1": "@dataImage('150x120', 'img')",
        "url": "#",
        "title": "@ctitle",
        "category": "@ctitle(2,5)",
        "text": '@cparagraph(4)',
        "postDate": '@now("hour")',
        'viewCount': "@integer(0, 10000)",
        'replyCount': "@integer(0, 10000)",
        'likeCount': "@integer(0, 10000)",
        'author': {
            'link': "#",
            'name': '@cname',
            'avatar': "@dataImage('32x32', 'avatar')"
        }
    }]
});
// 推荐作者
Mock.mock('http://api.com/recommended-authors', {
    "author|5": [{
        'link': "#",
        'name': '@cname',
        'avatar': "@dataImage('48x48', 'avatar')",
        'wordCount': "@integer(10000, 100000)",
        'likeCount': "@integer(100, 50000)"
    }]
});

//获取推荐列表
Mock.mock('http://api.com/recommend', {
    "category": [
        {
            "img": "@dataImage('32x32', '社会热点')",
            "url": "",
            "text": '社会热点',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",

        }, {
            "img": "@dataImage('32x32', '摄影')",
            "url": "",
            "text": '摄影',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",
        }, {
            "img": "@dataImage('32x32', '互联网')",
            "url": "",
            "text": '@IT·互联网',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",
        }, {
            "img": "@dataImage('32x32', '读书')",
            "url": "",
            "text": '读书',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",
        }, {
            "img": "@dataImage('32x32', '旅行')",
            "url": "",
            "text": '旅行·在路上',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",
        }, {
            "img": "@dataImage('32x32', '手绘')",
            "url": "",
            "text": '手绘',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",
        }, {
            "img": "@dataImage('32x32', '电影')",
            "url": "",
            "text": '简书电影',
            'likeCount': "@integer(100, 50000)",
            'article': "@integer(100, 50000)",
        },
    ],
    "author|6": [{
        'link': "#",
        'name': '@cname',
        'avatar': "@dataImage('48x48', 'avatar')",
        "text": '@cparagraph(1)',
        "title": {
            "title1":"@ctitle",
            "title2":"@ctitle(1,17)"}

    }]
});




