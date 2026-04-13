const Filme = require('../models/Filme');

exports.create = async (req, res) => {
  const filme = await Filme.create(req.body);
  res.json(filme);
};

exports.findAll = async (req, res) => {
  const { nome } = req.query;
  const filmes = await Filme.findAll({
    where: nome ? { nome } : {}
  });
  res.json(filmes);
};

exports.findById = async (req, res) => {
  const filme = await Filme.findByPk(req.params.id);
  res.json(filme);
};

exports.update = async (req, res) => {
  await Filme.update(req.body, {
    where: { filme: req.params.id }
  });
  res.json({ mensagem: "Atualizado com sucesso" });
};

exports.delete = async (req, res) => {
  await Filme.destroy({
    where: { filme: req.params.id }
  });
  res.json({ mensagem: "Deletado com sucesso" });
};
