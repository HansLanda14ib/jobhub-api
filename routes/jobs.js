const express = require('express')
const router = express.Router()
const testUser = require("../middleware/testUser");
const {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    getJob,
    showStats
} = require('../controllers/jobs')

router.route('/stats').get(showStats)

router.route('/').post(testUser, createJob).get(getAllJobs)

router.route('/:id').get(testUser, getJob).delete(testUser, deleteJob).patch(testUser, updateJob)

module.exports = router
