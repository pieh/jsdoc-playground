// @ts-check

import * as Defs from "./defs";

/** @type {Defs.CreatePagesFn} */
export const createPages = ({ cache, graphql, getConfig }) => {
  // graphql does exist here
};

/** @type {Defs.GatsbyNodeAPIHookFn} */
export const sourceNodes = ({ cache, graphql, getConfig }) => {
  // graphql doesn't exist here
  // getConfig doesn't exist here
};

/** @type {Defs.onCreateWebpackConfig} */
export const onCreateWebpackConfig = ({ cache, graphql, getConfig }) => {
  cache.get("test");
};
