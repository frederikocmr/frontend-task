/* eslint-disable import/no-unresolved */
import isoConv from 'iso-language-converter';

/**
 * Get the username from the user's link (API)
 *
 * @param {any} user - the user object
 * @return {string} the username
 */
const getUsername = user => user.link.substring(user.link.lastIndexOf('/') + 1);

/**
 * Converts a ISO-639 code to a language readable name
 *
 * @param {string} iso
 * @return {string} the language name
 */
const getLanguage = iso => (iso ? isoConv(iso.split('-')[0]) : null);

/**
 * Converts seconds to HH:MM:SS
 *
 * @param {number} min
 * @return {string} the converted time
 */
const getDuration = min => new Date(min * 1000).toISOString().substr(11, 8);

/**
 * Get the image link from the pictures (API)
 *
 * @param {any} img
 * @return {string} the url link
 */
const getImageUrl = img => img.sizes[0].link;

/**
 * Get the pages from the paging object (API)
 *
 * @param {any} paging
 * @return {any} the pages object
 */
const getPaging = paging => {
  const splitHelper = value =>
    value ? value.split('=')[1].split('&')[0] : null;

  return {
    next: splitHelper(paging.next),
    previous: splitHelper(paging.previous),
    first: splitHelper(paging.first),
    last: splitHelper(paging.last),
  };
};

export default {
  getUsername,
  getLanguage,
  getDuration,
  getImageUrl,
  getPaging,
};
