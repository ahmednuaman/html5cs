#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2)),
    html5cs = require('../lib/html5cs'),
    updateNotifier = require('update-notifier'),
    pkg = require('../package.json'),
    notifier = updateNotifier({ pkg: pkg });

if (notifier.update) {
  notifier.notify();
}

html5cs(argv._, argv.c || argv.config);
