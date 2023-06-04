const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.get('/download/resume', async (req, res) => {

    try {
blic
        res.status(200).send('/files/Resume - Hunter McCarthy - 05_2023.pdf')
    } catch (err) {
        res.status(400).send(err)
    }

})

module.exports = router;
