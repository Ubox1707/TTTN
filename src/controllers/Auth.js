import User from '../models/user.js'
import bcrypt from "bcrypt";
import { createError } from '../utils/error.js'

// REGISTER
export const register = async (req, res, next) => {
  const { username, nickname, password, email  } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    nickname,
    password: hashedPass, 
    email,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    next(err)
  }
};


// LOGIN

export const login = async (req, res, next) => {
    const {username, password} = req.body

    try {
        const user = await User.findOne({username: username})


        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)


            validity? res.status(200).json(user): res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User does not exists")
        }
    } catch (err) {
        next(err);
    }
}