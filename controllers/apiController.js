const Item = require("../models/Item");
const Hotels = require("../models/Activity");
const Traveler = require("../models/Booking");
const Category = require("../models/Category");
const Bank = require("../models/Bank");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPopular = await Item.find()
        .select("_id title country city price unit imageId")
        .limit(5)
        .populate({ path: "imageId", select: "_id imageUrl" });

      const category = await Category.find()
        .select("_id name")
        .limit(3)
        .populate({
          path: "itemId",
          select: "_id title country city isPopular imageId",
          perDocumentLimit: 4,
          option: { sort: { sumBooking: -1 } },
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
        });

      const traveler = await Traveler.find();
      const hotel = await Hotels.find();
      const beach = await Item.find();

      for (let i = 0; i < category.length; i++) {
        for (let x = 0; x < category[i].itemId.length; x++) {
          const item = await Item.findOne({ _id: category[i].itemId[x]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[x]) {
            item.isPopular = true;
            await item.save();
          }
        }
      }

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial.jpg",
        name: "Happy Family",
        rate: 4.8,
        content:
          "TEMPATNYA INDAH, DENGAN PEMANDANGAN YANG BAGUS. SAYA MEREKOMENDASIKAN ...",
        familyName: "Jasmine Ramadhanti",
        familyOccupation: "Make Up Artist",
      };

      res.status(200).json({
        hero: {
          travelers: traveler.length,
          hotels: hotel.length,
          beach: beach.length,
        },
        mostPopular,
        category,
        testimonial,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Gateway Error" });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({ path: "featureId", select: "_id name qty imageUrl" })
        .populate({ path: "activityId", select: "_id name type imageUrl" })
        .populate({ path: "imageId", select: "_id imageUrl" });

      const bank = await Bank.find();
      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial.jpg",
        name: "Happy Family",
        rate: 4.8,
        content:
          "TEMPATNYA INDAH, DENGAN PEMANDANGAN YANG BAGUS. SAYA MEREKOMENDASIKAN ...",
        familyName: "Jasmine Ramadhanti",
        familyOccupation: "Make Up Artist",
      };
      res.status(200).json({
        ...item._doc,
        bank,
        testimonial,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Gateway Error" });
    }
  },

  bookingPage: async (req, res) => {
    const {
      idItem,
      duration,
      price,
      bookingDateStart,
      bookingDateEnd,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      accountHolder,
      bankFrom,
    } = req.body;
    if (!req.file) {
      return res.status(404).json({ message: "Image not found " });
    }
    if (
      idItem === "" ||
      duration === "" ||
      price === "" ||
      bookingDateStart === "" ||
      bookingDateEnd === "" ||
      firstName === "" ||
      lastName === "" ||
      emailAddress === "" ||
      phoneNumber === "" ||
      accountHolder === "" ||
      bankFrom === ""
    ) {
      res.status(404).json({ message: "Lengkapi semua field" });
    }

    res.status(201).json({ message: "Success Booking " });
  },
};
