describe('rules.href_type', function () {
    var rule = require('../lib/rules/href_type'),
		htmllint = require('../'),
        Parser = require('../lib/parser'),
		parser = null;

    describe('process', function () {
        var Parser = require('../lib/parser'),
            parser = null;

        it('should return an array', function () {
            var output = rule.process([]);

            expect(output).to.be.an.instanceOf(Array);
        });
        //this code is for if the flag is set to absolute
        it('should not match absolute links', function () {

            var parser = new Parser(),
                dom = parser.parse('<a href="http://www.google.com"></a>'),
                output = rule.process(dom, {'href-type':'absolute'});

            expect(output).to.have.length(0);
        });

        it('should match relative links', function () {
            var parser = new Parser(),
                dom = parser.parse('<a href="/dog/cat"></a>'),
                output = rule.process(dom, {'href-type':'absolute'});

            expect(output).to.have.length(1);
        });
    });
});