var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb+srv://ridhogenzo:Ridhohh123@cluster0.xwevx.mongodb.net/db_beachcation?retryWrites=true&w=majority",
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
        name: "Hotels With Seafood Menu",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Hotels Near Beach",
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
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "Hotel Lodge Maribaya",
        price: 750000,
        sumBooking: 1,
        country: "Indonesia",
        city: "Lampung",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "Malam",
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
        categoryId: "5e96cbe292b97300fc901111",
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Hotel Trans Resort",
        price: 650000,
        sumBooking: 2,
        country: "Indonesia",
        city: "Bandung",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "Malam",
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
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
        title: "Hotel Kempinsky",
        price: 20,
        sumBooking: 3,
        country: "Indonesia",
        city: "Lampung",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "Malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9") },
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
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
        title: "Hotel Nirwana",
        price: 650000,
        sumBooking: 4,
        country: "Indonesia",
        city: "Bandung",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "Malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12") },
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
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
        title: "Hotel Prime",
        price: 20,
        sumBooking: 5,
        country: "Indonesia",
        city: "Makassar",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "Malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15") },
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
        categoryId: "5e96cbe292b97300fc901112",
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
        imageUrl: "images/image-categories1.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
        imageUrl: "images/image-categories2.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
        imageUrl: "images/image-categories3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
        imageUrl: "images/image-categories4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
        imageUrl: "images/image-featured4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
        imageUrl: "images/image-categories5.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
        imageUrl: "images/image-categories6.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8"),
        imageUrl: "images/image-featured1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
        imageUrl: "images/image-featured2.jpg",
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
        imageUrl: "images/image-featured3.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
        imageUrl: "images/most-popular1.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
        imageUrl: "images/most-popular2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
        imageUrl: "images/most-popular3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
        imageUrl: "images/most-popular4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
        imageUrl: "images/most-popular5.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
        imageUrl: "images/image-category-1-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17"),
        imageUrl: "images/image-category-2-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18"),
        imageUrl: "images/image-category-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19"),
        imageUrl: "images/image-category-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20"),
        imageUrl: "images/image-category-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21"),
        imageUrl: "images/image-category-6-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28"),
        imageUrl: "images/image-category-10-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29"),
        imageUrl: "images/image-category-11-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30"),
        imageUrl: "images/image-category-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31"),
        imageUrl: "images/image-category-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32"),
        imageUrl: "images/image-category-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33"),
        imageUrl: "images/image-category-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34"),
        imageUrl: "images/image-category-16-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35"),
        imageUrl: "images/image-category-17-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36"),
        imageUrl: "images/image-category-18-min.jpg",
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
        name: "Kingbed Size",
        qty: 2,
        imageUrl: "images/icon1.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
        name: "Wifi",
        qty: 1,
        imageUrl: "images/icon2.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
        name: "Televison",
        qty: 1,
        imageUrl: "images/icon3.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
        name: "Refrigerator",
        qty: 1,
        imageUrl: "images/icon4.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
        name: "Kingbed Size",
        qty: 2,
        imageUrl: "images/icon1.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
        name: "Wifi",
        qty: 1,
        imageUrl: "images/icon2.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
        name: "Televison",
        qty: 1,
        imageUrl: "images/icon3.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
        name: "Refrigerator",
        qty: 1,
        imageUrl: "images/icon4.jpg",
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
        type: "Diving",
        imageUrl: "images/facilities1.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
        name: "Banana Boat",
        type: "Adrenaline",
        imageUrl: "images/facilities2.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
        name: "Labour and Wait",
        type: "Leisure",
        imageUrl: "images/facilities3.jpg",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
        name: "Snorkling",
        type: "Diving",
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
          accountHolder: "Ridho Hayatullah",
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
        emailAddress: "genzocuy123@gmail.com",
        phoneNumber: "081318609456",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "Jasmine",
        lastName: "Ramadhanti",
        emailAddress: "jasminecuy123@gmail.com",
        phoneNumber: "081845014575",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "Mandiri",
        nomorRekening: "14045",
        name: "Ridho Hayatullah",
        imageUrl: "images/logo bca.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "BCA",
        nomorRekening: "14022",
        name: "Ridho Hayatullah",
        imageUrl: "images/logo mandiri.jpg",
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
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
        username: "superadmin",
        password: "rahasia",
        role: "admin",
      },
    ],
  },
];
