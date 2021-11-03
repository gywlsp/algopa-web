// draft-js-prism 라이브러리에서 syntax python 동작 안 되는 것 수정: https://github.com/SamyPesse/draft-js-prism/blob/master/lib/index.js
// 코드 참고: https://github.com/ianstormtaylor/slate/blob/main/site/examples/code-highlighting.tsx

import Immutable from 'immutable';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';

import PrismOptions from './options';

Prism.languages.python = Prism.languages.extend('python', {});
Prism.languages.insertBefore('python', 'prolog', {
  comment: { pattern: /##[^\n]*/, alias: 'comment' },
});

export default function PrismDecorator() {
  this.options = PrismOptions({ prism: Prism });
  this.highlighted = {};
}

/**
 * Return list of decoration IDs per character
 *
 * @param {ContentBlock}
 * @return {List<String>}
 */
PrismDecorator.prototype.getDecorations = function (block) {
  let tokens,
    token,
    tokenId,
    resultId,
    offset = 0,
    tokenCount = 0;
  let filter = this.options.get('filter');
  let getSyntax = this.options.get('getSyntax');
  let blockKey = block.getKey();
  let blockText = block.getText();
  let decorations = Array(blockText.length).fill(null);
  let Prism = this.options.get('prism');
  let highlighted = this.highlighted;

  highlighted[blockKey] = {};

  if (!filter(block)) {
    return Immutable.List(decorations);
  }

  let syntax = getSyntax(block) || this.options.get('defaultSyntax');

  // Allow for no syntax highlighting
  if (syntax == null) {
    return Immutable.List(decorations);
  }

  // Parse text using Prism
  let grammar = Prism.languages[syntax];
  tokens = Prism.tokenize(blockText, grammar);

  function processToken(decorations, token, offset) {
    if (typeof token === 'string') {
      return;
    }
    //First write this tokens full length
    tokenId = 'tok' + tokenCount++;
    resultId = blockKey + '-' + tokenId;
    highlighted[blockKey][tokenId] = token;
    occupySlice(decorations, offset, offset + token.length, resultId);
    //Then recurse through the child tokens, overwriting the parent
    let childOffset = offset;
    for (let i = 0; i < token.content.length; i++) {
      let childToken = token.content[i];
      processToken(decorations, childToken, childOffset);
      childOffset += childToken.length;
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    token = tokens[i];
    processToken(decorations, token, offset);
    offset += token.length;
  }

  return Immutable.List(decorations);
};

/**
 * Return component to render a decoration
 *
 * @param {String}
 * @return {Function}
 */
PrismDecorator.prototype.getComponentForKey = function (key) {
  return this.options.get('render');
};

/**
 * Return props to render a decoration
 *
 * @param {String}
 * @return {Object}
 */
PrismDecorator.prototype.getPropsForKey = function (key) {
  let parts = key.split('-');
  let blockKey = parts[0];
  let tokId = parts[1];
  let token = this.highlighted[blockKey][tokId];

  return {
    type: token.type,
  };
};

function occupySlice(targetArr, start, end, componentKey) {
  for (let ii = start; ii < end; ii++) {
    targetArr[ii] = componentKey;
  }
}
