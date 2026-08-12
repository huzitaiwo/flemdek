/**
 * Verified company facts.
 *
 * Every figure and address here comes from company records supplied by the
 * client. Nothing in this file may be inferred, rounded, or embellished —
 * marketing copy belongs in section components, not in this file.
 */
export const company = {
  name: "FLEMDEK NIG. LIMITED",
  shortName: "FLEMDEK",
  /** Name as recorded on the PenCom register. */
  registeredName: "Flemdek Nigeria Limited",
  rcNumber: "721952",
  tagline: "Electrical & Mechanical Engineering Services",
  email: "flemdek.ng@gmail.com",
  phones: ["08037054416", "08055482146"],
  offices: [
    {
      label: "Head Office",
      address: "Suite B76, Efab Mall, Area 11, Garki, Abuja.",
    },
    {
      label: "Branch Office",
      address: "Plot 2358, FCDA Quarters, Kubwa, Abuja-FCT.",
    },
  ],
} as const;
