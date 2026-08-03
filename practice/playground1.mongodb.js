
use('LearnDatabase');

// Insert a few documents into the Practice collection.
db.getCollection('Learn').insertMany([

  {
    "name": "Node",
    "price": 2000
  },
  {
    "name": "Express",
    "price": 1500
  },
  {
    "name": "MongoDB",
    "price": 2500
  },
  {
    "name": "React",
    "price": 3000
  },
  {
    "name": "JavaScript",
    "price": 1800
  },
  {
    "name": "TypeScript",
    "price": 2200
  },
  {
    "name": "Next.js",
    "price": 3500
  },
  {
    "name": "Tailwind CSS",
    "price": 1200
  },
  {
    "name": "Docker",
    "price": 4000
  },
  {
    "name": "Kubernetes",
    "price": 5500
  }

]);


// Print a message to the output window.
console.log(`Done inserting data.`);

