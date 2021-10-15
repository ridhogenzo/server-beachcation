var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb://127.0.0.1:27017/db_beachcation",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Category",
      "./models/Bank",
      "./models/Item",
      "./models/Feature",
      "./models/Activity",
      "./models/Member",
      "./models/Image",
      "./models/Member",
      "./models/Booking",
      "./models/Users",
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Bank",
        "Item",
        "Member",
        "Item",
        "Feature",
        "Image",
        "Booking",
        "Users",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        name: "Hotel With Seafood Menu",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Hotel Near Beach",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
        name: "Apartment with kitchen",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233") },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      // houses
      // done
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "Hotel Lodge Maribaya",
        price: 750000,
        sumBooking: 2,
        country: "Indonesia",
        city: "Lampung",
        isPopular: false,
        description:
          "The Lodge Camp & Village merupakan penginapan #unik original yang berada di The Lodge Maribaya, terdapat 2 tipe penginapan yaitu Camping dan Joglo, coba serunya menginap dengan suasana hutan juga aktivitas yang tak kalah seru.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08") },
        ],
      },
      // done
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Hotel Trans Resort",
        price: 650000,
        sumBooking: 4,
        country: "Indonesia",
        city: "Bandung",
        isPopular: true,
        description:
          "The Lodge Camp & Village merupakan penginapan #unik original yang berada di The Lodge Maribaya, terdapat 2 tipe penginapan yaitu Camping dan Joglo, coba serunya menginap dengan suasana hutan juga aktivitas yang tak kalah seru.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
      },
    ],
  },
  // end item
  // start image
  {
    model: "Image",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1"),
        imageUrl: "images/featured1.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
        imageUrl: "images/featured2.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
        imageUrl: "images/featured3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
        imageUrl: "images/item-4.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
        imageUrl: "images/featured1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
        imageUrl: "images/featured2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
        imageUrl: "images/featured3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
        imageUrl: "images/item-4.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
        imageUrl: "images/item-1.png",
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
        imageUrl: "images/item-1.png",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
        imageUrl: "images/item-2.png",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
        imageUrl: "images/item-3.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
        imageUrl: "images/item-4.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
        imageUrl: "images/item-1.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
        imageUrl: "images/item-2.png",
      },
    ],
  },
  // end image
  // start feature
  {
    model: "Feature",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01"),
        name: "KingBed Size",
        qty: 1,
        imageUrl: "images/icon1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
        name: "Wifi",
        qty: 1,
        imageUrl: "images/icon2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
        name: "Televison",
        qty: 1,
        imageUrl: "images/icon3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
        name: "",
        qty: 1,
        imageUrl: "images/icon4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
        name: "KingBed Size",
        qty: 1,
        imageUrl: "images/icon1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
        name: "Wifi",
        qty: 1,
        imageUrl: "images/icon2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
        name: "Televison",
        qty: 1,
        imageUrl: "images/icon3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
        name: "Refrigerator",
        qty: 1,
        imageUrl: "images/icon4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: "Activity",
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01"),
        name: "Snorkling",
        type: "Outdoor",
        imageUrl: "images/facilities1.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
        name: "Dog Clubs",
        type: "Adrenaline",
        imageUrl: "images/facilities2.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
        name: "Beautiful View",
        type: "Leisure",
        imageUrl: "images/facilities3.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
        name: "SNorkling",
        type: "Outdoor",
        imageUrl: "images/facilities1.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06"),
        name: "Banana Boat",
        type: "Adrenaline",
        imageUrl: "images/facilities2.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07"),
        name: "Beautiful View",
        type: "Leisure",
        imageUrl: "images/facilities3.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cee1"),
        bookingStartDate: "12-12-2020",
        bookingEndDate: "12-12-2020",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "Hotel Lodge Maribaya",
          price: 750000,
          duration: 2,
        },
        total: 1500000,
        memberId: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        bankId: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        payments: {
          proofPayment: "images/buktibayar.jpg",
          bankFrom: "BCA",
          status: "Proses",
          accountHolder: "ang",
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Ridho",
        lastName: "Hayatullah",
        email: "genzocuy123@gmail.com",
        phoneNumber: "081318609456",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "Yein",
        lastName: "Narayana",
        email: "elfinsanjaya1207@gmail.com",
        phoneNumber: "082377954008",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "Mandiri",
        nomorRekening: "55417158158",
        name: "Ridho Hayatullah",
        imageUrl: "images/logo-mandiri.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "BCA",
        nomorRekening: "55417158",
        name: "Ridho Hayatullah",
        imageUrl: "images/logo-bca.jpg",
      },
    ],
  },
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "admin",
        password: "rahasia",
      },
    ],
  },
];
