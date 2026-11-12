import type { PageData } from "./types";
import * as additionalCitizenship from "./pages/additional-citizenship";
import * as about from "./pages/about";
import * as canada from "./pages/canada";
import * as migration from "./pages/migration";
import * as canadaPr from "./pages/canada-pr";
import * as pr from "./pages/pr";
import * as study from "./pages/study";
import * as visit from "./pages/visit";
import * as portugal from "./pages/portugal";
import * as other from "./pages/other";
import * as citizenship from "./pages/citizenship";

const modules = [additionalCitizenship, about, canada, migration, canadaPr, pr, study, visit, portugal, other, citizenship];

const list: PageData[] = modules.flatMap((m) => Object.values(m) as PageData[]);

export const pages: Record<string, PageData> = Object.fromEntries(list.map((p) => [p.slug, p]));
