import getCurrentInstance from "./getCurrentInstance";
import {ComponentInternalInstance} from "vue";

export default function (render: () => {}) {
const vm= getCurrentInstance("useRender")
    // @ts-ignore
    vm.render = render
}