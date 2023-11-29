import mongoose, { Schema } from "mongoose"

const BlogPostSchema = new Schema({
    category: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    readTime: {
        value: Number,
        unit: String,
    },
    author: {
        name: {
            type: String,
            required: true,
        }, //nome dell’autore,
        avatar: {
            type: String,
        }, //immagine dell’autore
    },
    content: {
        type: String,
        required: true,
    },
})

export const BlogPost = mongoose.model("blogposts", BlogPostSchema)
