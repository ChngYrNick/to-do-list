import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "tasks", versionKey: false }
);

ObjectId.prototype.valueOf = () => {
  return this.toString();
};

taskSchema.virtual("taskId").get(() => {
  return this._id;
});

taskSchema.set("toJSON", {
  virtuals: true
});

export default mongoose.model("Task", taskSchema);
