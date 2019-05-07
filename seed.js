let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedDB(){
  Photo.remove({},function(err){
    if(err){
      console.log(err);
    }
    console.log("removed Photos");
    Photo.create({
      largeImgURL : "/images/Beaches/img_beach_1.JPG",
      smallImgURL : "/images/smallImages/img_beach_small1.JPG",
      fileName: "img_beach_small1.JPG",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Beaches/img_beach_2.JPG",
      smallImgURL : "/images/smallImages/img_beach_small2.JPG",
      fileName: "img_beach_small2.JPG",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Beaches/img_beach_3.JPG",
      smallImgURL : "/images/smallImages/img_beach_small3.JPG",
      fileName: "img_beach_small3.JPG",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Beaches/img_beach_4.JPG",
      smallImgURL : "/images/smallImages/img_beach_small4.JPG",
      fileName: "img_beach_small4.JPG",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Beaches/img_beach_5.JPG",
      smallImgURL : "/images/smallImages/img_beach_small5.JPG",
      fileName: "img_beach_small5.JPG",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Flora/img_flora1.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_1.JPG",
      fileName: "img_flora_small1.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Flora/img_flora2.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_2.JPG",
      fileName: "img_flora_small2.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      largeImgURL : "/images/Flora/img_flora3.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_3.JPG",
      fileName: "img_flora_small3.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      largeImgURL : "/images/Flora/img_flora4.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_4.JPG",
      fileName: "img_flora_small4.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      largeImgURL : "/images/Flora/img_flora5.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_5.JPG",
      fileName: "img_flora_small5.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      largeImgURL : "/images/Food/img_food_1.JPG",
      smallImgURL : "/images/smallImages/img_food_small_1.JPG",
      fileName: "img_food_small1.JPG",
      tag : "food",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Food/img_food_2.JPG",
      smallImgURL : "/images/smallImages/img_food_small_2.JPG",
      fileName: "img_food_small2.JPG",
      tag : "food",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Food/img_food_3.JPG",
      smallImgURL : "/images/smallImages/img_food_small_3.JPG",
      fileName: "img_food_small3.JPG",
      tag : "food",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Food/img_food_4.JPG",
      smallImgURL : "/images/smallImages/img_food_small_4.JPG",
      fileName: "img_food_small4.JPG",
      tag : "food",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Food/img_food_5.JPG",
      smallImgURL : "/images/smallImages/img_food_small_5.JPG",
      fileName: "img_food_small5.JPG",
      tag : "food",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Random/img_random_1.JPG",
      smallImgURL : "/images/smallImages/img_random_small_1.JPG",
      fileName: "img_random_small1.JPG",
      tag : "random",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Random/img_random_2.JPG",
      smallImgURL : "/images/smallImages/img_random_small_2.JPG",
      fileName: "img_random_small2.JPG",
      tag : "random",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Random/img_random_3.JPG",
      smallImgURL : "/images/smallImages/img_random_small_3.JPG",
      fileName: "img_random_small3.JPG",
      tag : "random",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Random/img_random_4.JPG",
      smallImgURL : "/images/smallImages/img_random_small_4.JPG",
      fileName: "img_random_small4.JPG",
      tag : "random",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Random/img_random_5.JPG",
      smallImgURL : "/images/smallImages/img_random_small_5.JPG",
      fileName: "img_random_small5.JPG",
      tag : "random",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Travel/img_travel_1.JPG",
      smallImgURL : "/images/smallImages/img_travel_small_1.JPG",
      fileName: "img_travel_small1.JPG",
      tag : "travel",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Travel/img_travel_2.JPG",
      smallImgURL : "/images/smallImages/img_travel_small_2.JPG",
      fileName: "img_travel_small2.JPG",
      tag : "travel",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Travel/img_travel_3.JPG",
      smallImgURL : "/images/smallImages/img_travel_small_3.JPG",
      fileName: "img_travel_small3.JPG",
      tag : "travel",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Travel/img_travel_4.JPG",
      smallImgURL : "/images/smallImages/img_travel_small_4.JPG",
      fileName: "img_travel_small4.JPG",
      tag : "travel",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Travel/img_travel_5.JPG",
      smallImgURL : "/images/smallImages/img_travel_small_5.JPG",
      fileName: "img_travel_small5.JPG",
      tag : "travel",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Structures/img_structures_1.JPG",
      smallImgURL : "/images/smallImages/img_structures_small_1.JPG",
      fileName: "img_stuctures_small1.JPG",
      tag : "structures",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Structures/img_structures_2.JPG",
      smallImgURL : "/images/smallImages/img_structures_small_2.JPG",
      fileName: "img_stuctures_small2.JPG",
      tag : "structures",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Structures/img_structures_3.JPG",
      smallImgURL : "/images/smallImages/img_structures_small_3.JPG",
      fileName: "img_stuctures_small3.JPG",
      tag : "structures",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Structures/img_structures_4.JPG",
      smallImgURL : "/images/smallImages/img_structures_small_4.JPG",
      fileName: "img_stuctures_small4.JPG",
      tag : "structures",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Structures/img_structures_5.JPG",
      smallImgURL : "/images/smallImages/img_structures_small_5.JPG",
      fileName: "img_stuctures_small5.JPG",
      tag : "structures",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/People/img_people_1.JPG",
      smallImgURL : "/images/smallImages/img_people_small_1.JPG",
      fileName: "img_people_small1.JPG",
      tag : "people",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/People/img_people_2.JPG",
      smallImgURL : "/images/smallImages/img_people_small_2.JPG",
      fileName: "img_people_small2.JPG",
      tag : "people",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/People/img_people_3.JPG",
      smallImgURL : "/images/smallImages/img_people_small_3.JPG",
      fileName: "img_people_small3.JPG",
      tag : "people",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/People/img_people_4.JPG",
      smallImgURL : "/images/smallImages/img_people_small_4.JPG",
      fileName: "img_people_small4.JPG",
      tag : "people",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/People/img_people_5.JPG",
      smallImgURL : "/images/smallImages/img_people_small_5.JPG",
      fileName: "img_people_small5.JPG",
      tag : "people",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Lights/img_lights_1.JPG",
      smallImgURL : "/images/smallImages/img_lights_small_1.JPG",
      fileName: "img_lights_small1.JPG",
      tag : "lights",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Lights/img_lights_2.JPG",
      smallImgURL : "/images/smallImages/img_lights_small_2.JPG",
      fileName: "img_lights_small2.JPG",
      tag : "lights",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Lights/img_lights_3.JPG",
      smallImgURL : "/images/smallImages/img_lights_small_3.JPG",
      fileName: "img_lights_small3.JPG",
      tag : "lights",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Lights/img_lights_4.JPG",
      smallImgURL : "/images/smallImages/img_lights_small_4.JPG",
      fileName: "img_lights_small4.JPG",
      tag : "lights",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Lights/img_lights_5.JPG",
      smallImgURL : "/images/smallImages/img_lights_small_5.JPG",
      fileName: "img_lights_small5.JPG",
      tag : "lights",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/GoldenHour/img_golden_1.JPG",
      smallImgURL : "/images/smallImages/img_golden_small_1.JPG",
      fileName: "img_golden_small5.JPG",
      tag : "golden",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/GoldenHour/img_golden_2.JPG",
      smallImgURL : "/images/smallImages/img_golden_small_2.JPG",
      fileName: "img_golden_small2.JPG",
      tag : "golden",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/GoldenHour/img_golden_3.JPG",
      smallImgURL : "/images/smallImages/img_golden_small_3.JPG",
      fileName: "img_golden_small3.JPG",
      tag : "golden",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/GoldenHour/img_golden_4.JPG",
      smallImgURL : "/images/smallImages/img_golden_small_4.JPG",
      fileName: "img_golden_small4.JPG",
      tag : "golden",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/GoldenHour/img_golden_5.JPG",
      smallImgURL : "/images/smallImages/img_golden_small_5.JPG",
      fileName: "img_golden_small5.JPG",
      tag : "golden",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Beach","Sea","Dusk","Dawn","Sand"],
      latitude:12.8913,
      longitude: 74.8139,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
  });
}

module.exports = seedDB;
