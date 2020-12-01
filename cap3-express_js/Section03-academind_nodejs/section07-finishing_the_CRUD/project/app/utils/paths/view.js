const path = require('path')
const main_path = require('./main_path')

module.exports = (view_name) => path.join(main_path, 'views', view_name)