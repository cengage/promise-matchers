# promise-matchers

This library introduces a simple set of custom Jasmine matchers for use with asynchronous JavaScript.
It can be used with any **promises** library that implements the
[Promises/A+](http://promises-aplus.github.io/promises-spec/) specification, such as
[Q](https://github.com/kriskowal/q), [Promise](https://npmjs.org/package/promise),
[RSVP](https://github.com/tildeio/rsvp.js),
[WinJS](http://msdn.microsoft.com/en-us/library/windows/apps/br211867.aspx) or
[jQuery](http://api.jquery.com/jQuery.Deferred/).

## Matchers

    expect(promise).toHaveBeenResolved(done);
    expect(promise).toHaveBeenResolvedWith(done, expectation);
    expect(promise).toHaveBeenRejected(done);
    expect(promise).toHaveBeenRejectedWith(done, expectation);

## Usage

Either you use in your browser jasmine test runner by adding it after the script-tag `jasmine.js`:

~~~html
<script src="promise-matchers/src/promise-matchers.js"></script>
~~~

Or when using [jasmine-node](https://github.com/mhevery/jasmine-node) you can simply install the matchers via:

~~~bash
npm install promise-matchers --save -dev
~~~

And make them available in your spec-file:

~~~js
require('promise-matchers');
describe(...);

// or via requirejs (assuming your specs are within PROJECT_ROOT/test):
require([
  '../node_modules/promise-matchers/src/promise-matchers.js',
], function() {
  describe(...);
});
~~~

## Examples

1.

```javascript
    it('succeeds', function(done) {
        var promise = foo();
        expect(promise).toHaveBeenResolved(done);
    });
```
2.

    it('fails', function(done) {
        var promise = foo();
        expect(promise).toHaveBeenRejected(done);
    });
3.

    it('succeeds with value of 3', function(done) {
        var promise = foo();
        expect(promise).toHaveBeenResolvedWith(done, function(result) {
            expect(result).toBe(3);
        });
    });
4.

    it('fails without saving', function(done) {
        var save = spyOn(Bar, 'save');
        var promise = foo();
        expect(promise).toHaveBeenRejectedWith(done, function() {
            expect(save).not.toHaveBeenCalled();
        });
    });

## Notes

1. If a promise with an expectation of **toHaveBeenResolved** or **toHaveBeenResolvedWith** is rejected, the matcher fails with the message **expected promise to be resolved**.
2. If a promise with an expectation of **toHaveBeenRejected** or **toHaveBeenRejectedWith** is resolved, the matcher fails with the message **expected promise to be rejected**.
3. If an expectation passed to **toHaveBeenResolvedWith** or **toHaveBeenRejectedWith** fails, the matcher fails with that expectation's failure message.
4. If an expectation passed to **toHaveBeenResolvedWith** or **toHaveBeenRejectedWith** throws an exception, the matcher fails with the exception text.
5. These matchers will not behave properly with **not**.