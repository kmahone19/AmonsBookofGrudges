const { Party } = require('../models');
const handle = require('../utils/promise-handler');

const newParty = (req,res) => {
  console.log(req.body);

  const { party_name, party_lvl } = req.body;

  Party.create({
    party_name,
    party_lvl
  })
  .then(dbPartydata => res.json(dbPartydata))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};

const getPartyInfo = (req,res) => {

  Party.findAll({
    where: {
      id: req.params.id
    }
  })
 
};

const updatePartyInfo = async (req, res) => {
  Party.update({
    party_name: req.body.party_name,
    party_lvl: req.body.party_lvl
  },
    {
    where: req.params.id
  })
  .then(rowsUpdated => releaseEvents.json(rowsUpdated))
}

module.exports = {
  newParty,
  getPartyInfo,
  updatePartyInfo
}