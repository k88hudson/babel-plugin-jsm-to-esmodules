const Com = Components;
const C = Com;
const { utils: Cu } = C;
const { utils } = Components;

import { foo, afw } from "resource://stuff";
import { bar } from "resource://stuff";
import { awe } from "resource://stuff";


const { baz } = Components.utils.flimport("resource://stuff", {});
const { qux } = Components.u.import("resource://stuff", {});
