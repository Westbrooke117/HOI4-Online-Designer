import * as moduleData from '../json/modules'

const findModuleByName = (moduleName) => {
    return moduleData.default.find((module) => module["Part Name"] === moduleName)
}

export {findModuleByName}