#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var outfile = "hello.txt";
var out = "Modify this.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

