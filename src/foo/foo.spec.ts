import Foo from './';

describe('Foo class', () => {
  it('has method bar', () => {
    const foo = new Foo();
    expect(foo.bar()).toBe(true);
  });
});
