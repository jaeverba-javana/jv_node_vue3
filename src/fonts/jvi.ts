import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'
import { VClassIcon } from "vuetify/lib/composables/icons.mjs";

const aliases: { cancel: string; next: string; checkboxOn: string; minus: string; subgroup: string; radioOn: string; prev: string; checkboxOff: string; ratingEmpty: string; error: string; delete: string; file: string; delimiter: string; radioOff: string; ratingFull: string; warning: string; close: string; info: string; last: string; edit: string; clear: string; sort: string; ratingHalf: string; menu: string; loading: string; checkboxIndeterminate: string; dropdown: string; plus: string; expand: string; success: string; complete: string; collapse: string; first: string; unfold: string } = {
    collapse: 'jvi-chevron-up-classic-solid',
    complete: 'jvi-check-classic-solid',
    cancel: 'jvi-circle-xmark-classic-solid',
    close: 'jvi-xmark-classic-solid',
    delete: 'jvi-circle-xmark-classic-solid',
    clear: 'jvi-circle-xmark-classic-solid',
    success: 'jvi-circle-check-classic-solid',
    info: 'jvi-info-classic-solid',
    warning: 'jvi-circle-exclamation-classic-solid',
    error: 'jvi-circle-xmark-classic-solid',
    prev: 'jvi-chevron-left-classic-solid',
    next: 'jvi-chevron-right-classic-solid',
    checkboxOn: 'jvi-square-check-classic-solid',
    checkboxOff: 'jvi-square-check-classic-regular',
    checkboxIndeterminate: 'jvi-square-minus-classic-regular',
    delimiter: '...',
    sort: 'chevrons-down-classic-solid',
    expand: 'jvi-chevron-down-classic-solid',
    menu: 'fontawesome-webfont1',
    subgroup: '...',
    dropdown: '...',
    radioOn: '...',
    radioOff: '...',
    edit: '...',
    ratingEmpty: '...',
    ratingFull: '...',
    ratingHalf: '...',
    loading: '...',
    first: '...',
    last: '...',
    unfold: '...',
    file: 'jvi-plus-paperclip-classic-solid',
    plus: "jvi-plus-classic-solid",
    minus: 'jvi-minus-classic-solid',
}

const jvi: IconSet = {
    component: (props: IconProps) => h(VClassIcon, {
        ...props,
        class: 'jvi'
    }),
}

/*const jvi: IconSet = {
    component: (props: IconProps) => h(VClassIcon, {
        ...props,
        class: 'mdi'
    }),
}*/

export { aliases, jvi }