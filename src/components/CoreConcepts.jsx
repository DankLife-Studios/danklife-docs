import CoreConcept from './CoreConcept.jsx';
import { DANK_SCRIPTS } from '../data.js';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Available QBCore Scripts</h2>
      <ul>
        {DANK_SCRIPTS.map((conceptItem) => ( <CoreConcept key={conceptItem.title} {...conceptItem} /> ))}
      </ul>
    </section>
  );
}