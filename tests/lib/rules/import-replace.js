/**
 * @fileoverview replace import source by your rules
 * @author mutao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/import-replace"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { sourceType: 'module', ecmaVersion: 2015 } });
ruleTester.run("import-replace", rule, {
  valid: [
    {
      code: "import a from 'c';",
      options: [[{
        from: "b",
        to: "c",
      }]],
    }
  ],

  invalid: [
    {
      code: "import a from 'b';",
      errors: [{ message: "Import source 'b' is not allowed. Use 'c' instead.", type: "ImportDeclaration" }],
      output: "import a from 'c';",
      options: [[{
        from: "b",
        to: "c",
      }]],
    },
  ],
});