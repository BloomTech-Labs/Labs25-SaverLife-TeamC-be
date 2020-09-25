const express = require('express');
const authRequired = require('../middleware/authRequired');
const GoalProgress = require('./goalProgressModel');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Goal Progess route success',
  });
});

// add a new goal progress
router.post('/', authRequired, (req, res) => {
  const gp = req.body;

  GoalProgress.addGoalProgress(gp)
    .then(() => {
      res.status(201).json({ message: 'Goal Progress added successfully' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Sorry, could not add Goal Progress', err });
    });
});

// get goal progress by profile id
router.get('/profile/:profileId', authRequired, (req, res) => {
  const { profileId } = req.params;
  GoalProgress.findGoalProgressByProfileId(profileId)
    .then((goalprogress) => {
      if (goalprogress.length > 0) {
        res.status(200).json(goalprogress);
      } else {
        res
          .status(404)
          .json({ message: 'Sorry, could not find user with given id' });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
});

// get total saved for a specific user
router.get('/profile/totalSaved/:profileId', authRequired, (req, res) => {
  const { profileId } = req.params;
  GoalProgress.getTotalSaved(profileId)
    .then((totalSaved) => {
      if (totalSaved) {
        res.status(200).json(totalSaved);
      } else {
        res.status(404).json({
          message: 'Sorry, could not find a goal progress for this user',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
});

// get a specific goal progress
router.get('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  GoalProgress.getGoalProgressById(id)
    .then((goal) => {
      if (goal !== undefined) {
        return res.status(200).json(goal);
      } else {
        return res
          .status(404)
          .json({ message: 'Sorry, no goal progress with that ID found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// edit a specific goal progress
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  GoalProgress.getGoalProgressById(id)
    .then((goal) => {
      if (goal) {
        GoalProgress.editGoalProgress(changes, id).then((edit) => {
          res.status(200).json(edit);
        });
      } else {
        res.status(404).json({ message: 'Sorry, Goal Progress not found' });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'Sorry, could not update this Goal Progress' });
    });
});

// delete a goal progress
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  GoalProgress.deleteGoalProgress(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({
          message: 'Sorry, could not find Goal Progress with that ID',
        });
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Sorry, could not delete Goal Progress' });
    });
});

module.exports = router;
