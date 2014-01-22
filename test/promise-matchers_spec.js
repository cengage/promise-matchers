describe('Promise Matchers', function() {
    require('../src/promise-matchers');
    var Q = require("q");

    describe('to have been resolved', function() {
        it('succeeds when promise is resolved', function(done) {
            var promise = Q();
            expect(promise).toHaveBeenResolved(done);
        });
    });

    describe('to have been resolved with', function() {
        it('succeeds when promise is resolved with expectation', function(done) {
            var promise = Q('result');
            expect(promise).toHaveBeenResolvedWith(done, function(result) {
                expect(result).toBe('result');
                expect(result).not.toBe('anything else');
            });
        });
    });

    describe('to have been rejected', function() {
        it('succeeds when promise is rejected', function(done) {
            var promise = Q.reject();
            expect(promise).toHaveBeenRejected(done);
        });
    });

    describe('to have been rejected with', function() {
        it('succeeds when promise is rejected with expectation', function(done) {
            var promise = Q.reject('reason');
            expect(promise).toHaveBeenRejectedWith(done, function(reason) {
                expect(reason).toBe('reason');
                expect(reason).not.toBe('anything else');
            });
        });
    });
});
