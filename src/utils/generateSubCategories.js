import {filterModules} from "./filterModules.js";

const generateSubCategories = (parentCategory) => {
    let subCategories = new Set(filterModules(parentCategory).map((module) => module["Sub-Category"]))
    return [...subCategories]
}

export { generateSubCategories };