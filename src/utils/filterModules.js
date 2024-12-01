import * as moduleData from '../json/modules'

const filterModules = (type) => {
    return moduleData.default.filter(obj => {
        return obj["Module Slot"] === type
    })
}

const filterModulesBySubcategory = (subcategory) => {
    return moduleData.default.filter(obj => {
        return obj["Sub-Category"] === subcategory
    })
}

export { filterModules, filterModulesBySubcategory }