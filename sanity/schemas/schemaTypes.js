// We import object and document schemas
import blockContent from './blockContent';
import post from './post';
import run from './run';
import distance from './distance';
import duration from './duration';
import backyard from './backyard';
import fkt from './fkt';
import race from './race';
import about from './about';
import mainLink from './mainLink';

// Then we give our schema to the builder and provide the result to Sanity
const schemaTypes = [
  // The following are document types which will appear
  // in the studio.
  post,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  run,
  distance,
  duration,
  backyard,
  fkt,
  race,
  about,
  mainLink,
];

export default schemaTypes;
