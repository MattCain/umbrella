// Testing the main file
describe(".before(html)", function() {
  
  beforeEach(function(){
    expect(u('.bla').length).to.equal(0);
  });
  
  afterEach(function(){
    u('.bla').remove();
  });
  
  it("should be a function", function() {
    expect(typeof base.after).to.equal('function');
  });
  
  it("can add content in the right place", function() {
    base.before('<a class="bla">Link</a>');
    expect(u('.bla').length).to.equal(1);
    expect(base.parent().find('.base, .bla').length).to.equal(2);
    expect(base.parent().find('.bla ~ .base').length).to.equal(1);
  });
});