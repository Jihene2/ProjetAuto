$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Inscription.feature");
formatter.feature({
  "name": "Inscription on parashop",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Inscription"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Inscription",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on s enregistrer",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \u003cName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Enter \u003cFamilly name\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \u003ctelephone\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \u003cconfirm password\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on accept legal mentions",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on continuer",
  "keyword": "And "
});
formatter.step({
  "name": "User is signed in on the website",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Familly name",
        "Email",
        "telephone",
        "password",
        "confirm password"
      ]
    },
    {
      "cells": [
        "jihene",
        "saidene",
        "test.academy9@yahoo.com",
        "26555888",
        "Test123",
        "Test123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inscription",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Inscription"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.StepDefs.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on s enregistrer",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enter jihene",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter saidene",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter test.academy9@yahoo.com",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter 26555888",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter Test123",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter Test123",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on accept legal mentions",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on continuer",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User is signed in on the website",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});