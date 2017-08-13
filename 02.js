/**
 * Created by feiyu on 17/7/27.
 */

const https = require('https');
const cheerio = require('cheerio');

let url = 'cnodejs.org';
let htmlArray = [];
// url、用户、标题、发布时间、分类
let info = [];

function getAllHtml(page){
    https.request({
        host: url,
        path: '/?tab=all&page=' + page,
        method: 'GET',
    }, function (response) {
        let data = '';
        response.on('data', function (buff) {
            data += buff;
        });
        response.on('end', function () {
            let htmlArray = data.toString();
            parseHtml(htmlArray);
            console.log('当前贴子数：', info.length);
        });
    }).on('error', function (e) {
        console.log('error:', e.message);
    }).end();
}

function parseHtml(html) {
    let $ = cheerio.load(html);
    let cells = $('.cell');

    cells && cells.each(function (index, item) {
        let cell = $(item);
        let user = cell.find('.user_avatar').attr('href').split('/user/')[1];
        let url = cell.find('.topic_title').attr('href');
        let title = cell.find('.topic_title').attr('title');
        let time = cell.find('.last_active_time').text();
        let type = cell.find('.topic_title_wrapper').children().first().text();

        if (time.indexOf('秒') !== -1 || time.indexOf('分钟') !== -1 || time.indexOf('小时') !== -1) {
            info.push({
                user: user,
                url: url,
                title: title,
                time: time,
                type: type
            })
        }
    })
}

for(let i = 1; i < 100; i++){
    getAllHtml(i);
}
