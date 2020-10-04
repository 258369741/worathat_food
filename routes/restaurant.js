const express = require("express");
const router = express.Router();
const myData = require("../data");

//http://localhost:3000/api/
router.get('/', (req,res) => {
    res.send('<h1>Hello Restaurant API<h1>');
});

//http://localhost:3000/api/restaurants
router.get("/restaurants", (req, res) => {
    res.json(myData);
  });
  

//http://localhost:3000/api/restaurants/1
router.get("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurant = myData.find((restaurant) => restaurant.id === restaurantId);
    res.json(restaurant);
  });
  

//http://localhost:3000/api/restaurants
router.post("/restaurants", (req, res) => {
    const newRestaurant = {
      ...req.body
    };
    myData.push(newRestaurant);
    res.json(newRestaurant);
  });
  

//http://localhost:3000/api/restaurants/1
router.put("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = myData.findIndex((restaurant) => restaurant.id === restaurantId);
    const updatedRestaurant = {
      id:restaurantId,
      ...req.body
    };
    myData[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
  });
  

//http://localhost:3000/api/restaurants/1
router.delete("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = myData.findIndex((restaurant) => restaurant.id === restaurantId);
    myData.splice(restaurantIndex,1);
    res.sendStatus(204);
  });
module.exports = router;
