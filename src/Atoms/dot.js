import {atom, atomFamily, selector} from "recoil";

// const familyState = atom({
//     key: 'family-state',
//     default: {
//         selected: null
//     },
// });
//
// const selectedDot = selector({
//     key: 'selected-dot',
//     get: ({get}) => {
//         const { selected } = get(familyState);
//         return selected;
//     }
// })
//
// const dots = atomFamily({
//     key: 'dot-state-family',
//     default: param => { return param; }
// })

export const dots = atom({
    key: 'dots-state',
    default: []
})
