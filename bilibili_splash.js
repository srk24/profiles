// 感谢 blackmatrix7 提供灵感来源，但原js过于庞大，所以将此单独拿出来解析

let body = $response.body
body = JSON.parse(body)
if (body.hasOwnProperty('data')) {
    if (body['data'].hasOwnProperty('max_time') && body['data'].hasOwnProperty('list') && body['data'].hasOwnProperty('show')) {
        body['data']['max_time'] = 0
        body['data']['min_interval'] = 31536000
        body['data']['pull_interval'] = 31536000

        body['data']['list'] = new Array()
        // for (let i = 0; i < body['data']['list'].length; i++) {
        //     body['data']['list'][i]['duration'] = 0
        //     body['data']['list'][i]['begin_time'] = 1915027200
        //     body['data']['list'][i]['end_time'] = 1924272000
        // }
        body['data']['show'] = new Array()
        // for (let i = 0; i < body['data']['show'].length; i++) {
        //     body['data']['show'][i]['stime'] = 1915027200
        //     body['data']['show'][i]['etime'] = 1924272000
        // }
    }

}
body = JSON.stringify(body)
$done({ body })
