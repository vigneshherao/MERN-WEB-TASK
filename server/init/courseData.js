const Course = require("../models/course")
require("../models/db");


const courses = [
    'Responsive Web Design Certification',
    'JavaScript Algorithms and Data Structures Certification',
    'Front End Development Libraries Certification',
    'Data Visualization Certification',
    'APIs and Microservices Certification',
    'Quality Assurance Certification',
  ];



  const initDb = async ()=>{
   try {
    await Course.deleteMany({});
    const initData = courses.map(course => ({ name: course }));
    await Course.insertMany(initData);
    console.log("Data is initialized");
   } catch (error) {
    console.error("Error initializing data:", error);
   }
}


initDb();