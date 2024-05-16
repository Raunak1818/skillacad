const express=require('express');
const app=express();
const port=3300;





const festivals = [
    {
      festivalId: 1,
      festivalName: "Diwali",
      festivalDescription: "Diwali, also known as the Festival of Lights, is one of the most popular Hindu festivals. It symbolizes the victory of light over darkness, good over evil, and knowledge over ignorance.",
    },
    {
      festivalId: 2,
      festivalName: "Christmas",
      festivalDescription: "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world.",
    },
    {
      festivalId: 3,
      festivalName: "Eid al-Fitr",
      festivalDescription: "Eid al-Fitr, also called the 'Festival of Breaking the Fast', is a religious holiday celebrated by Muslims worldwide that marks the end of Ramadan, the Islamic holy month of fasting.",
    },
    {
      festivalId: 4,
      festivalName: "Holi",
      festivalDescription: "Holi is a popular ancient Hindu festival, also known as the Festival of Colors, celebrating the arrival of spring, the end of winter, and the blossoming of love.",
    },
    {
      festivalId: 5,
      festivalName: "Easter",
      festivalDescription: "Easter is a Christian festival that celebrates the resurrection of Jesus Christ from the dead, described in the New Testament as having occurred on the third day after his burial following his crucifixion by the Romans at Calvary c. 30 AD.",
    },
    {
      festivalId: 6,
      festivalName: "Thanksgiving",
      festivalDescription: "Thanksgiving is a national holiday celebrated on various dates in the United States, Canada, Grenada, Saint Lucia, and Liberia. It began as a day of giving thanks and sacrifice for the blessing of the harvest and of the preceding year.",
    },
    {
      festivalId: 7,
      festivalName: "Navratri",
      festivalDescription: "Navratri is a Hindu festival that spans nine nights and is celebrated every year in the autumn. It is observed for different reasons and celebrated differently in various parts of the Indian subcontinent.",
    },
    {
      festivalId: 8,
      festivalName: "Oktoberfest",
      festivalDescription: "Oktoberfest is the world's largest Volksfest (beer festival and travelling funfair). Held annually in Munich, Bavaria, Germany, it is a 16- to 18-day folk festival running from mid- or late September to the first Sunday in October.",
    },
    {
      festivalId: 9,
      festivalName: "Hanukkah",
      festivalDescription: "Hanukkah is a Jewish festival commemorating the rededication of the Second Temple in Jerusalem at the time of the Maccabean Revolt against the Seleucid Empire. It is also known as the Festival of Lights.",
    },
    {
      festivalId: 10,
      festivalName: "Lunar New Year",
      festivalDescription: "Lunar New Year, also known as Chinese New Year or Spring Festival, is the most important traditional festival in China, celebrated at the turn of the traditional lunisolar Chinese calendar.",
    }
  ];
  app.get('/',(req,res)=>{
    res.send('<h2>hello world</h2>');
  })
  
  app.get('/festivals',(req,res)=>{
    res.json(festivals);
  })

  app.listen(port,()=>{
    console.log(`listenting at ${port}`);
  })
  