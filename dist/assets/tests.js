'use strict';

define("cows-bulls/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/main-page.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/main-page.js should pass ESLint\n\n21:13 - Unexpected console statement. (no-console)\n24:13 - Unexpected console statement. (no-console)');
  });
});
define("cows-bulls/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('cows-bulls/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'cows-bulls/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('cows-bulls/templates/main-page.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'cows-bulls/templates/main-page.hbs should pass TemplateLint.\n\ncows-bulls/templates/main-page.hbs\n  2:1  error  Incorrect indentation for `<form>` beginning at L2:C1. Expected `<form>` to be at an indentation of 2 but was found at 1.  block-indentation\n  6:1  error  Incorrect indentation for `<div>` beginning at L6:C1. Expected `<div>` to be at an indentation of 2 but was found at 1.  block-indentation\n  5:9  error  Incorrect indentation for `form` beginning at L2:C1. Expected `</form>` ending at L5:C9 to be at an indentation of 1 but was found at 2.  block-indentation\n  3:5  error  Incorrect indentation for `{{input}}` beginning at L3:C5. Expected `{{input}}` to be at an indentation of 3 but was found at 5.  block-indentation\n  4:2  error  Incorrect indentation for `<button>` beginning at L4:C2. Expected `<button>` to be at an indentation of 3 but was found at 2.  block-indentation\n  7:2  error  Incorrect indentation for `<form>` beginning at L7:C2. Expected `<form>` to be at an indentation of 3 but was found at 2.  block-indentation\n  11:10  error  Incorrect indentation for `form` beginning at L7:C2. Expected `</form>` ending at L11:C10 to be at an indentation of 2 but was found at 3.  block-indentation\n  8:6  error  Incorrect indentation for `{{input}}` beginning at L8:C6. Expected `{{input}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  9:3  error  Incorrect indentation for `<button>` beginning at L9:C3. Expected `<button>` to be at an indentation of 4 but was found at 3.  block-indentation\n  6:20  error  elements cannot have inline styles  no-inline-styles\n  4:33  error  you must use double quotes in templates  quotes\n  9:35  error  you must use double quotes in templates  quotes\n');
  });
});
define("cows-bulls/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/main-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/main-page-test.js should pass ESLint\n\n');
  });
});
define("cows-bulls/tests/test-helper", ["cows-bulls/app", "cows-bulls/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("cows-bulls/tests/unit/routes/main-page-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | main-page', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:main-page');
      assert.ok(route);
    });
  });
});
define('cows-bulls/config/environment', [], function() {
  var prefix = 'cows-bulls';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('cows-bulls/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
