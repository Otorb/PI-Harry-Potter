const router = require('express').Router();
const axios = require('axios');
const sequelize = require('sequelize');
const {Op} = require('sequelize')
const { Character, Activity} = require('../db')
const activities = require('../resouces/index')


router.get('/:id', async (req, res) =>{
    const {id} = req.params;
    try {
        const character = await Character.findByPk(id.toUpperCase(),
        {include: Activity}
        )
        return res.json(character)
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) =>{
    if(req.query.name){
        try {
            for(let activity of activities){
                await Activity.create({
                  name: activity,
                });
              }
            const character = await Character.findOne({
                where: {
                    name:{
                        [Op.iLike]: `%${req.query.name}%`,
                    }
                }
            },
            {include: Activity}
            )
            return res.json(character)
            
        } catch (error) {
            console.log(error)
        }
    }
    const characters = await axios.get('https://hp-api.herokuapp.com/api/characters').catch((e) => console.log(e))
    if(!(await Character.findOne({}))){
        await Character.bulkCreate(
            characters.data.map((character) =>{
                return {
                    name: character.name,
                    actor: character.actor,
                    ancestry: character.ancestry,
                    dateOfBirth: character.dateOfBirth,
                    house: character.house,
                    image: character.image,
                    patronus: character.patronus,
                    actividades:[activities[Math.floor(Math.random()*activities.length)], activities[Math.floor(Math.random()*activities.length)]]
                  }
            })
        ) 
    }
    res.json(await Character.findAll({}))
}) 

router.post('/', async (req, res) =>{
    
    
    const {name, actor, ancestry, dateOfBirth, house, image, patronus, actividades } = req.body
    
  

    const character = await Character.create({
        
        name: name,
        actor: actor,
        ancestry:ancestry,
        house:  house,
        dateOfBirth: dateOfBirth,
        image: image,
        patronus: patronus,  
      });
        if(actividades){
            character.addActivity(actividades)
        }else{
            return res.send('Falta informacion')
        }
            
    res.json(character)
   
})



module.exports = router