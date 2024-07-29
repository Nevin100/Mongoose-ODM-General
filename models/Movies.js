import mongoose, { Types } from "mongoose";
//Define schema:

const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, //required:-->Must mention a string for the name field & //trim:JS fn to remove empty spaces.
  ratings: { type: Number, required: true, min: 1, max: 5 }, //min:-->minimum rating will be one amd //max:--> maximum rating will be 5
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: [{ type: String }],
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now() } },
  ],
});

//Model: constructor function that represents a collection in MongoDB and defines a schema for each document.
const MovieModel = mongoose.model("Movie", moviesSchema);

const createDoc = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isAcive: true,
      comments: [{ value: "Amazing movie" }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createDoc };

//Document insertion and dropping::-->>
