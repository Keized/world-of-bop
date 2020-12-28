import {atom, atomFamily, selector, selectorFamily} from "recoil";
import { uuid } from 'uuidv4';

export const selectedBopIdState = atom({
    key: 'selected-bop-id',
    default: null
})

export const bopListQuery = selector({
    key: 'bop-list-query',
    get: async() => {
        const response = await fetch('http://localhost:3001/bops');
        return await response.json();
    }
})

export const bopsState = atom({
    key: 'bops-state',
    default: {}
})

export const addBopSelector = selector({
    key: 'add-bops-selector',
    get: ({get}) => {
        return get(bopsState);
    },
    set: async({get, set}, value) => {
        const state = get(bopsState);
        set(bopsState, {...state, [value.id]: value});
    }
})

export const bopSelectorFamily = selectorFamily({
    key: 'bop-selector-family',
    get: param => ({get}) => {
        return get(bopsState)[param];
    },
    set: (param) => async({set, get}, newState) => {
        // if (param) {
        //     set(bopsState, s => ({...s, [param]: newState}))
        // } else {
        //     set(bopsState, s => ({...s, [newState.id]: newState}))
        // }

        console.log(get(bopsState))
        const headers = { 'Content-Type': 'application/json' }
        const method = 'POST';
        const body = JSON.stringify({
            ...get(bopsState),
            [param || newState.id]: newState
        })
        const response = await fetch('http://localhost:3001/bops', { method, headers, body });
        const data = await response.json()
        set(bopsState, data);
        // console.log(data)
        console.log(data)
        console.log(get(bopsState))



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

export const selectedBopSelector = selector({
    key: 'selected-bop-selector',
    get: ({get}) => {

    }
})
