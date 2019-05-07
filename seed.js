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
      tags: ["Beach","Sea","Dusk","Dawn","Sand","Plant"],
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
      tags: ["Beach","Sand","Shell"],
      latitude:12.8054,
      longitude: 74.8602,
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
      tags: ["Beach","Sea","Dusk","Dawn","Sand","Stones","Tree"],
      latitude:12.8054,
      longitude: 74.8602,
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
      tags: ["Beach","Stones","Sand"],
      latitude:12.8054,
      longitude: 74.8602,
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
      tags: ["Trees","Sky","Building","Flowers"],
      latitude:13.044831,
      longitude: 77.622109,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });Photo.create({
      largeImgURL : "/images/Flora/img_flora6.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_6.JPG",
      fileName: "img_flora_small6.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Trees","Grass","Flowers"],
      latitude:12.9763,
      longitude: 77.5929,
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
      tags: ["Trees","Sky","Building","Flowers"],
      latitude:13.044831,
      longitude: 77.622109,
      imgType: "JPG"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      largeImgURL : "/images/Flora/img_flora7.JPG",
      smallImgURL : "/images/smallImages/img_flora_small_7JPG",
      fileName: "img_flora_small7.JPG",
      tag : "nature",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Plants","Flowers"],
      latitude:12.9763,
      longitude: 77.5929,
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
      tags: ["Trees","Sky","Flowers"],
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
      tags: ["Drink","CorkTail","Glass"],
      latitude:12.8860,
      longitude: 74.8408,
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
      tags: ["Container","wood"],
      latitude:12.8860,
      longitude: 74.8408,
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
      tags: ["Patato Chips","Plate","Toast","Vegetable"],
      latitude:12.9141,
      longitude: 74.8560,
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
      tags: ["Chicken","Plate","Rice","Vegetable"],
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
      tags: ["Chicken","Plate","Fork","Vegetable","Bread"],
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
      tags: ["Colors","Bluiding","Wood"],
      latitude:12.9141,
      longitude: 74.8560,
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
      tags: ["Fountain","Water","Trees"],
      latitude:12.9048,
      longitude: 76.6394,
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
      tags: ["Art","Creativity","Statue","Colors"],
      latitude:12.2753,
      longitude: 76.6701,
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
      tags: ["Art","Creativity","Statue","Colors","Bangles"],
      latitude:12.2753,
      longitude: 76.6701,
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
      tags: ["Sky","Blue"],
      latitude:12.2753,
      longitude: 76.6701,
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
      tags: ["Trees","Statue","Clouds","Sky"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Leaves","Statue"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Tower","Trees","Dusk","Dawn","Orange"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Gate","Iron"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Mountain","Trees","Leaves","Green"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Building","Sky","Trees","Road"],
      latitude:13.044831,
      longitude: 77.622109,
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
      tags: ["Building","Sky","Trees","Road"],
      latitude:13.044831,
      longitude: 77.622109,
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
      tags: ["Building","Architecture","Plants","Road"],
      latitude:12.9048,
      longitude: 74.8364,
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
      tags: ["Building","Architecture","Plants","Road"],
      latitude:12.9048,
      longitude: 74.8364,
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
      tags: ["Trees","Sky"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Girl","Jacket","Happy"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Flowers","Road","Trees"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Yellow","Reflection","Lights","Orange","Tiles"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Girl","Shadow","Reflection","Pillar","Tiles"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Photography","Tiles"],
      latitude:13.3702,
      longitude: 77.6835,
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
      tags: ["Red","Black"],
      latitude:12.9141,
      longitude: 74.8560,
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
      tags: ["Black","Lines"],
      latitude:12.9141,
      longitude: 74.8560,
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
      tags: ["Black"],
      latitude:12.8860,
      longitude: 74.8408,
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
      tags: ["Black"],
      latitude:12.8860,
      longitude: 74.8408,
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
      tags: ["Black","Lines","Yellow","Hexagonal"],
      latitude:13.0055,
      longitude: 77.5692,
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
      tags: ["Trees","Sun","clouds","birds","sky"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Trees","Sun","Leaves","sky"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Trees","Sun","clouds","sky"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Orange","Sky","Leaves","Trees"],
      latitude:12.9763,
      longitude: 74.5929,
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
      tags: ["Trees","Sun","Sky"],
      latitude:12.9763,
      longitude: 74.5929,
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
