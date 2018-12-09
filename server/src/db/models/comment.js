const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: { type: String, index: true, required: true },
  repas_id: { type: String, index: true, required: true },
  message: String,
}, { timestamps: true });

commentSchema.toJSON = function comment() {
  return {
    id: this._id,
    user_id: this.user_id,
    repas_id: this.repas_id,
    message: this.message,
    created_at: this.created_at,
  };
};

export default mongoose.model('Comment', commentSchema);
