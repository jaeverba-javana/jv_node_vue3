import {defineStore} from "pinia";

const CookieManagerStore = defineStore("cookie", {
    state() {return {
        cookie: {
            acceptedCookieKey: "acceptedCookie",
            areAccepted: true
        }

    }},

    getters: {
        accepted(state) {
            return new RegExp('\\b(?<=' + (state.cookie.acceptedCookieKey) + '\\=)(?:\\w|\\s)*\\b').exec(document.cookie)[0];
        },
        showDialog(state) {
            return !state.cookie.areAccepted
        }
    },

    actions: {
        getCookieByKey(key) {
            try {
                return new RegExp('\\b(?<=' + key + '\\=)(?:\\w|\\s)*\\b').exec(document.cookie)[0];
            } catch {
                return ''
            }
        },

        areCookiesAccepted() {
            try {
                this.cookie.areAccepted = !!new RegExp('\\b(?<=' + this.cookie.acceptedCookieKey + '\\=)(?:\\w|\\s)*\\b').exec(document.cookie)[0]
            } catch {
                return false
            }
        },

        setCookiesAccepted(bool) {

        }
    }
})

export default CookieManagerStore