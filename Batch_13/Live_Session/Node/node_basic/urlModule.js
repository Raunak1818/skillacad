const url=require('url');
// const urlstring="https://www.example.com/datafile/file.txt";
const urlstring="https://www.example.com/path?query=value#eid";
const data=url.parse(urlstring,true).query;
console.log(data);