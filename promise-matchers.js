jasmine.Matchers.prototype.toHaveBeenRejectedWith = function() {
    var promise = this.actual;
    var done = arguments[0];
    var expectation = arguments[1];
    return this.env.toHaveBeenRejectedWith(promise, done, expectation);
};

jasmine.Matchers.prototype.toHaveBeenResolvedWith = function() {
    var promise = this.actual;
    var done = arguments[0];
    var expectation = arguments[1];
    return this.env.toHaveBeenResolvedWith(promise, done, expectation);
};

jasmine.Matchers.prototype.toHaveBeenRejected = function() {
    var promise = this.actual;
    var done = arguments[0];
    var defaultExpectation = function() {};
    return this.env.toHaveBeenRejectedWith(promise, done, defaultExpectation);
};

jasmine.Matchers.prototype.toHaveBeenResolved = function() {
    var promise = this.actual;
    var done = arguments[0];
    var defaultExpectation = function() {
        expect(true).toBe(true);
    };
    return this.env.toHaveBeenResolvedWith(promise, done, defaultExpectation);
};

jasmine.Env.prototype.toHaveBeenRejectedWith = function(promise, done, expectation) {
    promise.then(
        function() {
            expect('promise').toBe('rejected');
            done();
        },
        function(args) {
            try {
                expectation(args);
                done();
            } catch (ex) {
                done(ex);
            }
        }
    );
};

jasmine.Env.prototype.toHaveBeenResolvedWith = function(promise, done, expectation) {
    promise.then(
        function(args) {
            try {
                expectation(args);
                done();
            } catch (ex) {
                done(ex);
            }
        },
        function() {
            expect('promise').toBe('resolved');
            done();
        }
    );
};