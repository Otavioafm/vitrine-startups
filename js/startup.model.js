const startupSchema = {
  id: 'number',
  nome: 'string',
  categoria: 'string',
  descricao: 'string',
  image: 'string',
  logo: 'string',
  team: [{
    name: 'string',
    role: 'string',
    photo: 'string',
    bio: 'string'
  }],
  documents: [{
    name: 'string',
    url: 'string'
  }],
  roadmap: [{
    date: 'string',
    milestone: 'string'
  }],
  media: {
    video: 'string'
  },
  likes: 'number',
  shares: 'number',
  createdAt: 'date',
  updatedAt: 'date'
};

module.exports = startupSchema;
