const fs = require('fs')
const path = require('path')
const ejs = require('ejs');




const viewsDir = path.resolve(__dirname, './views')
const picsDir = path.resolve(__dirname, './assets/images')


let defaultPic = 'assets/images/cover.png'

function readFilesTree() {
    let tree = readdirectory(viewsDir)
    renderHTML(tree)
}


function renderHTML(tree) {

    ejs.renderFile('index.ejs', { itemList: tree }, function (err, str) {
        fs.writeFileSync('./index.html', str);
    });

}

function readdirectory(dir, result = []) {
    let files = fs.readdirSync(dir)
    files.forEach(item1 => {
        let filepath1 = `${dir}/${item1}`;
        let stat = fs.statSync(filepath1)
        if (stat.isFile() && filepath1.endsWith('.html')) {
            let nArr = filepath1.replace('.html', '').split('/')
            let aArr = nArr.slice(-2)
            let o = parseViewHTML(filepath1);
            o.isDir = false
            o.path = `./index.html#${aArr.join('-')}?type=1`
            o.pathTag = aArr.join('-')

            let _pic =  getHtmlImage(nArr.slice(-1)[0])

            if(_pic){
                o.pic = _pic 
            }

            

            result.push(o)
        } else {
            //result.
            let obj = {
                isDir: true,
                title: item1,
                childrenList: []
            }
            result.push(obj)
            readdirectory(filepath1, obj.childrenList)
        }
    })

    return result
}



function getHtmlImage(htmlName) {
    let p = ''
    let filename = travelFtile(picsDir, function (str) {
        let b = ['.png', '.jpg', '.jpeg'].some(s => str.endsWith(s));

        if (b && str.split('\\').slice(-1)[0].startsWith(htmlName)  ) {
            return true
        }
    })
    if(filename){
        p = '\\' + path.relative(__dirname , filename)

    }
    return p
}

getHtmlImage('load_geojson')

function travelFtile(dir, callback) {
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        const item1 = files[i];
        let filepath1 = `${dir}\\${item1}`;
        let stat = fs.statSync(filepath1)
        if (stat.isFile()) {

            let b = callback(filepath1);

            if (b) {
                return filepath1
            }



        } else {
            let result = travelFtile(filepath1)

            if (result) {
                return result
            }
        }
    }
}


function parseViewHTML(filepath) {
    let contentText = fs.readFileSync(filepath, 'utf-8');
    let fileNmae = filepath.split('/').pop()

    let content = getTextBetween(contentText, '<!--tag', '-->')
    let obj = {
        title: fileNmae,
        pic: defaultPic
    }

    obj.title = getTextBetween(contentText, '<title>', '</title>')


    if (content) {
        let reg = /^(.+):(.+)$/;
        let arr = content.split('@param').filter((str) => reg.test(str));
        arr.forEach(s => {
            let matches = s.match(reg);
            obj[matches[1]] = matches[2]
        })
    }
    return obj
}


function getTextBetween(contentText, start, end) {

    let startI = contentText.indexOf(start);
    let endI = contentText.indexOf(end, startI);

    if (startI > -1 && endI > startI) {

        let str = contentText.slice(startI + '<!--tag'.length, endI);
        let _str = str.replace(/\n/g, '').replace(/\s/g, '')

        return _str

    }

    return ''
}



readFilesTree()


module.exports = {
    readFilesTree
}