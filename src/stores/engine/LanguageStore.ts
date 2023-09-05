import {defineStore} from "pinia";
import {cookieManager} from "./../../engine";

let langId:string = cookieManager.get('lang') || "es"

const LanguageStore = defineStore("language", {
    state: (): object => ({
        languages: [{
            id: 'es',
            lang: 'español',
            img: '/img/svg/flags/SVG/spain_squared.svg'
        },{
            id: 'en',
            lang: 'english',
            img: '/img/svg/flags/SVG/England_squared.svg'
        }],
        lang: {},
        id: langId
    }),

    getters: {
        /*actualLanguage(state):object|null {
            for (let item of this.languages) {
                if (item.id === cookieManager.get('lang')) {
                    return item
                }
            }

            return null
        }*/
    },

    actions: {
        getLanguageById(languageId:string = null):object|null {
            if (languageId) {
                for (let item of this.languages) {
                    if (item.id === languageId) {
                        return item
                    }
                }
            } else {
                return null
            }
        },

        getLanguage(langId):object {

            return {};
        },

        setLanguage(langId):void {
            console.log(langId)

            cookieManager.add({
                key: 'lang',
                value: langId,
                max_age: 3600 * 24 * 7,
                path: "/"
            })

            this.setLanguageId(langId)

            document.getElementById('html').lang = langId

        },

        setLanguageId(languageId:string):void {
            this.id = languageId
        }
    }
})



export default LanguageStore;