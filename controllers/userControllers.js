import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwtIssuer from "./../helpers/jwtIssuer.js";
import generateRobohashAvatar from "../helpers/avatar.js";

/**
 * Task 7
 * Controller method to register user
 * @param {*} req
 * @param {*} res
 * @returns
 */

export const register = async (req, res) => {
  const { username, firstname, lastname, password, messages } = req.body;

  const ip = req.ip;
  const avatar = generateRobohashAvatar();

  
  const newUsername = await User.findOne({ username: username });
  

  try {
    if (newUsername) {
      return res
        .status(400)
        .json({ message: "Username already exist", username: username });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      firstname,
      lastname,
      ip,
      hash,
      avatar,
      messages
    });
    return res
      .status(200)
      .json({ message: "User was created", createdUser: newUser});
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error });
  }
};

/**
 * Controller method to login the user.
 * @param {*} req
 * @param {*} res
 */

// const getHash = async (password) => {
//   let hash;

//   await bcrypt.hash(password, 10).then((response) => (hash = response));
//   return hash;
// };

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //check if there's a password
    if (!password) {
      return res.status(400).json({ message: "No password supplied" });
    }

    const user = await User.findOne({ username: username });

    if (user === null) {
      return res.status(400).json({ message: "No user found" });
    }

    const checkPassword = await bcrypt.compare(password, user.hash);

    if (checkPassword) {
      console.log("Congratulation! authenticated🐵 ");
      const token = await jwtIssuer.issueToken(user);
      // return res.status(200).json({message:'You are authenticated!', user: user, token:token});

      return res.status(200).cookie("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    .json({
        message:'Login successful'
    });

      // return res.status(200).json({
      //   message: "Login successful",
      //   user: user,
      // });
    } else {
      return res.status(400).json({ message: "Passwords not matching" });
    }
  } catch (error) {
    return res.status(400).json({ message: "General error upon signing in." });
  }
};

export const getUserList = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 }).limit(6);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error });
  }
};

export const logout = async(req, res) => {
  //remove the httponly cookie
  res.clearCookie("jwt",{
      httpOnly:true,
      secure:false,
      sameSite:"lax"
  })
  .json({message:'You are logged out.'})
}

/**
 * Controller method to get the user profile
 * @param {*} req 
 * @param {*} res 
 */
 export const getProfile = async(req, res) => {
  return res.status(200).json({profile:req.user});
}