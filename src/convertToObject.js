'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim().length > 0)
    .map((declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((item) => item.trim());
      const camelCasedProperty = property.replace(
        /-([a-z])/g,
        (match, letter) => letter.toUpperCase(),
      );

      return { [camelCasedProperty]: value };
    })
    .reduce((accumulator, current) => Object.assign(accumulator, current), {});
}

module.exports = convertToObject;
