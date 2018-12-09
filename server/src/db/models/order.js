const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  iduser: { type: String, index: true, required: true },
  idrepas: { type: String, index: true, required: true },
  total: Number,
  quantite: Number,
}, { timestamps: true });

orderSchema.toJSON = function order() {
  return {
    id: this._id,
    iduser: this.iduser,
    idrepas: this.idrepas,
    total: this.total,
    quantite: this.quantite,
  };
};

export default mongoose.model('Order', orderSchema);
