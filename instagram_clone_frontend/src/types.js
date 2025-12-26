//
// PUBLIC_INTERFACE
// Type definitions for mock Instagram app

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} username
 * @property {string} displayName
 * @property {string} avatarUrl
 */

/**
 * @typedef {Object} Comment
 * @property {string} id
 * @property {string} postId
 * @property {string} userId
 * @property {string} text
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Post
 * @property {string} id
 * @property {string} userId
 * @property {string} imageUrl
 * @property {string} caption
 * @property {Array<string>} likes - Array of user IDs who liked
 * @property {string} createdAt
 */
