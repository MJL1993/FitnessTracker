const db = require("../models")

module.exports = (app) => {

app.get("/api/workouts", (req,res)=> {
        db.Workout.find({})
        .then(dbWorkouts =>{
            res.json(dbWorkouts)
        })
        .catch(err =>{
            res.json(err)
        })
})

app.get("/api/workouts/range", (req ,res)=> {
    db.Workout.find({}).sort({day:-1 }).limit(7).then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json(err)
    });
});

app.post("/api/workouts/", (req,res)=> {
    db.Workout.create({}).then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err);
    });
});

app.post("/api/workouts/range", (req,res)=> {
    db.Workout.create({}).then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err);
    });
});


app.put("/api/workouts/:id", (req,res)=> {
    db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}).then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err);
    });
});

};