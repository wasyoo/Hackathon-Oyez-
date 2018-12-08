const mongoose = require('mongoose');

const repasSchema = new mongoose.Schema({
  name: String,
  qtt: Number,
  description: String,
  price: Number,
  image: String
}, { timestamps: true });
repasSchema.toJSON = function repas() {
  return {
    id: this._id,
    name: this.name,
    qtt: this.qtt,
    price: this.price,
    image: this.image,
  };
};

export default mongoose.model('Repas', repasSchema);