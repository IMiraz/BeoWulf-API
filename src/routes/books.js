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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WZRYhU3vJziUtl0NBvrlU8fbnAcZoWj5iEM1R9oaSLR_7O4-"

],
pages:198
},
  {
    goodreadId:2,
   title:"world war",
   authors:"orwall",
   covers:[

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxju_Qu7wa7G_f37IDxIZZJjZHQZcooz-FDYVL_LN7mN3tDXC"

   ],
   pages:198
     }
]
  })

});

export default router;