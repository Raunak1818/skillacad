const fs=require('fs');
const data=['name,cost'];
for(let i=0;i<10;i++){
    data.push(`name${i},cost${i+2}`)
}
fs.writeFileSync('streams/Data.csv',data.join('\n'))




// for(let i=0;i<1e8;i++){
//     data.push(`name${i},cost${i+2}`)
// }
// fs.writeFileSync('streams/Data.csv',data.join('\n'))