//import * as geoip from 'geoip-country'
//import * as ip from 'ip'

export class GeolocationUtils {
    static getSuitableDisplayLocale(availableCodes: object) : string {
        let code = navigator.language.slice(0,2).toUpperCase()
        if (code in availableCodes) {
            console.log(`CODE FOUND! SHOWING IN: ${code}`)
            return code
        }
        console.log('CANNOT FOUND CODE! DEFAULTED TO EN')
        return 'EN'
    }
}