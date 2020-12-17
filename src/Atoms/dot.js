import {atom, atomFamily, selector, selectorFamily} from "recoil";

export const dotsState = atom({
    key: 'dots-state',
    default: {}
})
//
// export const dotsSelector = selector({
//     key: 'dots-selector',
//     get: ({get}) => {
//         return get(dotsSourceState)
//             .reduce((acc, {id, ...elem}) => acc[id] = elem, {})
//     },
//     set: ({get, set})
// })

export const dotSelectorFamily = selectorFamily({
    key: 'dot-selector-family',
    get: param => ({get}) => {
        return get(dotsState)[param];
    },
    set: param => ({set, get}, newState) => {
        set(dotsState, s => ({...s, [param]: newState}))
    }
})

export const dotStateFamily = atomFamily({
    key: 'dot-family',
    default: dotSelectorFamily
})

export const selectedDotsSelector = selectorFamily({

})

