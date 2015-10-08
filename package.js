Package.describe({
  name: 'dinf:errors',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'componente para gerenciamento e apresentação de erros no front-end',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dinf-uern/meteor-pkg-errors.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'templating',
    'underscore',
    'minimongo',
    'mongo-livedata'
  ]);

  api.addFiles([
    'lib/templates/errors.html',
    'lib/templates/errors.js',
    'lib/templates/error.html',
    'lib/templates/error.js',
    'lib/modules/errors.js'
  ], ['client']);

  api.export("Errors", ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
});
