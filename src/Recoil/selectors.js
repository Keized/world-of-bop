import { selector, selectorFamily } from 'recoil';
import { bopFilter, bopList } from './atoms';

export const bopListQuery = selector({
    key: 'bop-list-query',
    get: async () => {
        const response = await fetch('http://localhost:3001/list');
        return await response.json();
    }
});

export const postBopQuery = selectorFamily({
    key: 'post-bop-query',
    get: async (params) => {
        console.log(params);

    }
})

export const bopDetailsQuery = selectorFamily({
    key: 'bop-details-query',
    get: (param) => async () => {
        const response = await fetch(`http://localhost:3001/details/${param}`);
        return await response.json();
    }
});

export const filteredBopList = selector({
    key: 'filtered-bops-list',
    get: ({ get }) => {
        const filter = get(bopFilter);
        const list = get(bopList);
        return list.filter((bop) => bop.name.includes(filter));
    }
});