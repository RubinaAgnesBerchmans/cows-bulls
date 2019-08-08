'use strict';



;define("cows-bulls/app", ["exports", "cows-bulls/resolver", "ember-load-initializers", "cows-bulls/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("cows-bulls/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("cows-bulls/helpers/app-version", ["exports", "cows-bulls/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("cows-bulls/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("cows-bulls/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("cows-bulls/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "cows-bulls/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("cows-bulls/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("cows-bulls/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("cows-bulls/initializers/export-application-global", ["exports", "cows-bulls/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("cows-bulls/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("cows-bulls/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("cows-bulls/router", ["exports", "cows-bulls/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('main-page');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("cows-bulls/routes/main-page", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    randomNumber: 0,
    max: 0,
    min: 0,
    iterations: 0,

    init() {
      this._super(...arguments);
    },

    actions: {
      saveLevel(value) {
        this.set('numberLength', value);
        Ember.$('.level').hide();
        Ember.$('.guess').show();
        var helpConstant = Math.pow(10, value - 1);
        this.set('min', 1 * helpConstant);
        this.set('max', 9 * helpConstant + (helpConstant - 1));
        var range = this.max - this.min;
        this.set('randomNumber', parseInt(Math.random() * range) + this.min);
        console.log(this.randomNumber);
      },

      computeGuess(guess) {
        console.log(this.randomNumber);
        let randomNo = [...(this.randomNumber + '')].map(n => +n);
        let guessNo = [...(guess + '')].map(n => +n);
        let bulls = 0,
            cows = 0,
            i,
            j;
        this.set('iterations', this.iterations++);

        for (i = 0; i < randomNo.length; i++) {
          for (j = 0; j < guessNo.length; j++) {
            if (randomNo[i] === guessNo[j] && randomNo[i] !== "*") {
              if (i == j) {
                cows++;
                randomNo.splice(i, 1, "*");
                guessNo.splice(j, 1, "*");
                i = 0;
                break;
              }

              if (randomNo[j] !== guessNo[j]) {
                bulls++;
                randomNo.splice(i, 1, "*");
                guessNo.splice(j, 1, "*");
                i = 0;
                break;
              }
            }
          }
        }

        if (cows === +this.numberLength) {
          document.getElementById('values').innerHTML = "Hurrah!!! U have won in ".concat(this.iterations, "!!!");
        } else {
          var iterations = this.get('iterations');
          document.getElementById('values').innerHTML = "cows:".concat(cows, ",bulls:").concat(bulls, " Iternation:").concat(iterations);
        }
      }

    }
  });

  _exports.default = _default;
});
;define("cows-bulls/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("cows-bulls/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0F2hEqRu",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "cows-bulls/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("cows-bulls/templates/main-page", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "82Tn2JBT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"main-page\"],[9],[0,\"\\n\\t\"],[7,\"form\"],[11,\"class\",\"level\"],[9],[0,\"\\n    \\t\"],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"level\",[23,[\"numberLength\"]]]]],false],[0,\"\\n\\t\\t\"],[7,\"button\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[3,\"action\",[[22,0,[]],\"saveLevel\",[23,[\"numberLength\"]]]],[10],[0,\"\\n \\t\"],[10],[0,\"\\n\\t\"],[7,\"div\"],[11,\"class\",\"guess\"],[11,\"style\",\"display:none;\"],[9],[0,\"\\n\\t\\t\"],[7,\"form\"],[11,\"id\",\"guess-value\"],[9],[0,\"\\n    \\t\\t\"],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Enter ur guess\",[23,[\"guess\"]]]]],false],[0,\"\\n\\t\\t\\t\"],[7,\"button\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[3,\"action\",[[22,0,[]],\"computeGuess\",[23,[\"guess\"]]]],[10],[0,\"\\n\\t\\t\\t\\n \\t\\t\"],[10],[0,\"\\n\\t\\t \"],[7,\"div\"],[11,\"id\",\"values\"],[9],[0,\"\\n\\t\\t\\t\"],[10],[0,\"\\n\\t\"],[10],[0,\" \\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "cows-bulls/templates/main-page.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('cows-bulls/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("cows-bulls/app")["default"].create({"name":"cows-bulls","version":"0.0.0+7c87d454"});
          }
        
//# sourceMappingURL=cows-bulls.map
