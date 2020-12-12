const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({

    day:{
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: { 
                type: String,
                required: "Enter a workout type"
            },

            name: {
                type: String,
                require: "Enter a workout Name"
            },

            duration: { 
                type: Number,
                require: "How long did you workout for"
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },

            distance: {
                type: Number,
            }
        }
    ] 
});



const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;