import "core-js/stable";
import "regenerator-runtime/runtime";
import {pwa} from "./pwa";
import {setupRedirect} from "./redirect";
import {settings} from "./settings";
import {voice} from "./voice";
import {setupCalendar} from "./calendar";
import "../css/index.scss";

pwa();
setupRedirect();
settings();
voice();
setupCalendar();

