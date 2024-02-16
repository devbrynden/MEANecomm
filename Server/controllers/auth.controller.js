/**
 * auth.controller.js
 * @author Brynden "devbrynden" Bielefeld (2024)
 * 
 * Contains logic for creating new account, logging in and logging out.
 */
const userModel = require("../models/user.model");
const bcrypt    = require("bcrypt");

let createUser = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname  = req.body.lastname;
    const email     = req.body.email;
    const password  = req.body.password;

    // Ideally the client-side won't submit a request without this information, but this is a ghetto way to verify we have everything we need.
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({
            "message": "Missing required information!"
        });
    }

    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const createdUser = await userModel.create({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": encryptedPassword
        });

        console.log(createdUser);

        res.status(201).json({
            "message": "New user created!"
        });
    } catch (err) {
        res.status(500).json({
            "message": err.message
        });
    }
};

let loginUser = async (req, res) => {
    const email    = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({
            "message": "Missing required information!"
        });
    }

    try {
        const user = await userModel.findOne({"email": email}).exec();
        
        if (user) {
            var passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                res.status(201).json({
                    "message": "Logged in!"
                });
            } else {
                res.status(400).json({
                    "message": "Incorrect password!"
                });
            }
        } else {
            res.status(400).json({
                "message": "No account found."
            });
        }
    } catch (err) {
        res.status(500).json({
            "message": err.message
        });
    }
};

module.exports = {
    createUser: createUser,
    loginUser: loginUser
};