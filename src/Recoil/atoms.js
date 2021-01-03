import { atom, atomFamily } from 'recoil';
import { initDetailsEffect, persistDetailsEffect } from './effects';
import { bopListQuery, bopDetailsQuery } from './selectors';

export const bopDetails = atomFamily({
    key: 'bop-details',
    default: bopDetailsQuery,
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

export const bopEditorPaneState = atom({
    key: 'bop-editor-pane-state',
    default: {
        active: false
    }
})