const Tutorial = require('../models/tutorial-model')

createTutorial = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a tutorial',
        })
    }

    const tutorial = new Tutorial(body)

    if (!tutorial) {
        return res.status(400).json({ success: false, error: err })
    }

    tutorial
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tutorial._id,
                title: tutorial.title,
                description: tutorial.description,
                message: 'Tutorial created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tutorial not created!',
            })
        })
}

updateTutorial = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Tutorial.findOne({ _id: req.params.id }, (err, tutorial) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Tutorial not found!',
            })
        }
        tutorial.title = body.title
        tutorial.description = body.description
        tutorial.published = body.published
        tutorial
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tutorial._id,
                    message: 'Tutorial updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Tutorial not updated!',
                })
            })
    })
}

deleteTutorial = async (req, res) => {
    await Tutorial.findOneAndDelete({ _id: req.params.id }, (err, tutorial) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tutorial) {
            return res
                .status(404)
                .json({ success: false, error: `Tutorial not found` })
        }

        return res.status(200).json({ success: true, data: tutorial })
    }).catch(err => console.log(err))
}

deleteAllTutorials = async(req, res) => {
    await Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
}

getTutorialById = async (req, res) => {
    await Tutorial.findOne({ _id: req.params.id }, (err, tutorial) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tutorial) {
            return res
                .status(404)
                .json({ success: false, error: `Tutorial not found` })
        }
        return res.status(200).json({ success: true, data: tutorial })
    }).catch(err => console.log(err))
}

getTutorials = async (req, res) => {
    await Tutorial.find({}, (err, tutorials) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tutorials.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tutorials not found` })
        }
        return res.status(200).json({ success: true, data: tutorials })
    }).catch(err => console.log(err))
}

findByTitle = async (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    await Tutorial.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

module.exports = {
    createTutorial,
    updateTutorial,
    deleteTutorial,
    deleteAllTutorials,
    getTutorials,
    getTutorialById,
    findByTitle
}
