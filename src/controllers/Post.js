import Post from '../models/post.js'
import { createError } from '../utils/error.js'
import mongoose from 'mongoose'
//CREATE 
export const createPost = async (req, res, next) => {
    const newPost = new Post(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post created")
    } catch (err) {
        next(err)
    }
}
//GET A POST
export const getPost = async (req, res, next) => {
    const id = req.params.id
    try {
        const post = await Post.findById(id)
        res.status(200).json(post)
        
    } catch (err) {
        next(err)
    }
}

//UPDATE
export const updatePost = async (req, res, next) =>{
    const postId = req.params.id
    const {userId} = req.body
    try {
        const post = await Post.findById(postId)
        if(post.userId === userId)
        {
            await post.updateOne({ $set: req.body })
            res.status(200).json("Update successful")
        }
        else
        {
            res.status(403).json("Unauthorized")
        }
    } catch (err) {
        next(err)
    }
}

//DELETE
export const deletePost = async (req, res, next) =>{
    const postId = req.params.id
    const {userId} = req.body

    try {
        const post = await Post.findById(postId)
        if(post.userId === userId)
        {
            await post.deleteOne()
            res.status(200).json("Deleted successful")
        }
        else
        {
            res.status(403).json("Unauthorized")
        }
    } catch (err) {
        next(err)
    }
}

//LIKE-DISLIKE
export const likePost = async (req, res, next) =>{
    const postId = req.params.id
    const {userId} = req.body 

    try {
        const post = await Post.findById(postId)
        if(!post.likes.includes(userId))
        {
            await post.updateOne({$push: { likes: userId }})
            res.status(200).json("Post liked")
        }
        else
        {
            await post.updateOne({$pull: { likes: userId }})
            res.status(200).json("Post disliked")
        }
    } catch (err) {
        next(err)
    }
}