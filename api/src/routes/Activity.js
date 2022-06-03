const router = require('express').Router();
const axios = require('axios');
const sequelize = require('sequelize');
const { Activity } = require('../db')
const activities = require('../resouces/index')


router.get('/', async (req, res)=>{
  const actividades = [
    'Transfiguration  ',
    'Charms  ', 
    'Potions  ' ,
    'History of Magic  ', 
    'Defence Against the Dark Arts  ', 
    'Astronomy and Herbology  ', 
    'Chess  ', 
    'Flying lessons  ',
    'Arithmacy  ',
    'Muggle Studies  ',
    'Herbology  ',
    'Care of Magical Creatures  ',
    'Divination  ',
  ]
  try {
    actividades.forEach(el => {
        Activity.findOrCreate({
              where: {name:el}
          })
      })
      
      const allActivities= await Activity.findAll() 
      res.send(allActivities)
  } catch (error) {
      console.log("actividades", error)
  }

  
}) 




// router.get('/', async (req, res) =>{
//     for(let activity of activities){
//         await Activity.create({
//           name: activity,
//         });
//       }
//       const activity = await Activity.bulkCreate([
//     {name:'Transfiguration'},
//     {name:'Charms'}, 
//     {name:'Potions'}, 
//     {name:'History of Magic'}, 
//     {name:'Defence Against the Dark Arts'}, 
//     {name:'Astronomy and Herbology'}, 
//     {name:'Chess'}, 
//     {name:'Flying lessons'},
//     {name:'Arithmacy'},
//     {name:'Muggle Studies'},
//     {name:'Herbology'},
//     {name:'Care of Magical Creatures'},
//     {name:'Divination'},
//       ])
//       res.json(activity)
// })


// router.get('/', async (req, res) => {
// 	let activities = await Activity.findAll()
// 	try{
// 		return res.json(activities.map(e => e.name))
// 	}catch(error){
// 		return res.status(404).send(error)
// 	}
// })


module.exports = router