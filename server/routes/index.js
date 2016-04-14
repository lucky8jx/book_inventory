import React, { createFactory } from 'react';
import { renderToString } from 'react-dom/server';
import { Router } from 'express';

import App from '../../client/container';

const router = Router();
const component = createFactory(App);

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Book Inventory',
    component: renderToString(component({}))
  });
});

export default router;
