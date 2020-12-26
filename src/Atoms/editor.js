import {atom} from "recoil";

export const bopEditorPaneState = atom({
    key: 'bop-editor-pane-state',
    default: {
        active: false
    }
})

