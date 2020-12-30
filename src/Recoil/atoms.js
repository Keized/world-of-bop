import { atom, atomFamily } from 'recoil';
import { initDetailsEffect, persistDetailsEffect } from './effects';
import { bopListQuery, bopDetailsQuery } from './selectors';

export const bopDetails = atomFamily({
    key: 'bop-details',
    default: {},
    effects_UNSTABLE: (param) => [
        initDetailsEffect(param),
        persistDetailsEffect(param)
    ]
});

export const bopList = atom({
    key: 'bop-list',
    default: bopListQuery,
})

export const bopFilter = atom({
    key: 'bop-filter',
    default: ''
});

export const selectedBopId = atom({
    key: 'selected-bop-id',
    default: null,
});
