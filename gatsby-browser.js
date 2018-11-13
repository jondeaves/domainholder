import * as React from 'react';
import { rehydrate } from 'fela-dom';
import { Provider } from 'react-fela';
import { createRenderer } from 'fela';

export const wrapRootElement = ({ element }, pluginOptions) => {
  let config;
  try {
    config = require(`./fela.config.js`);
  } catch (e) {
    console.log(e);
  }
  const renderer = createRenderer(config);
  rehydrate(renderer);
  const ConnectedRootElement = (
    <Provider renderer={renderer}>{element}</Provider>
  );

  return ConnectedRootElement;
};
