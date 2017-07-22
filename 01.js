/**
 * Created by feiyu on 17/7/21.
 */
/**
 * Created by feiyu on 17/7/20.
 */

var fs = require('fs');
var localPath = '/Users/feiyu/Documents/gitlab';
var pathArray = [];
var packageArray = [];
var packageAndVerArray = [];
var packages = 0;

function getAllPath(path) {
    var files = fs.readdirSync(path);
    files.forEach(function (file) {
        var childPath = path + '/' + file;
        if (fs.statSync(childPath).isDirectory()) {
            getAllPath(childPath);
        } else if (file === 'package.json') {
            pathArray.push(childPath);
        }
    })
}

getAllPath(localPath);

function readFile(path) {
    var data = fs.readFileSync(path);
    //文件内容
    var packageJson = JSON.parse(data.toString());
    var dep = packageJson.dependencies;
    var devdep = packageJson.devDependencies;

    dep && Object.keys(dep).forEach(function (package) {
        var packageAndVer = package + dep[package];
        packageAndVerArray = isPackageExist(packageAndVerArray, packageAndVer);
        packageArray = isPackageExist(packageArray, package);
        packages++;
    })
    devdep && Object.keys(devdep).forEach(function (package) {
        var packageAndVer = package + devdep[package];
        packageAndVerArray = isPackageExist(packageAndVerArray, packageAndVer);
        packageArray = isPackageExist(packageArray, package);
        packages++;
    })
}

function isPackageExist(array, package) {
    var index = array.findIndex(function (item) {
        return item.package === package;
    });

    if (index !== -1) {
        array[index]['num']++;
    } else {
        array.push({
            'package': package,
            'num': 1
        })
    }
    return array;
}

pathArray.forEach(function (item) {
    readFile(item);
})


packageAndVerArray.sort(function (a, b) {
    return b.num - a.num;
})

packageArray.sort(function (a, b) {
    return b.num - a.num;
})

console.log("项目数：", pathArray.length);
console.log("所有包数：", packages);
console.log("packageArrayTop5：", packageArray.splice(0, 5));
console.log("packageAndVerArrayTop5：", packageAndVerArray.splice(0, 5));


var downApi = 'https://api.npmjs.org/downloads/point/last-week/${packagesArray}';
var https = require('https');
var packagesArray = packageArray.splice(0, 5).map(function (item) {
    return item.package;
})
https.request({
    host: 'api.npmjs.org',
    path: '/downloads/point/last-week/' + packagesArray,
    method: 'GET',
}, function (response) {
    var data = '';
    response.on('data', function (buff) {
        data += buff;
    });
    response.on('end', function () {
        console.log('done_______________________');
        console.log(JSON.parse(data.toString()));
    });
}).on('error', function (e) {
    console.log('error:', e.message);
}).end();

