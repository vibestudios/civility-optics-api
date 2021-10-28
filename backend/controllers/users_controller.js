import User from '../models/users_model.js'
import asyncHandler from 'express-async-handler'

export const postUser = asyncHandler(async(req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        console.log("User created")
        const token = await user.generateAuthToken()
        console.log("Auth Token Generated")
        // user.sendEmailConfirmation()
        res.status(201).send({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

export const loginUser = asyncHandler(async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

export const getUser = asyncHandler(async(req, res) => {
    // View logged in user profile
    res.send(req.user)
})

export const logoutUser = asyncHandler(async(req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

export const logoutUserAll = asyncHandler(async(req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})