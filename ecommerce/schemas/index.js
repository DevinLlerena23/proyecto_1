
export const schemaTypes = []
import product from "./Product"
import banner from "./Banner"
import { createSchema } from "sanity"

schemaTypes.push(product);
schemaTypes.push(banner);

export default createSchema({
  name: 'default',
  types:schemaTypes,
});