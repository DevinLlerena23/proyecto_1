import {createSchema} from 'sanity'

const schemaTypes = []
import product from './Product'
import banner from './Banner'

schemaTypes.push(product)
schemaTypes.push(banner)

console.log(product)
console.log(banner)
export default createSchema({
  name: 'default',
  types: schemaTypes,
})

export {schemaTypes}
