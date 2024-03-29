const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide a product name"] },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

// const UserSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     username: { type: String, required: true },
//     email: { type: String, unique: true, require: true },
//     password: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// UserSchema.methods.isCorrectPassword = async function (password) {
//   return await bcrypt.compare(
//     password, // provided by user when logging in
//     this.password // stored in database
//   );
// };

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

// // Hash the plain text password before saving it to the database
// UserSchema.pre("save", async function (next) {
//   if (!this.isNew || this.skipPasswordHash) {
//     next();
//   } else {
//     const hashedPassword = await bcrypt.hash(this.password, SALT_ROUNDS);
//     this.password = hashedPassword;
//     this.skipPasswordHash = true;
//     next();
//   }
// });
