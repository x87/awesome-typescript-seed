import Foo from './';

describe("Foo class", function() {
	it("has method bar", function() {
		const foo = new Foo();
		expect(foo.bar()).toBe(true);
	});
});
