import {atom, atomFamily, selector, selectorFamily} from "recoil";
import {getRandomColor, getRandomPosition} from "../helpers/helpers";

export const bopsState = atom({
    key: 'bops-state',
    default: {
        1: {
            name: 'bopi',
            color: getRandomColor(),
            position: getRandomPosition()
        }
    }
})


export const addBopSelector = selector({
    key: 'add-bops-selector',
    get: ({get}) => {
        return get(bopsState);
    },
    set: ({get, set}, value) => {
        const state = get(bopsState);
        set(bopsState, {...state, [value.id]: value});
    }
})

export const bopSelectorFamily = selectorFamily({
    key: 'bop-selector-family',
    get: param => ({get}) => {
        return get(bopsState)[param];
    },
    set: param => ({set, get}, newState) => {
        set(bopsState, s => ({...s, [param]: newState}))
    }
})

export const bopStateFamily = atomFamily({
    key: 'dot-family',
    default: bopSelectorFamily
})



export const bopColorsSelector = selector({
    key: 'bop-colors-selector',
    get: ({get}) => {
        const bops = get(bopsState);
        return Object.keys(bops).reduce((acc, key) => {
            if (!acc.includes(bops[key].color)) {
                acc.push({color: bops[key].color, selected: false});
            }
            return acc;
        }, []);
    }
})

export const bopFiltersState = atom({
    key: 'bop-filters-state',
    default: {
        search: '',
        colors: []
    }
})

export const filteredBopSelector = selector({
    key: 'filtered-bop-selector',
    get: ({get}) => {
        const filters = get(bopFiltersState);
        const bops = get(bopsState);

        return Object.keys(bops).reduce((acc, key) => {
            if (bops[key].color.includes(filters.search)) {
                acc[key] = bops[key];
            }
            return acc;
        }, {})
    }
})
