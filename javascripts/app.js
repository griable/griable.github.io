(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("app", function(exports, require, module) {
  'use strict';
  var App;

  require('controllers');

  App = angular.module('app', ['app.controllers']);

  App.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: '/views/partials/home.html'
      });
    }
  ]);

  module.exports = 'app';
  
});
window.require.register("controllers", function(exports, require, module) {
  'use strict';
  angular.module('app.controllers', []);

  module.exports = 'app.controller';
  
});
window.require.register("index", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<!DOCTYPE html><html lang="en" ng-app="app"><head><title>');
  var __val__ = 'Gabriel Slama'
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</title><script src="/javascripts/vendor.js"></script><script src="/javascripts/app.js"></script><script>');
  var __val__ = "require('app');"
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</script><link href="/stylesheets/app.css" media="screen, projection" rel="stylesheet" type="text/css"></head><body><header ng-include src="\'/views/partials/nav.html\'"></header><section ng-view id="home"></section><script>var _gaq = _gaq || [];\n_gaq.push([\'_setAccount\', \'UA-7077139-1\']);\n_gaq.push([\'_trackPageview\']);\n\n(function() {\n  var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n  ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n  var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n})();</script></body></html>');
  }
  return buf.join("");
  };
});
window.require.register("views/partials/config", function(exports, require, module) {
  exports.config = {
    files: {
      javascripts: {
        joinTo: {
          'javascripts/app.js': /^app/,
          'javascripts/vendor.js': /^vendor/,
          'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/,
          'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
        },
        order: {
          before: []
        }
      },
      stylesheets: {
        joinTo: {
          'stylesheets/app.css': /^(app|vendor)/,
          'test/stylesheets/test.css': /^test/
        },
        order: {
          before: [],
          after: []
        }
      }
    }
  };
  
});
window.require.register("views/partials/home", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<div class="content"><div id="page-header"><div><h1>');
  var __val__ = 'Gabriel Slama'
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</h1></div></div><div class="sum-up"><p>Développeur d\'applications iPhone, iPad et de sites WEB<br/>sémentiques et accessibles avec les frameworks<br/>Django, Symfony et RAILS</p><ul class="skills"><li><a href="http://fr.linkedin.com/pub/gabriel-slama/59/934/902" title="LinkedIn"><img src="/images/picto-linkedin.png"/></a></li><li><a href="http://www.github.com/griable" title="Github"><img src="/images/picto-github.png"/></a></li><li><a href="http://www.twitter.com/griable" title="Twitter"><img src="/images/picto-twitter.png"/></a></li><li><a href="mailto:contact@griable.com" title="Mail"><img src="/images/picto-mail.png"/></a></li></ul></div></div>');
  }
  return buf.join("");
  };
});
window.require.register("views/partials/nav", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<div><span class="logo"></span></div>');
  }
  return buf.join("");
  };
});
