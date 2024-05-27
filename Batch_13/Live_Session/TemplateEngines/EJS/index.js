const { render } = require('ejs');
const express = require('express');
const app=express();
const port=3500;
const path=require('path');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

const products=[
    {id:1,name:"product-1",price:10},
    {id:2,name:"product-2",price:20},
    {id:4,name:"product-3",price:30},
]

const novels = [
    {novelId: 1,novelName: "To Kill a Mockingbird",price: 10.99,description: "A novel by Harper Lee published in 1960, instantly successful, widely read in high schools and middle schools in the United States." },
    { novelId: 2, novelName: "1984",price: 8.99,description: "A dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell." },
    { novelId: 3, novelName: "Pride and Prejudice", price: 12.99, description: "A romantic novel of manners written by Jane Austen in 1813, the novel follows the character development of Elizabeth Bennet." },
    {novelId: 4,novelName: "The Great Gatsby",price: 10.49,description: "A 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg."},
    {novelId: 5,novelName: "Moby-Dick",price: 11.50,description: "An 1851 novel by Herman Melville. The story tells the adventures of wandering sailor Ishmael and his voyage on the whaleship Pequod."}
  ];

  app.get('/',(req,res)=>{
    res.render('home')
  })

  app.get('/products',(req,res)=>{
    res.render('index',{products})
  })
  app.get('/novels',(req,res)=>{
    res.render('novels',{novels})
  })

  app.get('/novels/:id',(req,res)=>{
    const novelid=parseInt(req.params.id);
    const novel=novels.find(nov=>nov.novelId===novelid)
    res.render('novelDetails',{novel})
  })

  app.get('/studentForm',(req,res)=>{
    res.render('studentForm')
  })

  app.post('/submit',(req,res)=>{
    console.log(req.body,'hlo');
    const{name,age,grade}=req.body;
    res,render('studentDetails')
  })

  app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
  })