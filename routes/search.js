const router = require('express').Router();
const { createApi } = require('unsplash-js');

const unsplash = createApi({ 
  accessKey:'3ny-4m1J3XS7rtl7l87al92abCDuX2ym2f27ni3PQiI',
});

router
  .get('/', (req, res) => {
    res.render('search')
  })
  .post('/', async (req, res) => {
    let { inputsearch } = req.body;
    inputsearch = inputsearch.toLowerCase();

    const response = await unsplash.search.getPhotos({
      query: inputsearch,
      page: 1,
      perPage: 7,
      orientation: 'landscape',
    })
      try {
      res.status(200).send(response)

    } catch(error) {
      console.log(error)
    };
  });
    
module.exports = router;