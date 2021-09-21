describe('load-scripts', () => {
  it('should load single script correctly', (done) => {
    window.loadScripts('/base/test/scripts/foo.js').then(() => {
      expect(window.Foo).to.be.a('function');
      done();
    });
  });

  it('should load multiple scripts correctly', (done) => {
    window.loadScripts('/base/test/scripts/bar.js', '/base/test/scripts/baz.js').then(() => {
      expect(window.Bar).to.be.a('function');
      expect(window.Baz).to.be.a('function');
      done();
    });
  });

  it('should throw error', (done) => {
    const url = '/base/test/scripts/qux.js';

    window.loadScripts(url).catch((error) => {
      expect(error.message).to.include(url);
      done();
    });
  });
});
