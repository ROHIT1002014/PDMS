// =const User = require('../models/User')
// const auth = require('../middleware/auth')

module.exports = function(app){

    app.get('/users/login', function(req, res) {
        res.render('userAuth/userLogin.ejs');
    });

    app.post('/users/login', function(req, res) {
        console.log(req.body)
        res.render('base/home.ejs');
    });

    app.get('/users', function(req, res) {
        res.render('userAuth/newUser.ejs');
    });

    app.post('/users', function(req, res) {
        console.log(req.body)
        res.render('base/home.ejs');
    });

// app.post('/users', async (req, res) => {
//     // Create a new user
//     try {
//         const user = new User(req.body)
//         await user.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({ user, token })
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// app.post('/users/login', async(req, res) => {
//     //Login a registered user
//     try {
//         const { email, password } = req.body
//         const user = await User.findByCredentials(email, password)
//         if (!user) {
//             return res.status(401).send({error: 'Login failed! Check authentication credentials'})
//         }
//         const token = await user.generateAuthToken()
//         res.send({ user, token })
//     } catch (error) {
//         res.status(400).send({ error: error.message })
//     }

// })

// app.get('/users/me', auth, async(req, res) => {
//     // View logged in user profile
//     res.send(req.user)
// })

// app.post('/users/me/logout', auth, async (req, res) => {
//     // Log user out of the application
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token != req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// app.post('/users/me/logoutall', auth, async(req, res) => {
//     // Log user out of all devices
//     try {
//         req.user.tokens.splice(0, req.user.tokens.length)
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
};