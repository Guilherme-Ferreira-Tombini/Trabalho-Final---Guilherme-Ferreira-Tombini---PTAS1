const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
var bcrypt = require('bcryptjs');

const User = require('./models/user.js');
const Noticia = require('./models/noticia.js');

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [],
  resources: [User,Noticia],
  rootPath: '/admin',
})

//module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)

module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})


