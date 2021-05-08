//Asynchronous code:
//This is the code needed to run on an external service

const airtable = require('airtable');

//Lookup the courses your enrolled in based on your name
function fetchCoursesByName(name, callback) {

//show the code that operates here
callback(coursesArr);

}

//returns array of your schedule on a day
function fetchScheduleByDay(courses, day, callback) {

//show the code that operates here
callback(scheduleArr);

}

function testCode(name, day, callback)
{
 fetchMajorbyName(name, (major) => {
   console.log('Your name is ' + name);
   fetchCoursesByName(name, (uggabugga) => {
     console.log('Your courses are ' + uggabugga);
     fetchScheduleByDay(uggabugga, day, (schedule) => {
        console.log('Your schedule is ' + schedule);
        callback(schedule);
     });
   });
 });
}

function main(params) {
  return new Promise((resolve, reject) => {
    params.name = "Bob"
    params.day = "Wednesday";
    testCode(params.name, params.day, (schedule)=> {
      resolve(schedule);
    });
  }).then((data)=>{
    console.log("The promise has been resolved");
    return data;
  });
}
