import express from 'express'

const router = express.Router();

router.get("/search", (req, res) => {
  res.json({
books:[
  {
 goodreadId:1,
title:"three Men in a boat",
authors:"json marler",
covers:[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WZRYhU3vJziUtl0NBvrlU8fbnAcZoWj5iEM1R9oaSLR_7O4-",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYf1ZplGTwHsHblmMWDFtAyLK390kXlUe_dEuk4RzK0wybpUQj",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBfiJ9k8PER_UIfleu1INn8Yke7_qwuMiNRkeWnaCa9OHpwqj"

],
pages:198
},
  {
    goodreadId:2,
   title:"world war",
   authors:"orwall",
   covers:[

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxju_Qu7wa7G_f37IDxIZZJjZHQZcooz-FDYVL_LN7mN3tDXC","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-K5QBCyGSZQ59z2W4S3Zb71Yw9vam4HUzx8MBRgAWHThUe6-mA",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNr15FB2VcTzUG4lYsaPYAzBd7vdwUWmWMh4pBJkjjIM4baTHe"



   ],
   pages:198
     }
]
  })

});

export default router;