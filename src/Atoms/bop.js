import { atom, selector, selectorFamily } from "recoil";
import { v4 as uuidV4 } from 'uuid';

export const bopSelectorFamily = selectorFamily({
    key: 'bop-selector-family',
    get: param => ({ get }) => {
        return get(bopsState)[param];
    },
    set: (param) => async({set, get}, newState) => {
        if (param) {
            set(bopsState, s => ({...s, [param]: newState}))
        } else {
            set(bopsState, s => ({...s, [uuidV4()]: newState}))
        }
    }
});

export const filteredBopSelector = selector({
    key: 'filtered-bop-selector',
    get: ({ get }) => {
        const filter = get(bopFilterState);
        const bops = get(bopsState);

        return Object.keys(bops).reduce((acc, key) => {
            if (bops[key].name.includes(filter)) {
                acc[key] = bops[key];
            }
            return acc;
        }, {})
    }
});

export const selectedBopSelector = selector({
    key: 'selected-bop-selector',
    get: ({ get }) => {

    }
});

export const selectedBopIdState = atom({
    key: 'selected-bop-id',
    default: null
});

export const bopsState = atom({
    key: 'bops-state',
    default: {
        '1': {
            name: 'Bop',
            positions: [50,50],
            color: 'red'
        }
    }
});

export const bopFilterState = atom({
    key: 'bop-filters-state',
    default: ''
});
