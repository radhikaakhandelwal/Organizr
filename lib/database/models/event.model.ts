import { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string }; // Reference to Category document
  ornanizer: {
    _id: string;
    firstName: string;
    // lastName: string
  }; // Reference to User document (Note: 'ornanizer' might be a typo, maybe you meant 'organizer')
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" }, //This field category will store the ID of a document from the 'Category' collection.
  ornanizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);
export default Event;

// model("Event", EventSchema) - this creates a new model called "Event" using EventSchema.
