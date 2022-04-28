const fs = require('fs');

try {
    const data = fs.readFileSync('../jsons/obra.json' , 'utf-8');
    exportToCSV(JSON.parse(data));
} catch (err) {
    console.log(err);

}

function exportToCSV(DATA){

    let arr = [];

    let header = Object.keys(DATA[0]);

    arr.push(header)

    DATA.forEach(ele => {
        arr.push(Object.values(ele))


    })
    arr = arr.join('\r\n');
    fs.writeFile('output.csv' , arr, (err, data)=>{
        if(err){
            return console.log(err)
        }

    })
}