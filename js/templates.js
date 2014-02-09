module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html lang="en" ng-app="app">\n  <head>\n    <title>');
var __val__ = 'Gabriel Slama'
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</title>\n    <link href="/stylesheets/app.css" media="screen, projection" rel="stylesheet" type="text/css">\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {enabled: true};\n    </script>\n    <script src="/javascripts/vendor.js"></script>\n    <script src="/javascripts/app.js"></script>\n  </head>\n  <body ng-controller="AppCtrl">\n    <header ng-include src="\'/views/partials/nav.html\'"></header>\n    <script>\n      var _gaq = _gaq || [];\n      _gaq.push([\'_setAccount\', \'UA-7077139-1\']);\n      _gaq.push([\'_trackPageview\']);\n      \n      (function() {\n        var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n        ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n        var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n      })();\n    </script>\n  </body>\n</html>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div class="content">\n  <div id="page-header">\n    <div>\n      <h1>');
var __val__ = 'Gabriel Slama'
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1>\n    </div>\n  </div>\n  <div class="sum-up">\n    <p>Développeur d\'applications iPhone, iPad et de sites WEB<br/>sémentiques et accessibles avec les frameworks<br/>Django, Symfony et RAILS</p>\n    <ul class="skills">\n      <li><a href="http://fr.linkedin.com/pub/gabriel-slama/59/934/902" title="LinkedIn"><img src="/images/picto-linkedin.png"/></a></li>\n      <li><a href="http://www.github.com/griable" title="Github"><img src="/images/picto-github.png"/></a></li>\n      <li><a href="http://www.twitter.com/griable" title="Twitter"><img src="/images/picto-twitter.png"/></a></li>\n      <li><a href="mailto:contact@griable.com" title="Mail"><img src="/images/picto-mail.png"/></a></li>\n    </ul>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div><span class="logo"></span></div>\n<ul>\n  <li><a href="#/">Home</a></li>\n  <li><a href="#/projects">Projets</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div class="container">\n  <h1>Projects</h1><img src="/images/projects/pindrop.png"/>\n</div>\n<h2>Pin Drop</h2>\n<p>\n   \n  est une application développée au sein de l’agence caffeinehit à Londres.<br/>J\'ai entièrement réalisé la v1 qui était alors off line.<br/>Le public a été trouvé rapidement : voyageurs, geocachers, graffeurs...<br/>Certains articles y ont même été consacrés par GQ ainsi que Techcrunch et le Sunday Times.\n</p>');
}
return buf.join("");
};