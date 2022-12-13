const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },

  email: { type: String, required: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: new Date(),
    required:true
  },
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
