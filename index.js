// import express from "express";
// const app=express();
// const port=3000;

// app.get("/", (req,res)=>{
//     const today = new Date("February 3, 2024 11:13:00");
//     const day= today.getDay();
//     if(day===0||day===6){
//         res.render("index.ejs",
//     {dayType:"Weekend", advice:"Its time to have fun :)"}
//     )
//     }else{
//         res.render("index.ejs",
//     {dayType:"Weekday", advice:"Its time to work :("}
//     )
//     }

// })

// app.listen(port, ()=>{
//     console.log(`Listening at port ${port}.`)
// })

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("June 24, 2023 11:13:00");
  let day = today.getDay();
  console.log(day);
  if (day == 0 || day == 6) {
    res.render("index.ejs", {
      dayType: "weekend",
      advice: "Have a happy weekend",
    });
  }
  else{
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  })};
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
