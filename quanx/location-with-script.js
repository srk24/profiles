/**
 *
 * @sample https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js
 */

if ($response.statusCode !== 200) {
    $done(Null);
}

const body = $response.body;
const obj = JSON.parse(body);
let title = obj['city'] + ', ' + obj['country']
let subtitle = obj['org']
let ip = obj['query']
let description = obj['regionName'] + '\n' + obj['timezone'] + '\n' + obj['as']

$done({title, subtitle, ip, description});
