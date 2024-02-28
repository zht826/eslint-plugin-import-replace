/**
 * @fileoverview replace import source by your rules
 * @author mutao
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    messages: {
      errorMessage: "Import from '{{from}}' should be changed to '{{to}}'"
    },
    schema: [
      {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            from: { type: 'string' },
            to: { type: 'string' }
          },
          required: ['from', 'to'],
          additionalProperties: false
        }
      }
    ]
  },
  create(context) {
    const configurations = context.options[0] || [];
    
    return {
      ImportDeclaration(node) {
        const sourceValue = node.source.value;
        const matchedConfig = configurations.find(config => config.from === sourceValue);
        
        if (matchedConfig) {
          context.report({
            node: node.source,
            messageId: "errorMessage",
            data: {
              from: matchedConfig.from,
              to: matchedConfig.to
            },
            fix(fixer) {
              return fixer.replaceText(node.source, `'${matchedConfig.to}'`);
            }
          });
        }
      },
    };
  },
};