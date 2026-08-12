/**
 * Representative project types.
 *
 * NOTHING IN THIS FILE IS A RECORD OF COMPLETED WORK. No verified FLEMDEK
 * project portfolio exists in the company record, so this file deliberately
 * carries no client, site, location, date, contract value, project count,
 * certification, award or outcome. Each entry describes a *kind* of project in
 * general engineering terms — the shape a scope takes and which of the approved
 * services it draws on — and nothing more.
 *
 * The list is separated from the section that renders it so that verified
 * project records can replace it later without the component changing: the
 * section reads `title`, `discipline`, `summary`, `scope` and `image`, and
 * nothing else. A real project record carrying those same fields — plus, at
 * that point, whatever is genuinely on file — drops straight in.
 *
 * Every name in `scope` is reproduced exactly as it appears in the approved
 * services list rendered by `services.tsx`. No entry introduces a service the
 * list does not contain.
 *
 * PHOTOGRAPHY. Representative Unsplash material showing the sector, NOT
 * FLEMDEK installations. That is why each image is presented decoratively
 * (`alt=""`) in the section and is never captioned as a project of the
 * company's, and why the section states the same in visible copy. Sources, by
 * Unsplash photo id:
 *
 *   projects-power-supply.jpg       photo-1509390673020-a5b2450e33f1
 *   projects-building-services.jpg  photo-1785682117611-586d39bfd5f2
 *   projects-industrial-plant.jpg   photo-1717386255773-1e3037c81788
 *   projects-retrofit-works.jpg     photo-1621905251189-08b45d6a269e
 */

/** The discipline a scope sits in — the company's own declared field, split. */
export type Discipline = "Electrical" | "Mechanical" | "Electrical & mechanical";

export interface ProjectImage {
  /** Served from `public/`, so a path rather than a static import. */
  src: string;
  /**
   * `object-position` for the crop, as a CSS value. Held here rather than as a
   * Tailwind class because it is per-photograph data: the class would have to
   * be generated from a dynamic string, which the compiler cannot see.
   */
  focus: string;
}

export interface ProjectType {
  /** The kind of project. Describes a type of scope, never a delivered job. */
  title: string;
  discipline: Discipline;
  /** What work of this kind involves, in general terms. Claims nothing. */
  summary: string;
  /** Approved service names a scope of this kind draws on. */
  scope: readonly string[];
  image: ProjectImage;
}

/**
 * Four types. The first is rendered as the lead plate and the rest as a row, so
 * order is presentational as well as editorial: it runs from the incoming
 * supply, through a building under construction, out to fixed plant, and back
 * to installations already in service.
 */
export const projectTypes: readonly ProjectType[] = [
  {
    title: "Power supply and distribution",
    discipline: "Electrical",
    summary:
      "Work that starts at the incoming supply: a transformer positioned, terminated and energised, protection and standby provision behind it, then distribution run out to the boards that feed the building.",
    scope: [
      "Power Transformer Installation",
      "Power Systems Installation",
      "UPS Wiring",
      "Building Wiring",
    ],
    image: { src: "/images/projects-power-supply.jpg", focus: "50% 52%" },
  },
  {
    title: "New-build services installation",
    discipline: "Electrical & mechanical",
    summary:
      "Services installed into a building still under construction — containment and cabling routed through the structure at first fix, then terminated, tested and handed over at second.",
    scope: ["Building Wiring", "Lighting Systems", "Data Systems", "Fire Alarm Systems"],
    image: { src: "/images/projects-building-services.jpg", focus: "50% 46%" },
  },
  {
    title: "Industrial and plant installation",
    discipline: "Electrical & mechanical",
    summary:
      "Power and control taken to fixed plant: supplies sized for the machine, the steelwork carrying them into position, and the controls the plant is run and monitored from.",
    scope: [
      "Power Systems Installation",
      "Gantry Installation",
      "Building Management Systems (BMS)",
    ],
    image: { src: "/images/projects-industrial-plant.jpg", focus: "58% 50%" },
  },
  {
    title: "Retrofit and upgrade works",
    discipline: "Electrical",
    summary:
      "An installation already in service extended, replaced or brought up to specification — staged around a building that has to keep operating while the work runs.",
    scope: ["Building Wiring", "Lighting Systems", "UPS Wiring", "Project Management"],
    image: { src: "/images/projects-retrofit-works.jpg", focus: "42% 42%" },
  },
] as const;
