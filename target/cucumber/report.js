$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Feature/homedepot.feature");
formatter.feature({
  "line": 1,
  "name": "homedepot search",
  "description": "",
  "id": "homedepot-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "search products",
  "description": "",
  "id": "homedepot-search;search-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@P1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter search keywords as \"\u003csearch\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clickon \"searchbutton\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "homedepot-search;search-products;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 12,
      "id": "homedepot-search;search-products;;1"
    },
    {
      "cells": [
        "drill"
      ],
      "line": 13,
      "id": "homedepot-search;search-products;;2"
    },
    {
      "cells": [
        "sand"
      ],
      "line": 14,
      "id": "homedepot-search;search-products;;3"
    },
    {
      "cells": [
        "hammer"
      ],
      "line": 15,
      "id": "homedepot-search;search-products;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15292196570,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "search products",
  "description": "",
  "id": "homedepot-search;search-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@P1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter search keywords as \"drill\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clickon \"searchbutton\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "drill",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinition.entertext(String)"
});
formatter.result({
  "duration": 4063784080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchbutton",
      "offset": 9
    }
  ],
  "location": "GUIStepDefinition.search(String)"
});
formatter.result({
  "duration": 12535530439,
  "status": "passed"
});
formatter.after({
  "duration": 10447163970,
  "status": "passed"
});
formatter.before({
  "duration": 15039036144,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "search products",
  "description": "",
  "id": "homedepot-search;search-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@P1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter search keywords as \"sand\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clickon \"searchbutton\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sand",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinition.entertext(String)"
});
formatter.result({
  "duration": 840418628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchbutton",
      "offset": 9
    }
  ],
  "location": "GUIStepDefinition.search(String)"
});
formatter.result({
  "duration": 3294881582,
  "status": "passed"
});
formatter.after({
  "duration": 11809728081,
  "status": "passed"
});
formatter.before({
  "duration": 9651556416,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "search products",
  "description": "",
  "id": "homedepot-search;search-products;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@P1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter search keywords as \"hammer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clickon \"searchbutton\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hammer",
      "offset": 28
    }
  ],
  "location": "GUIStepDefinition.entertext(String)"
});
formatter.result({
  "duration": 611855099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchbutton",
      "offset": 9
    }
  ],
  "location": "GUIStepDefinition.search(String)"
});
formatter.result({
  "duration": 8823467595,
  "status": "passed"
});
formatter.after({
  "duration": 6555519336,
  "status": "passed"
});
});