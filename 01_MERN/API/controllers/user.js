import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs'
// user register
export const register = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (user) return res.json({
            message: 'User Already Register', success: false
        })
        let hasPassword = await bcrypt.hash(password, 10)
        user = await User.create({ name, email, phone, password: hasPassword });
        res.json({ message: 'User Register Successfully', user, success: true })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}

// user login
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (!user) return res.json({ message: 'User not exist', success: false });
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) return res.json({ message: 'Invalid Credentials' })
        res.json({ message: `Welcome ${user.name} Login Successfull`, success: true })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}


// forgot password