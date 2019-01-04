/**
 * Cache.get stub description
 * @callback GatsbyCacheGet
 * @param {string} key
 * @returns {Promise<any>}
 * @example
 * cache.get(`unique-key`).then(value => {
 *   // do something with value
 * })
 */
export const GatsbyCacheGet = true;

/**
 * Cache.set stub description
 * @callback GatsbyCacheSet
 * @param {string} key
 * @param {any} value
 * @returns {Promise<any>}
 * @example
 * cache.set(`unique-key`, value).then(() => {
 *   // value was cached, continue your stuff
 * })
 */
export const GatsbyCacheSet = true;

/**
 * @typedef GatsbyCache
 * @type {object}
 * @property {GatsbyCacheGet} get
 * @property {GatsbyCacheSet} set
 */
export const GatsbyCache = true;

export class GatsbyNodeHelpers {
  /**
   * Key-value store used to persist results of time/memory/cpu instensive tasks. All functions are async and return promises.
   * @type {GatsbyCache}
   */
  cache;
}

export class GatsbyNodeHelpersWithGraphql extends GatsbyNodeHelpers {
  /**
   * Execute query
   * @param {string} query
   * @returns {Promise<object>}
   */
  graphql;
}

export class GatsbyNodeHelpersWebpackConfig extends GatsbyNodeHelpers {
  /**
   * Get current webpack configuration
   * @returns {object}
   */
  getConfig;
  stage;
  rules;
  loaders;
  plugins;
}

/**
 * @typedef {object} PluginOptions
 * Description of plugin options - you can pass them in gatsby-config etc.
 */
export const PluginOptions = false;

/**
 * @callback GatsbyNodeAPIHookFn
 * @param {GatsbyNodeHelpers} helpers
 * @param {PluginOptions} PluginOptions
 * @returns {void|Promise<any>}
 */
export const GatsbyNodeAPIHookFn = false;

/**
 * @callback CreatePagesFn
 * @param {GatsbyNodeHelpersWithGraphql} helpers
 * @param {PluginOptions} PluginOptions
 * @returns {void|Promise<any>}
 */
export const CreatePagesFn = false;

/**
 * @callback onCreateWebpackConfig
 * @param {GatsbyNodeHelpersWebpackConfig} helpers
 * @param {PluginOptions} PluginOptions
 * @returns {void|Promise<any>}
 */
export const onCreateWebpackConfig = false;
