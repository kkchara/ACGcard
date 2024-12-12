const https = require('https');

function getSsScore(player, page) {
    const url = `https://scoresaber.com/api/player/${player}/scores?page=${page}&sort=top`;

    https.get(url, (res) => {
        let data = '';

        // 接收数据
        res.on('data', (chunk) => {
            data += chunk;
        });

        // 数据接收完毕
        res.on('end', () => {
            const ssJson = JSON.parse(data);
            console.log(ssJson["playerScores"][0]["score"]);
        });
    }).on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });
}

// 示例调用
getSsScore('76561199085587690', '1');
// debugger;