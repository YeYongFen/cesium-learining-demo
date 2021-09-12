const fs = require('fs')
const path = require('path')
const ejs = require('ejs');




const viewsDir = path.resolve(__dirname,'./views')

function readFilesTree(){
    let tree = readdirectory(viewsDir)
    renderHTML(tree)


     
}


function renderHTML(tree){

    ejs.renderFile('index.ejs', { itemList:tree }, function(err, str){
        fs.writeFileSync( './index.html', str);
    });

}

function readdirectory(dir , result = []){
    let files = fs.readdirSync(dir)
    files.forEach( item1 => {
        let filepath1 =`${dir}/${item1}`;
        let stat = fs.statSync(filepath1)
        if(stat.isFile() && filepath1.endsWith('.html')){
            let nArr = filepath1.replace('.html' , '').split('/')
            let aArr = nArr.slice(-2)
            let o = parseViewHTML(filepath1);
            o.isDir = false
            o.path =  `./index.html#${aArr.join('-')}?type=1`  
            o.pathTag = aArr.join('-')
            result.push(o)
        }else{
            //result.
            let obj = {
                isDir:true,
                title:item1,
                childrenList:[]
            }
            result.push(obj)
            readdirectory(filepath1 , obj.childrenList)
        }
    } )

    return result
}


function parseViewHTML(filepath){
    let contentText = fs.readFileSync(filepath,'utf-8');
    let fileNmae = filepath.split('/').pop()
    let startI = contentText.indexOf('<!--tag');
    let endI = contentText.indexOf('-->' , startI);
    let obj = {
        title:fileNmae,
        pic:''
    }

    if(startI>-1 &&  endI> startI){

        let str = contentText.slice( startI + '<!--tag'.length , endI );
        let _str = str.replace(/\n/g , '').replace(/\s/g , '')
        let reg = /^(.+):(.+)$/;
        let arr = _str.split('@param').filter((str)=>reg.test(str));
        arr.forEach(s=>{
           let matches = s.match(reg);
           obj[matches[1]]=matches[2]
        })

    }

    return obj




}



readFilesTree()