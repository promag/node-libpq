var Client = require('../')

describe('connecting', function() {
  it('works', function() {
    var client = new Client();
    client.connectSync();
  });
});

describe('async connecting', function() {
  it('works', false);
});
