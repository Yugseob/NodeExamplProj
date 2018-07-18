module.exports = (function () {
  return {
    local: { // localhost
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: ''
    },
    real: { // real server db info
      host: 'joon-example-db.c18rzh9hqcjm.ap-northeast-2.rds.amazonaws.com',
      port: '3306',
      user: 'beomjoon',
      password: 'skek0369',
      database: 'joon_example'
    },
    dev: { // dev server db info
      host: 'joon-example-db.c18rzh9hqcjm.ap-northeast-2.rds.amazonaws.com',
      port: '3306',
      user: 'beomjoon',
      password: 'skek0369',
      database: 'joon_example'
    }
  }
})();