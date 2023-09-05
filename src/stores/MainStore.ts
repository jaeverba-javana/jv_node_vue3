import { defineStore} from "pinia";
import {cookieManager} from "./../engine"

let langId:string = cookieManager.get('lang')? cookieManager.get('lang') : "es"

export default defineStore('mainStore', {
    state: (): MainStoreInterface => ({
        lang: {
            all: [{
                id: 'es',
                lang: 'español',
                img: '/img/svg/flags/SVG/spain_squared.svg'
            },{
                id: 'en',
                lang: 'english',
                img: '/img/svg/flags/SVG/England_squared.svg'
            }],
            id: langId
        }
    }),
    actions: {
        setLang(langId: string):void {
            console.log(langId)

            cookieManager.add({
                key: 'lang',
                value: langId,
                max_age: 3600 * 24 * 7,
                path: "/"
            })

            this.setLangId(langId)

            document.getElementById('html').lang = langId

        },

        setLangId(lang: string):void {
            this.lang.id = lang
        },

        getLangById(langId:string = null):object|null {
            if (langId) {
                for (let item of this.lang.all) {
                    if (item.id === langId) {
                        return item
                    }
                }
            } else {
                return null
            }
        },
    }
})

export declare interface MainStoreInterface {
    lang: {
        all: Array<LangInterface>
        id: string
    }
}

declare interface LangInterface {
    id: string,
    lang: string,
    img: string
}