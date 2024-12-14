const https = require('https');

function getSsScore(userid) {
    const url = `https://scoresaber.com/api/player/${userid}/full`;

    https.get(url, (res) => {
        let data = '';

        // 接收数据
        res.on('data', (chunk) => {
            data += chunk;
        });

        // 数据接收完毕
        res.on('end', () => {
            const ssJson = JSON.parse(data);
            console.log(ssJson);
        });
    }).on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });
}
getSsScore('76561199085587690');
// debugger;