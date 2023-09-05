import {ComponentInternalInstance, getCurrentInstance as getCurrentInstance_} from "vue";

export default function getCurrentInstance(name, message = undefined): ComponentInternalInstance {
    let vm = getCurrentInstance_()
    if (!vm)
        throw new Error(`[Vuetify] ${name} ${message || 'must be called from inside a setup function'}`);

    return vm
}

export function toKebabCase() {
    let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    if (toKebabCase.cache.has(str)) return toKebabCase.cache.get(str);
    const kebab = str.replace(/[^a-z]/gi, '-').replace(/\B([A-Z])/g, '-$1').toLowerCase();
    toKebabCase.cache.set(str, kebab);
    return kebab;
}
toKebabCase.cache = new Map();

export function getCurrentInstanceName() {

}