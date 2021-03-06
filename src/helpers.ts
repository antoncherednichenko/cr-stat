import { BadgeI, CardI } from "./types/playerTypes"

export const getId = () => Math.random() + new Date().getTime()

export const checkPath = (path: string):boolean => document.location.pathname === path

export const removeSymbol = (str: string, symbol: string):string => str.replace(symbol, '')

export const kebabToString = (str: string): string => str.split('-').join(' ')

export const capitalizeFirst = (str: string): string => str[0].toUpperCase() + str.substring(1)

export const getChestIcon = (chest: string): string => {
    switch (chest) {
        case 'Gold Crate':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-goldcrate-fs8.png?v=4'
            break
        case 'Overflowing Gold Crate':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-overflowinggoldcrate-fs8.png?v=4'
            break
        case 'Magical Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-magical-fs8.png?v=4'
            break
        case 'Silver Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-silver-fs8.png?v=4'
            break
        case 'Golden Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-golden-fs8.png?v=4'
            break
        case 'Plentiful Gold Crate':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-plentifulgoldcrate-fs8.png?v=4'
            break
        case 'Giant Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-giant-fs8.png?v=4'
            break
        case 'Mega Lightning Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-megalightning-fs8.png?v=4'
            break
        case 'Epic Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-epic-fs8.png?v=4'
            break
        case 'Legendary Chest':
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-legendary-fs8.png?v=4'
            break
        default:
            return 'https://cdn.royaleapi.com/static/img/chests-fs8/128x128/chest-royalwild-fs8.png?v=4'
            break
    }
}

export const getUnfinedCards = (allCards: CardI[], playerCards: CardI[]): CardI[] => {
    const result: CardI[] = []
    allCards.forEach(e => {
        if(!playerCards.some(c => c.id === e.id)) {
            result.push(e)
        }
    })
    return result
}

export const getMasteryCardsBadges = (arr: BadgeI[]): BadgeI[] => {
    const res: BadgeI[] = []
    arr.forEach(b => {
        if(b.name.includes('Mastery')) {
            res.push(b)
        }
    })
    return res
}

export const getBadges = (arr: BadgeI[]): BadgeI[] => {
    const res: BadgeI[] = []
    arr.forEach(b => {
        if(!b.name.includes('Mastery')) {
            res.push(b)
        }
    })
    return res


}

export const camelCaseToNormal = (str: string): string => {

    const newStr: string = str.split('').map(l => {
        if(l.toUpperCase() === l) {
            return ` ${l.toLocaleLowerCase()}`
        } else {
            return l
        }
    }).join('')

    return newStr
}

export const getPracents = (target: number, progress: number): string => {
    return (Math.round(progress * 100 / target)) + '%'
}

export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}