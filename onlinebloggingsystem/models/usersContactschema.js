import mongoose from "mongoose";

const usersContactschema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true

        },

        message: {
            type: String,
            required: true,
            trim: true
        },

    },
    { timestamps: true }
);

export default mongoose.model("contactusers", usersContactschema);