const Habits = require('../models/habits');
const router = require('../routes/habits');


exports.getHabits = async (req, res, next) => {

    try {
        const habits = await Habits.find();

        res.status(200).json({ sucess: true, count: habits.length, data: habits})
        
    } catch (error) {
        res.status(400).json({success: false})
        
    }
    
}



// Create new  habit
// POST '/habits'

exports.createHabit = async (req, res, next) => {

try {
    const habit = await Habits.create(req.body)
    
    res.status(201).json({ 
        success: true,
        data: habit
       })  
} catch (error) {
    res.status(400).json({ success: false})
}

}

// Update new  habit
// PUT /habits/:id

exports.updateHabit = async (req, res, next) => {
  
    try {
        const habit = await Habits.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!habit) {
            return res.status(400).json ({sucess: false})
        }

        res.status(200).json({sucess: true, data: habit})

        
    } catch (error) {
        res.status(400).json({ success: false})
    }
 
}


// DELETE   habit
// DELETE /habits/:id

exports.deleteHabit = async (req, res, next) => {

    try {
        const habit = await Habits.findByIdAndDelete(req.params.id)
        if(!habit) {
            return res.status(400).json ({sucess: false})
        }

        res.status(200).json({sucess: true,  data: habit})
    } catch (error) {
        res.status(400).json({ success: false})
        
    }
  
}




