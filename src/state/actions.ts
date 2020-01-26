export const SET_LOCALE = 'setLocale'
export const SET_STATS = 'setStats'
export const SET_IMAGE = 'setImage'

export function setLocale(data: string) {
    return { type: SET_LOCALE, payload: data }
}

export function setStats(data: Record<string, any>) {
    return { type: SET_STATS, payload: data }
}

export function setImage(data: Record<string, any>) {
    return { type: SET_IMAGE, payload: data }
}
