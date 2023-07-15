import User from "../models/user.model.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const { userName, email, password} = req.body;

   try {
        //buscar usuario por correo 
        const userFound = await User.findOne({ email});
        if(userFound) return res.status(400).json("Usuario en uso");

        //hashing de la contraseña
        const passwordHash = await bcrypt.hash(password,  Number.parseInt(process.env.JWT_ROUNDS));


        const newUser = new User({
        userName,
        email,
        password: passwordHash
        });

        const userSaved = await newUser.save();


        //creación del TOKEN
        const token = await jwt.sign({id: userSaved._id}, process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES} );

        res.cookie("token", token,{
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
        })

        res.status(201).json({
        id: userSaved._id,
        userName: userSaved.userName,
        email: userSaved.email
        });
   } catch (error) {
        console.log(error);
        return res.status(500).json( "Error del servidor");
   }
    
}
export const login = async () => {
    console.log("login");
}
export const logout = async () => {
    console.log("logout");
}