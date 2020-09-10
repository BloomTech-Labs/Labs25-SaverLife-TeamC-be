const Profile = require('../profile/profileModel');

function isProfileValid(req, res, Next) {
  const id = req.body.profileId;

  Profile.findById(id)
    .then((results) => {
      if (results.id) {
        return Next();
      } else {
        return res.status(404).json({ message: 'Profile not found!' });
      }
    })
    .catch(() => {
      return res.status(404).json({ message: 'Profile not found!' });
    });
}

module.exports = {
  isProfileValid,
};
