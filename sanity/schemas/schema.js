// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import thread from './thread';
import comment from './comment';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    thread,
    comment,
  ]),
});
