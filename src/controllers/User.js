import User from '../models/user.js'
import { createError } from "../utils/error.js"
import bcrypt from 'bcrypt'

//GET 
export const getUser = async (req, res, next) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)

        if(user)
        {
            const {password, ...otherDetails} = user._doc
            res.status(200).json(otherDetails)
        }
        else
        {
            res.status(404).json("User not found")
        }

    } catch (err) {
        next(err)
    }
}
//UPDATE
export const updateUser = async (req, res, next) => {
    const id = req.params.id
    const {updateUserId, updateUserStatus, password} = req.body

    if(id === updateUserId || updateUserStatus)
    {
        try {

            if(password)
            {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await User.findByIdAndUpdate(
                id,
                {$set: req.body},
                {new: true}
            )
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    else
    {
        res.status(403).json("Unauthorized")
    }

}

//DELETE
export const deleteUser = async (req, res, next) =>{
    const id = req.params.id
    const {deleteUserId, deleteUserStatus} = req.body

    if(deleteUserId === id || deleteUserStatus)
    {
        try {
            await User.findByIdAndDelete(id)
            res.status(200).json("User has been deleted")
        } catch (err) {
            next(err)
        }
    }
    else
    {
        res.status(403).json("Unauthorized")
    }
}

//FOLLOW A USER
export const followUser = async (req, res, next) => {
    const id = req.params.id
    const {currentUserId} = req.body

    if(currentUserId === id)
    {
        res.status(403).json("Action forbidden!!!")
    }
    else
    {
        try {
            const followUser = await User.findById(id)
            const followingUser = await User.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$push : {followers: currentUserId}})
                await followingUser.updateOne({$push : {following: id}})

                res.status(200).json("Follow successful")
            }
            else
            {
                res.status(403).json("You have followed this user")
            }
        } catch (err) {
            next(err)
        }
    }
}

//UNFOLLOW A USER
export const UnFollowUser = async (req, res, next) => {
    const id = req.params.id
    const {currentUserId} = req.body

    if(currentUserId === id)
    {
        res.status(403).json("Action forbidden!!!")
    }
    else
    {
        try {
            const followUser = await User.findById(id)
            const followingUser = await User.findById(currentUserId)

            if(followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$pull : {followers: currentUserId}})
                await followingUser.updateOne({$pull : {following: id}})

                res.status(200).json("Unfollow successful")
            }
            else
            {
                res.status(403).json("You have not follow this user")
            }
        } catch (err) {
            next(err)
        }
    }
}