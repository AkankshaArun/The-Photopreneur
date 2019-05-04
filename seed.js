let mongoose = require("mongoose");
let Photo    = require("./models/photo");
let Comment    = require("./models/comment");

//Removing photos
function seedDB(){
  Photo.remove({},function(err){
    if(err){
      console.log(err);
    }
    console.log("removed Photos")
    Photo.create({
      smallImgURL : "/images/home/PeopleH.JPG",
      fileName: "PeopleH.JPG",
      tag : "people",
      orientation: true,
      like : 0,
      views :0,
      latitude:12.359080,
      longitude: 76.593223,
      tags: ["Window","People","Dark"],
      imgType: "JPG",
      description : "This is a People Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });

    Photo.create({
      smallImgURL : "/images/home/RandomH.jpg",
      fileName: "RandomH.jpg",
      tag : "random",
      orientation: false,
      like : 0,
      views :0,
      latitude:12.359080,
      longitude: 76.593223,
      tags: ["Table","Chair","Random"],
      imgType: "JPG",
      description: "This is a random Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/home/FloraH.jpg",
      fileName: "FloraH.jpg",
      tag : "floraFauna",
      orientation: false,
      like : 0,
      views :0,
      latitude:12.359080,
      longitude: 76.593223,
      tags: ["Flower","Tree","Leaves"],
      imgType: "JPG",
      description: "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/home/FoodH.jpg",
      fileName: "FoodH.jpg",
      tag : "food",
      orientation: false,
      like : 0,
      views :0,
      latitude:12.359080,
      longitude: 76.593223,
      tags: ["Food","Pastry","Cake"],
      imgType: "JPG",
      description: "This is a food Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/home/ArchitectureH.JPG",
      fileName: "ArchitectureH.JPG",
      tag : "architectural",
      orientation: true,
      like : 0,
      views :0,
      latitude:12.359080,
      longitude: 76.593223,
      tags: ["Building","Structure","Glass"],
      imgType: "JPG",
      description: "This is a architectural Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/home/GoldenH.JPG",
      fileName: "GoldenH.JPG",
      tag : "goldenHour",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a goldenHour Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/smallImages/1Beach-Small.jpg",
      fileName: "1Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/smallImages/2Beach-Small.jpg",
      fileName: "2Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/smallImages/3Beach-Small.jpg",
      fileName: "3Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/4Beach-Small.jpg",
      fileName: "4Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/5Beach-Small.jpg",
      fileName: "5Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/6Beach-Small.jpg",
      fileName: "6Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/7Beach-Small.jpg",
      fileName: "7Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/8Beach-Small.jpg",
      fileName: "8Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/9Beach-Small.jpg",
      fileName: "9Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/10Beach-Small.jpg",
      fileName: "10Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/11Beach-Small.jpg",
      fileName: "11Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/12Beach-Small.jpg",
      fileName: "12Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/13Beach-Small.jpg",
      fileName: "13Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/14Beach-Small.jpg",
      fileName: "14Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/15Beach-Small.jpg",
      fileName: "15Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/16Beach-Small.jpg",
      fileName: "16Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/17Beach-Small.jpg",
      fileName: "17Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/18Beach-Small.jpg",
      fileName: "18Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/19Beach-Small.jpg",
      fileName: "19Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/20Beach-Small.jpg",
      fileName: "20Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/21Beach-Small.jpg",
      fileName: "21Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/22Beach-Small.jpg",
      fileName: "22Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });
    Photo.create({
      smallImgURL : "/images/smallImages/23Beach-Small.jpg",
      fileName: "23Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/24Beach-Small.jpg",
      fileName: "24Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/25Beach-Small.jpg",
      fileName: "25Beach-Small.jpg",
      tag : "beach",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Beach Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/1Flora-Small.jpg",
      fileName: "1Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/2Flora-Small.jpg",
      fileName: "2Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/3Flora-Small.jpg",
      fileName: "3Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/4Flora-Small.jpg",
      fileName: "4Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/5Flora-Small.jpg",
      fileName: "5Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/6Flora-Small.jpg",
      fileName: "6Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/7Flora-Small.jpg",
      fileName: "7Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/8Flora-Small.jpg",
      fileName: "8Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/9Flora-Small.jpg",
      fileName: "9Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/10Flora-Small.jpg",
      fileName: "10Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/11Flora-Small.jpg",
      fileName: "11Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/12Flora-Small.jpg",
      fileName: "12Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/13Flora-Small.jpg",
      fileName: "13Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/14Flora-Small.jpg",
      fileName: "14Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/15Flora-Small.jpg",
      fileName: "15Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/16Flora-Small.jpg",
      fileName: "16Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/17Flora-Small.jpg",
      fileName: "17Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/18Flora-Small.jpg",
      fileName: "18Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/19Flora-Small.jpg",
      fileName: "19Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/20Flora-Small.jpg",
      fileName: "20Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/21Flora-Small.jpg",
      fileName: "21Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/22Flora-Small.jpg",
      fileName: "22Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/23Flora-Small.jpg",
      fileName: "23Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/24Flora-Small.jpg",
      fileName: "24Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/25Flora-Small.jpg",
      fileName: "25Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/26Flora-Small.jpg",
      fileName: "26Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/27Flora-Small.jpg",
      fileName: "27Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/28Flora-Small.jpg",
      fileName: "28Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/29Flora-Small.jpg",
      fileName: "29Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/30Flora-Small.jpg",
      fileName: "30Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/31Flora-Small.jpg",
      fileName: "31Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/32Flora-Small.jpg",
      fileName: "32Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/33Flora-Small.jpg",
      fileName: "33Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/34Flora-Small.jpg",
      fileName: "34Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/35Flora-Small.jpg",
      fileName: "35Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/36Flora-Small.jpg",
      fileName: "36Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/37Flora-Small.jpg",
      fileName: "37Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/38Flora-Small.jpg",
      fileName: "38Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/39Flora-Small.jpg",
      fileName: "39Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/40Flora-Small.jpg",
      fileName: "40Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/41Flora-Small.jpg",
      fileName: "41Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/42Flora-Small.jpg",
      fileName: "42Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/43Flora-Small.jpg",
      fileName: "43Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/44Flora-Small.jpg",
      fileName: "44Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/45Flora-Small.jpg",
      fileName: "45Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/46Flora-Small.jpg",
      fileName: "46Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/47Flora-Small.jpg",
      fileName: "47Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/48Flora-Small.jpg",
      fileName: "48Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/49Flora-Small.jpg",
      fileName: "49Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/50Flora-Small.jpg",
      fileName: "50Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/51Flora-Small.jpg",
      fileName: "51Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/52Flora-Small.jpg",
      fileName: "52Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/53Flora-Small.jpg",
      fileName: "53Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/54Flora-Small.jpg",
      fileName: "54Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/55Flora-Small.jpg",
      fileName: "55Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/56Flora-Small.jpg",
      fileName: "56Flora-Small.jpg",
      tag : "floraFauna",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Flora & Fauna Image"
    },function(err,added){
      if (err) {
        console.log(err);
      }else {
        console.log(added);
      }
    });    Photo.create({
      smallImgURL : "/images/smallImages/1Food-Small.jpg",
      fileName: "1Food-Small.jpg",
      tag : "food",
      orientation: true,
      like : 0,
      views :0,
      tags: ["Dawn","Dusk","Sun"],
      latitude:12.359080,
      longitude: 76.593223,
      imgType: "JPG",
      description : "This is a Food Image"
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
