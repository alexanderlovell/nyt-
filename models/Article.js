var mongoose = require("mongoose");

// Save a reference to the Schema constructor!
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// think like sequelize
var ArticleSchema = new Schema({
  title: {
    type: String
  },
  link: {
    type: String
  },
  summary: {
    type: String
  },
  saved: {
    type: Boolean,
    default: false
  },

// populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// use mongoose's model method to create model from above schema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;