
const Profile = require('../profile/profileModel')

function isProfileValid(req, res, Next){
    // console.log(req)
    id = req.body.profileId
    // console.log(id)
    Profile.findById(id)
        .then((results) => {
            if(results.id) {
                return Next()
            } else {
                return res.status(404).json({message: "Profile not found!"})
            }
        })
        .catch(() => {
            return res.status(404).json({message: "Profile not found!"})
        })
        
    
}

module.exports = {
    isProfileValid
}