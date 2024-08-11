const Course = require("../models/course");

//Here we are checking the courses from databse and sending 
const courses = async(req,res)=>{
    try {
        const courseDatas = await Course.find({});
        console.log("Fetched courses successfully.");
        res.status(200).json(courseDatas);
    } catch (error) {
        console.error("Error fetching courses:", error);
    }
};

module.exports = courses;