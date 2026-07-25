const CHECKLIST_SECTIONS = [
  {
    id: "immediate-safety",
    number: "1",
    title: "Immediate safety assessment",
    mode: "safety",
    rows: [
      "Reported fault reproduced",
      "Front wheel retained securely",
      "Rear wheel retained securely",
      "Front brake controls bike safely",
      "Rear brake controls bike safely",
      "Frame free from obvious structural failure",
      "Fork free from obvious structural failure",
      "Handlebar free from obvious structural failure",
      "Stem free from obvious structural failure",
      "Front tyre safe to roll or test",
      "Rear tyre safe to roll or test",
      "E-bike battery free from immediate hazard",
    ],
  },
  {
    id: "frame-fork-suspension",
    number: "2",
    title: "Frame, fork and suspension",
    mode: "assessment",
    rows: [
      "Main frame tubes",
      "Frame welds",
      "Frame bonded joints",
      "Head tube",
      "Bottom bracket shell",
      "Seat tube",
      "Rear triangle",
      "Front dropouts",
      "Rear dropouts",
      "Derailleur hanger",
      "Fork blades",
      "Fork crown",
      "Fork steerer",
      "Headset bearings",
      "Suspension stanchions",
      "Suspension seals",
      "Suspension movement",
      "Suspension pivots",
      "Suspension mounting hardware",
    ],
  },
  {
    id: "cockpit-contact-points",
    number: "3",
    title: "Cockpit and contact points",
    mode: "assessment",
    rows: [
      "Handlebar",
      "Stem body",
      "Stem faceplate",
      "Stem fixing bolts",
      "Bar extensions",
      "Bar-end plugs",
      "Grips",
      "Bar tape",
      "Steering range",
      "Control cable routing",
      "Brake hose routing",
      "Front brake lever",
      "Rear brake lever",
      "Left shifter",
      "Right shifter",
      "E-bike remote",
      "E-bike display",
      "Bell",
      "Saddle",
      "Saddle rails",
      "Seatpost",
      "Seatpost clamp",
      "Dropper seatpost",
      "Dropper remote",
    ],
  },
  {
    id: "wheels-tyres",
    number: "4",
    title: "Wheels and tyres",
    mode: "assessment",
    rows: [
      "Front wheel seating",
      "Front axle retention",
      "Front hub bearings",
      "Rear wheel seating",
      "Rear axle retention",
      "Rear hub bearings",
      "Freehub mechanism",
      "Front wheel trueness",
      "Rear wheel trueness",
      "Front spokes",
      "Rear spokes",
      "Front rim",
      "Rear rim",
      "Front rim braking surface",
      "Rear rim braking surface",
      "Front tyre condition",
      "Rear tyre condition",
    ],
  },
  {
    id: "mechanical-brakes",
    number: "5A",
    title: "Mechanical braking system",
    mode: "assessment",
    rows: [
      "Front mechanical brake operation",
      "Rear mechanical brake operation",
      "Front mechanical brake lever",
      "Rear mechanical brake lever",
      "Front brake cable",
      "Rear brake cable",
      "Front cable housing",
      "Rear cable housing",
      "Front cable anchor",
      "Rear cable anchor",
      "Front mechanical brake caliper",
      "Rear mechanical brake caliper",
      "Front mechanical brake mount",
      "Rear mechanical brake mount",
      "Front mechanical brake pads",
      "Rear mechanical brake pads",
      "Front rim-brake pad alignment",
      "Rear rim-brake pad alignment",
      "Front mechanical brake rotor",
      "Rear mechanical brake rotor",
      "Front mechanical rotor retention",
      "Rear mechanical rotor retention",
    ],
  },
  {
    id: "hydraulic-brakes",
    number: "5B",
    title: "Hydraulic braking system",
    mode: "assessment",
    rows: [
      "Front hydraulic brake operation",
      "Rear hydraulic brake operation",
      "Front hydraulic brake lever",
      "Rear hydraulic brake lever",
      "Front hydraulic hose",
      "Rear hydraulic hose",
      "Front hydraulic hose fitting",
      "Rear hydraulic hose fitting",
      "Front hydraulic brake caliper",
      "Rear hydraulic brake caliper",
      "Front hydraulic brake mount",
      "Rear hydraulic brake mount",
      "Front hydraulic brake pads",
      "Rear hydraulic brake pads",
      "Front hydraulic brake rotor",
      "Rear hydraulic brake rotor",
      "Front hydraulic rotor retention",
      "Rear hydraulic rotor retention",
      "Front hydraulic fluid leakage",
      "Rear hydraulic fluid leakage",
      "Front hydraulic bleed condition",
      "Rear hydraulic bleed condition",
    ],
  },
  {
    id: "drivetrain-gears",
    number: "6",
    title: "Crankset, drivetrain and gears",
    mode: "assessment",
    rows: [
      "Left crank arm",
      "Right crank arm",
      "Crank fixing bolts",
      "Crank preload system",
      "Bottom bracket",
      "Left pedal",
      "Right pedal",
      "Chain wear measurement",
      "Chainring",
      "Chainring bolts",
      "Sprocket",
      "Front shift cable",
      "Rear shift cable",
      "Front shift housing",
      "Rear shift housing",
      "Electronic shift wiring",
      "Front derailleur",
      "Rear derailleur",
      "Front derailleur limits",
      "Rear derailleur limits",
      "Rear derailleur B-gap",
      "Full gear range",
      "Under-load shifting",
      "Belt drive",
      "Internal gear hub",
      "Hub-gear cable",
      "Hub reaction arm",
      "Chain line",
    ],
  },
  {
    id: "ebike-battery",
    number: "7",
    title: "E-bike battery and electrical",
    mode: "passFail",
    rows: [
      "Battery seating",
      "Battery lock",
      "Battery casing",
      "Battery impact marks",
      "Battery swelling",
      "Battery temperature",
      "Battery odour",
      "Battery fluid leakage",
      "Battery terminals",
      "Battery mounting rail",
      "Battery latch",
      "Charge port",
      "Charge-port cover",
      "Charger rating",
      "Charger plug",
      "Charger cable",
      "Charger casing",
      "Charger indicator",
      "State of charge",
      "Battery health",
      "Battery cycle count",
      "Main wiring harness",
      "Electrical connectors",
      "Electrical fuses",
      "Accessory power ports",
      "Battery fasteners",
    ],
  },
  {
    id: "ebike-drive",
    number: "8",
    title: "E-bike drive system and diagnostics",
    mode: "passFail",
    rows: [
      "System power-up",
      "System shutdown",
      "Display operation",
      "Assistance modes",
      "Walk assist",
      "Motor mounting",
      "Motor casing",
      "Motor cable exit",
      "Motor noise",
      "Motor play",
      "Drive response",
      "Speed sensor",
      "Speed magnet",
      "Torque sensor",
      "Cadence sensor",
      "Brake cut-off sensor",
      "Shift sensor",
      "System front light",
      "System rear light",
      "Accessory power output",
      "Speed-limit cut-off",
      "Tampering indicators",
      "Diagnostic connection",
      "Stored fault codes",
      "Firmware version",
      "Odometer reading",
      "Service interval",
    ],
  },
  {
    id: "accessories",
    number: "9",
    title: "Accessories",
    mode: "assessment",
    rows: [
      "Front mudguard",
      "Rear mudguard",
      "Front mudguard stays",
      "Rear mudguard stays",
      "Rear rack",
      "Basket",
      "Pannier mounts",
      "Kickstand",
      "Front accessory light",
      "Rear accessory light",
      "Reflectors",
      "Dynamo",
      "Child seat",
      "Trailer hitch",
      "Cargo fittings",
      "Lock",
      "Lock bracket",
      "Bottle cage",
    ],
  },
  {
    id: "functional-road-test",
    number: "10",
    title: "Functional and road test",
    mode: "passFail",
    rows: [
      "Bounce assessment",
      "Flex assessment",
      "Workshop-load steering test",
      "Workshop-load front brake test",
      "Workshop-load rear brake test",
      "Workshop-load gear test",
      "Workshop-load drivetrain test",
      "Controlled road test - only if safe",
      "Road-test handling",
      "Road-test noise",
      "Road-test braking",
      "Road-test shifting",
      "Road-test e-bike cut-off",
      "Post-test safety recheck",
    ],
  },
];

const STATUS_OPTIONS = {
  safety: ["YES", "NO", "STOP"],
  assessment: ["OK", "ADJ", "RPL", "STOP"],
  passFail: ["PASS", "FAIL"],
};

/* ============================================================================
   Runtime
   ==========================================================================*/

const STORAGE_KEY = "workshop-bike-inspection-v1";
const SAVE_DEBOUNCE_MS = 400;
const NOTE_MAX_HEIGHT = 220;

const $ = (selector) => document.querySelector(selector);

const form = $("#checklist-form");
const navigation = $("#section-navigation");
const rail = $("#section-rail");
const railWrap = $("#section-rail-wrap");
const topbar = $("#topbar");
const progressLabel = $("#progress-label");
const progressPercent = $("#progress-percent");
const progressRing = $("#progress-ring");
const ringPercent = $("#ring-percent");
const sidebarProgressLabel = $("#sidebar-progress-label");
const saveState = $("#save-state");
const incompleteFilter = $("#incomplete-filter");
const resetButton = $("#reset-button");
const resetDialog = $("#reset-dialog");
const printButton = $("#print-button");
const toast = $("#toast");
const configurationCount = $("#configuration-count");
const showAllItems = $("#show-all-items");
const configurationOptions = [
  ...document.querySelectorAll("[data-configuration-option]"),
];
const configurationDropdowns = [
  ...document.querySelectorAll("[data-configuration-dropdown]"),
];

const supportsFieldSizing =
  typeof CSS !== "undefined" &&
  CSS.supports &&
  CSS.supports("field-sizing", "content");

/* ---------------------------------------------------------------------------
   Static indexes. Built once, so no hot path ever searches an array or the DOM.
   ------------------------------------------------------------------------ */

function rowId(section, index) {
  return `${section.id}--${index}`;
}

/** `${sectionId}\u0000${label}` -> rowId */
const ROW_ID_BY_LABEL = new Map();
/** rowId -> { section, item, index, lower, side } */
const ROW_META = new Map();

for (const section of CHECKLIST_SECTIONS) {
  section.rows.forEach((item, index) => {
    const id = rowId(section, index);
    const lower = item.toLowerCase();
    ROW_ID_BY_LABEL.set(`${section.id}\u0000${item}`, id);
    ROW_META.set(id, {
      section,
      item,
      index,
      lower,
      side: lower.includes("front")
        ? "front"
        : lower.includes("rear")
          ? "rear"
          : "",
    });
  });
}

function checklistRowId(sectionId, itemLabel) {
  const id = ROW_ID_BY_LABEL.get(`${sectionId}\u0000${itemLabel}`);
  if (!id) {
    throw new Error(`Checklist row not found: ${sectionId} / ${itemLabel}`);
  }
  return id;
}

const CHAIN_WEAR_ROW_ID = checklistRowId(
  "drivetrain-gears",
  "Chain wear measurement",
);
const SPROCKET_ROW_ID = checklistRowId("drivetrain-gears", "Sprocket");
const LEFT_SHIFTER_ROW_ID = checklistRowId(
  "cockpit-contact-points",
  "Left shifter",
);
const CHAIN_WEAR_OPTIONS = ["OK", "0.5", "0.75"];
const TYRE_CONDITION_OPTIONS = [
  "OK",
  "Worn",
  "Degraded",
  "Damaged",
  "Tubeless Related Issue",
];
const FRONT_TYRE_CONDITION_ROW_ID = checklistRowId(
  "wheels-tyres",
  "Front tyre condition",
);
const REAR_TYRE_CONDITION_ROW_ID = checklistRowId(
  "wheels-tyres",
  "Rear tyre condition",
);
const TYRE_CONDITION_ROWS = new Set([
  FRONT_TYRE_CONDITION_ROW_ID,
  REAR_TYRE_CONDITION_ROW_ID,
]);
const FULL_CHECKLIST_TOTAL = CHECKLIST_SECTIONS.reduce(
  (sum, section) => sum + section.rows.length,
  0,
);
const DEFAULT_CONFIGURATION = Object.freeze({
  ebike: "",
  frontBrake: "",
  rearBrake: "",
  suspension: "",
  gearing: "",
  drive: "",
  dropper: "",
});

const EBIKE_ROWS = new Set([
  checklistRowId(
    "immediate-safety",
    "E-bike battery free from immediate hazard",
  ),
  checklistRowId("cockpit-contact-points", "E-bike remote"),
  checklistRowId("cockpit-contact-points", "E-bike display"),
  checklistRowId("functional-road-test", "Road-test e-bike cut-off"),
]);

const DROPPER_ROWS = new Set([
  checklistRowId("cockpit-contact-points", "Dropper seatpost"),
  checklistRowId("cockpit-contact-points", "Dropper remote"),
]);

const FRONT_SUSPENSION_ROWS = new Set([
  checklistRowId("frame-fork-suspension", "Suspension stanchions"),
  checklistRowId("frame-fork-suspension", "Suspension seals"),
  checklistRowId("frame-fork-suspension", "Suspension movement"),
  checklistRowId("functional-road-test", "Bounce assessment"),
]);

const REAR_SUSPENSION_ROWS = new Set([
  checklistRowId("frame-fork-suspension", "Suspension pivots"),
  checklistRowId("frame-fork-suspension", "Suspension mounting hardware"),
]);

const BELT_HIDDEN_ROWS = new Set([
  CHAIN_WEAR_ROW_ID,
  checklistRowId("drivetrain-gears", "Chainring"),
  checklistRowId("drivetrain-gears", "Chainring bolts"),
  checklistRowId("drivetrain-gears", "Chain line"),
]);

const SINGLE_SPEED_ROWS = new Set([
  LEFT_SHIFTER_ROW_ID,
  checklistRowId("cockpit-contact-points", "Right shifter"),
  checklistRowId("drivetrain-gears", "Front shift cable"),
  checklistRowId("drivetrain-gears", "Rear shift cable"),
  checklistRowId("drivetrain-gears", "Front shift housing"),
  checklistRowId("drivetrain-gears", "Rear shift housing"),
  checklistRowId("drivetrain-gears", "Electronic shift wiring"),
  checklistRowId("drivetrain-gears", "Front derailleur"),
  checklistRowId("drivetrain-gears", "Rear derailleur"),
  checklistRowId("drivetrain-gears", "Front derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur B-gap"),
  checklistRowId("drivetrain-gears", "Full gear range"),
  checklistRowId("drivetrain-gears", "Under-load shifting"),
  checklistRowId("drivetrain-gears", "Internal gear hub"),
  checklistRowId("drivetrain-gears", "Hub-gear cable"),
  checklistRowId("drivetrain-gears", "Hub reaction arm"),
  checklistRowId("functional-road-test", "Workshop-load gear test"),
  checklistRowId("functional-road-test", "Road-test shifting"),
]);

const DERAILLEUR_ROWS = new Set([
  checklistRowId("frame-fork-suspension", "Derailleur hanger"),
  checklistRowId("drivetrain-gears", "Front derailleur"),
  checklistRowId("drivetrain-gears", "Rear derailleur"),
  checklistRowId("drivetrain-gears", "Front derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur B-gap"),
]);

const MECHANICAL_SHIFT_ROWS = new Set([
  checklistRowId("drivetrain-gears", "Front shift cable"),
  checklistRowId("drivetrain-gears", "Rear shift cable"),
  checklistRowId("drivetrain-gears", "Front shift housing"),
  checklistRowId("drivetrain-gears", "Rear shift housing"),
]);

const ELECTRONIC_SHIFT_ROWS = new Set([
  checklistRowId("drivetrain-gears", "Electronic shift wiring"),
]);

const INTERNAL_GEAR_ROWS = new Set([
  checklistRowId("drivetrain-gears", "Internal gear hub"),
  checklistRowId("drivetrain-gears", "Hub-gear cable"),
  checklistRowId("drivetrain-gears", "Hub reaction arm"),
]);

/** Rows that disappear when a side has no brake fitted. Allocated once. */
const NO_BRAKE_ROWS = new Set([
  checklistRowId("immediate-safety", "Front brake controls bike safely"),
  checklistRowId("immediate-safety", "Rear brake controls bike safely"),
  checklistRowId("cockpit-contact-points", "Front brake lever"),
  checklistRowId("cockpit-contact-points", "Rear brake lever"),
  checklistRowId("functional-road-test", "Workshop-load front brake test"),
  checklistRowId("functional-road-test", "Workshop-load rear brake test"),
]);

const RIM_SURFACE_ROWS = new Set([
  checklistRowId("wheels-tyres", "Front rim braking surface"),
  checklistRowId("wheels-tyres", "Rear rim braking surface"),
]);

const BRAKE_HOSE_ROUTING_ROW_ID = checklistRowId(
  "cockpit-contact-points",
  "Brake hose routing",
);

/* ---------------------------------------------------------------------------
   Live element caches and running tallies.
   ------------------------------------------------------------------------ */

/** rowId -> { el, buttons, note } */
const rowNodes = new Map();
/** sectionId -> { el, counter, navItem, navCount, chip, chipCount } */
const sectionNodes = new Map();
/** sectionId -> { relevant, complete } */
const sectionStats = new Map();

const relevantRows = new Set();
let totalRelevant = 0;
let totalComplete = 0;

let checklistState = loadState();
delete checklistState.statuses[CHAIN_WEAR_ROW_ID];
delete checklistState.statuses[FRONT_TYRE_CONDITION_ROW_ID];
delete checklistState.statuses[REAR_TYRE_CONDITION_ROW_ID];

let saveTimer = 0;
let toastTimer = 0;
let renderFrame = 0;
let railTouchedAt = 0;

/* ---------------------------------------------------------------------------
   Persistence
   ------------------------------------------------------------------------ */

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && typeof stored === "object") {
      return {
        statuses: stored.statuses || {},
        notes: stored.notes || {},
        measurements: stored.measurements || {},
        multiSelections: stored.multiSelections || {},
        autoStatuses: stored.autoStatuses || {},
        configuration: {
          ...DEFAULT_CONFIGURATION,
          ...(stored.configuration || {}),
        },
        showAllItems: stored.showAllItems === true,
      };
    }
  } catch {
    // A fresh checklist is safer than blocking the form if stored data is invalid.
  }

  return {
    statuses: {},
    notes: {},
    measurements: {},
    multiSelections: {},
    autoStatuses: {},
    configuration: { ...DEFAULT_CONFIGURATION },
    showAllItems: false,
  };
}

function scheduleSave() {
  saveState.textContent = "Saving\u2026";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveChecklist, SAVE_DEBOUNCE_MS);
}

function saveChecklist() {
  saveTimer = 0;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checklistState));
    saveState.textContent = "Saved on this device";
  } catch {
    saveState.textContent = "Could not save on this device";
  }
}

/** Write immediately. iOS may kill a backgrounded tab without warning. */
function flushSave() {
  if (!saveTimer) return;
  clearTimeout(saveTimer);
  saveChecklist();
}

/* ---------------------------------------------------------------------------
   Relevance
   ------------------------------------------------------------------------ */

function rowIsComplete(row) {
  if (TYRE_CONDITION_ROWS.has(row)) {
    return Boolean(checklistState.multiSelections[row]?.length);
  }
  if (row === CHAIN_WEAR_ROW_ID) {
    return Boolean(checklistState.measurements[row]);
  }
  return Boolean(checklistState.statuses[row]);
}

function selectedBrakeType(side) {
  if (side === "front") return checklistState.configuration.frontBrake;
  if (side === "rear") return checklistState.configuration.rearBrake;
  return "";
}

function brakeSystemRowIsRelevant(sectionId, meta) {
  const brakeType = selectedBrakeType(meta.side);
  if (!brakeType) return true;

  if (sectionId === "mechanical-brakes") {
    if (!brakeType.startsWith("mechanical-")) return false;
    if (meta.lower.includes("rim-brake")) return brakeType === "mechanical-rim";
    if (meta.lower.includes("rotor")) return brakeType === "mechanical-disc";
    return true;
  }

  if (sectionId === "hydraulic-brakes") {
    return brakeType === "hydraulic-disc";
  }

  return true;
}

function rowIsRelevant(id) {
  if (checklistState.showAllItems) return true;

  const meta = ROW_META.get(id);
  const section = meta.section;
  const configuration = checklistState.configuration;

  if (section.id === "mechanical-brakes" || section.id === "hydraulic-brakes") {
    return brakeSystemRowIsRelevant(section.id, meta);
  }

  if (configuration.ebike === "no") {
    const isEbikeSection =
      section.id === "ebike-battery" || section.id === "ebike-drive";
    if (isEbikeSection || EBIKE_ROWS.has(id)) return false;
  }

  if (configuration.dropper === "no" && DROPPER_ROWS.has(id)) return false;

  if (configuration.suspension === "rigid") {
    if (FRONT_SUSPENSION_ROWS.has(id) || REAR_SUSPENSION_ROWS.has(id)) {
      return false;
    }
  } else if (
    configuration.suspension === "front" &&
    REAR_SUSPENSION_ROWS.has(id)
  ) {
    return false;
  }

  if (configuration.drive === "chain" && meta.item === "Belt drive") {
    return false;
  }
  if (configuration.drive === "belt" && BELT_HIDDEN_ROWS.has(id)) {
    return false;
  }

  if (configuration.gearing) {
    if (
      DERAILLEUR_ROWS.has(id) &&
      !configuration.gearing.endsWith("-derailleur")
    ) {
      return false;
    }
    if (
      MECHANICAL_SHIFT_ROWS.has(id) &&
      configuration.gearing !== "mechanical-derailleur"
    ) {
      return false;
    }
    if (
      ELECTRONIC_SHIFT_ROWS.has(id) &&
      configuration.gearing !== "electronic-derailleur"
    ) {
      return false;
    }
    if (INTERNAL_GEAR_ROWS.has(id) && configuration.gearing !== "internal") {
      return false;
    }
    if (configuration.gearing === "single" && SINGLE_SPEED_ROWS.has(id)) {
      return false;
    }
    if (configuration.gearing === "internal" && id === LEFT_SHIFTER_ROW_ID) {
      return false;
    }
  }

  const brakeType = selectedBrakeType(meta.side);
  if (brakeType) {
    if (RIM_SURFACE_ROWS.has(id)) return brakeType === "mechanical-rim";
    if (brakeType === "none" && NO_BRAKE_ROWS.has(id)) return false;
  }

  if (id === BRAKE_HOSE_ROUTING_ROW_ID) {
    const hydraulicStillPossible =
      !configuration.frontBrake ||
      configuration.frontBrake === "hydraulic-disc" ||
      !configuration.rearBrake ||
      configuration.rearBrake === "hydraulic-disc";
    if (!hydraulicStillPossible) return false;
  }

  return true;
}

/* ---------------------------------------------------------------------------
   Tallies. Full recompute only on setup changes; taps adjust by +/-1.
   ------------------------------------------------------------------------ */

function recomputeRelevance() {
  relevantRows.clear();
  totalRelevant = 0;

  for (const section of CHECKLIST_SECTIONS) {
    let count = 0;

    for (let index = 0; index < section.rows.length; index += 1) {
      const id = rowId(section, index);
      const isRelevant = rowIsRelevant(id);
      rowNodes.get(id).el.classList.toggle(
        "is-configuration-hidden",
        !isRelevant,
      );
      if (isRelevant) {
        relevantRows.add(id);
        count += 1;
      }
    }

    sectionStats.get(section.id).relevant = count;
    totalRelevant += count;

    const nodes = sectionNodes.get(section.id);
    nodes.el.classList.toggle("is-configuration-hidden", count === 0);
    if (nodes.navItem) nodes.navItem.hidden = count === 0;
    if (nodes.chip) nodes.chip.hidden = count === 0;
  }

  recomputeCompletion();
}

function recomputeCompletion() {
  totalComplete = 0;

  for (const section of CHECKLIST_SECTIONS) {
    let done = 0;
    for (let index = 0; index < section.rows.length; index += 1) {
      const id = rowId(section, index);
      if (relevantRows.has(id) && rowIsComplete(id)) done += 1;
    }
    sectionStats.get(section.id).complete = done;
    totalComplete += done;
  }
}

/** Adjusts the running tallies for one row instead of rescanning the checklist. */
function syncRowCompletion(id, wasComplete) {
  const isComplete = rowIsComplete(id);
  if (isComplete === wasComplete || !relevantRows.has(id)) return;

  const delta = isComplete ? 1 : -1;
  sectionStats.get(ROW_META.get(id).section.id).complete += delta;
  totalComplete += delta;
}

/* ---------------------------------------------------------------------------
   Painting. Coalesced into one animation frame.
   ------------------------------------------------------------------------ */

function scheduleRender() {
  if (renderFrame) return;
  renderFrame = requestAnimationFrame(() => {
    renderFrame = 0;
    renderProgress();
  });
}

function setText(element, value) {
  if (element && element.textContent !== value) element.textContent = value;
}

function renderProgress() {
  const percent = totalRelevant
    ? Math.round((totalComplete / totalRelevant) * 100)
    : 0;

  setText(progressLabel, `${totalComplete} of ${totalRelevant} checked`);
  setText(progressPercent, `${percent}%`);
  setText(ringPercent, `${percent}%`);
  setText(sidebarProgressLabel, `${totalComplete} of ${totalRelevant} items`);
  setText(configurationCount, `${totalRelevant} of ${FULL_CHECKLIST_TOTAL}`);
  const root = document.documentElement.style;
  root.setProperty("--progress-percent", `${percent}%`);
  progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);

  for (const section of CHECKLIST_SECTIONS) {
    const stats = sectionStats.get(section.id);
    const nodes = sectionNodes.get(section.id);
    const done = stats.relevant > 0 && stats.complete === stats.relevant;

    setText(nodes.counter, `${stats.complete} of ${stats.relevant}`);
    setText(nodes.navCount, `${stats.complete}/${stats.relevant}`);
    setText(nodes.chipCount, `${stats.complete}/${stats.relevant}`);
    if (nodes.navLink) nodes.navLink.classList.toggle("is-done", done);
    if (nodes.chip) nodes.chip.classList.toggle("is-done", done);
  }
}

function refreshStatusRow(id) {
  const nodes = rowNodes.get(id);
  if (!nodes) return;

  const current = checklistState.statuses[id] || "";
  for (const button of nodes.buttons) {
    button.setAttribute("aria-pressed", String(current === button.dataset.status));
  }
  nodes.el.classList.toggle("is-complete", rowIsComplete(id));
}

function refreshTyreConditionRow(id) {
  const nodes = rowNodes.get(id);
  if (!nodes) return;

  const selected = checklistState.multiSelections[id] || [];
  const selectedSet = new Set(selected);
  for (const checkbox of nodes.multiOptions) {
    checkbox.checked = selectedSet.has(checkbox.value);
  }
  if (nodes.multiSummary) {
    nodes.multiSummary.textContent = selected.length
      ? selected.join(", ")
      : "Select condition";
  }
  nodes.el.classList.toggle("is-complete", rowIsComplete(id));
}

function refreshChainWearRow() {
  const nodes = rowNodes.get(CHAIN_WEAR_ROW_ID);
  if (!nodes) return;

  const measurement = checklistState.measurements[CHAIN_WEAR_ROW_ID] || "";
  for (const option of nodes.chainOptions) {
    option.checked = option.value === measurement;
  }
  if (nodes.chainSummary) {
    nodes.chainSummary.textContent = measurement || "Select measurement";
  }
  nodes.el.classList.toggle(
    "is-complete",
    rowIsComplete(CHAIN_WEAR_ROW_ID),
  );
}

function closeConditionDropdowns() {
  for (const nodes of rowNodes.values()) {
    if (nodes.conditionDropdown) nodes.conditionDropdown.open = false;
  }
  for (const dropdown of configurationDropdowns) dropdown.open = false;
}

/* ---------------------------------------------------------------------------
   Filters
   ------------------------------------------------------------------------ */

function applyIncompleteFilter() {
  const hideChecked = incompleteFilter.checked;

  for (const section of CHECKLIST_SECTIONS) {
    let visible = 0;

    for (let index = 0; index < section.rows.length; index += 1) {
      const id = rowId(section, index);
      const isRelevant = relevantRows.has(id);
      const hide = hideChecked && isRelevant && rowIsComplete(id);
      rowNodes.get(id).el.classList.toggle("is-incomplete-hidden", hide);
      if (isRelevant && !hide) visible += 1;
    }

    const stats = sectionStats.get(section.id);
    sectionNodes
      .get(section.id)
      .el.classList.toggle(
        "all-hidden",
        stats.relevant > 0 && hideChecked && visible === 0,
      );
  }
}

/** O(section) rather than O(checklist) when a single row changes. */
function refreshSectionFilter(sectionId) {
  if (!incompleteFilter.checked) return;

  const section = CHECKLIST_SECTIONS.find((entry) => entry.id === sectionId);
  let visible = 0;

  for (let index = 0; index < section.rows.length; index += 1) {
    const id = rowId(section, index);
    const isRelevant = relevantRows.has(id);
    const hide = isRelevant && rowIsComplete(id);
    rowNodes.get(id).el.classList.toggle("is-incomplete-hidden", hide);
    if (isRelevant && !hide) visible += 1;
  }

  const stats = sectionStats.get(sectionId);
  sectionNodes
    .get(sectionId)
    .el.classList.toggle("all-hidden", stats.relevant > 0 && visible === 0);
}

/* ---------------------------------------------------------------------------
   Mutations
   ------------------------------------------------------------------------ */

function updateStatus(id, status) {
  const wasComplete = rowIsComplete(id);
  delete checklistState.autoStatuses[id];

  if (checklistState.statuses[id] === status) {
    delete checklistState.statuses[id];
  } else {
    checklistState.statuses[id] = status;
  }

  refreshStatusRow(id);
  syncRowCompletion(id, wasComplete);
  refreshSectionFilter(ROW_META.get(id).section.id);
  scheduleRender();
  scheduleSave();
}

function updateMeasurement(id, value) {
  const wasComplete = rowIsComplete(id);
  const measurement = CHAIN_WEAR_OPTIONS.includes(value) ? value : "";

  if (measurement) {
    checklistState.measurements[id] = measurement;
  } else {
    delete checklistState.measurements[id];
  }

  if (id === CHAIN_WEAR_ROW_ID) {
    const sprocketWasComplete = rowIsComplete(SPROCKET_ROW_ID);
    const automated = checklistState.autoStatuses[SPROCKET_ROW_ID];

    if (measurement === "0.75") {
      if (!automated) {
        checklistState.autoStatuses[SPROCKET_ROW_ID] = {
          source: CHAIN_WEAR_ROW_ID,
          previous: checklistState.statuses[SPROCKET_ROW_ID] || "",
        };
      }
      checklistState.statuses[SPROCKET_ROW_ID] = "RPL";
      refreshStatusRow(SPROCKET_ROW_ID);
      syncRowCompletion(SPROCKET_ROW_ID, sprocketWasComplete);
      showToast("Sprocket marked RPL");
    } else if (automated?.source === CHAIN_WEAR_ROW_ID) {
      if (checklistState.statuses[SPROCKET_ROW_ID] === "RPL") {
        if (automated.previous) {
          checklistState.statuses[SPROCKET_ROW_ID] = automated.previous;
        } else {
          delete checklistState.statuses[SPROCKET_ROW_ID];
        }
      }
      delete checklistState.autoStatuses[SPROCKET_ROW_ID];
      refreshStatusRow(SPROCKET_ROW_ID);
      syncRowCompletion(SPROCKET_ROW_ID, sprocketWasComplete);
    }
  }

  refreshChainWearRow();
  syncRowCompletion(id, wasComplete);
  refreshSectionFilter(ROW_META.get(id).section.id);
  scheduleRender();
  scheduleSave();
}

function updateTyreCondition(id, option, checked) {
  if (!TYRE_CONDITION_ROWS.has(id) || !TYRE_CONDITION_OPTIONS.includes(option)) {
    return;
  }

  const wasComplete = rowIsComplete(id);
  let selected = checklistState.multiSelections[id] || [];

  if (checked) {
    selected =
      option === "OK"
        ? ["OK"]
        : [...selected.filter((item) => item !== "OK" && item !== option), option];
  } else {
    selected = selected.filter((item) => item !== option);
  }

  if (selected.length) {
    checklistState.multiSelections[id] = selected;
  } else {
    delete checklistState.multiSelections[id];
  }

  refreshTyreConditionRow(id);
  if (checked && option === "OK") closeConditionDropdowns();
  syncRowCompletion(id, wasComplete);
  refreshSectionFilter(ROW_META.get(id).section.id);
  scheduleRender();
  scheduleSave();
}

function updateNote(id, value) {
  const nodes = rowNodes.get(id);
  if (nodes) nodes.el.classList.toggle("has-entry", Boolean(value.trim()));

  if (value.trim()) {
    checklistState.notes[id] = value;
  } else {
    delete checklistState.notes[id];
  }
  scheduleSave();
}

function updateConfiguration(key, value) {
  if (!Object.hasOwn(DEFAULT_CONFIGURATION, key)) return;
  checklistState.configuration[key] = value;
  recomputeRelevance();
  applyIncompleteFilter();
  scheduleRender();
  scheduleSave();
}

function updateShowAllItems(showAll) {
  checklistState.showAllItems = showAll;
  recomputeRelevance();
  applyIncompleteFilter();
  scheduleRender();
  scheduleSave();
}

function resetChecklist() {
  checklistState = {
    statuses: {},
    notes: {},
    measurements: {},
    multiSelections: {},
    autoStatuses: {},
    configuration: { ...DEFAULT_CONFIGURATION },
    showAllItems: false,
  };

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to clear if storage is unavailable.
  }

  for (const nodes of rowNodes.values()) {
    for (const button of nodes.buttons) {
      button.setAttribute("aria-pressed", "false");
    }
    nodes.el.classList.remove("is-complete");
    nodes.el.classList.remove("has-entry");
    if (nodes.note) {
      nodes.note.value = "";
      autoGrow(nodes.note);
    }
    if (nodes.select) nodes.select.value = "";
    for (const checkbox of nodes.multiOptions) checkbox.checked = false;
    if (nodes.multiSummary) nodes.multiSummary.textContent = "Select condition";
    for (const option of nodes.chainOptions) option.checked = false;
    if (nodes.chainSummary) nodes.chainSummary.textContent = "Select measurement";
    if (nodes.conditionDropdown) nodes.conditionDropdown.open = false;
  }

  incompleteFilter.checked = false;
  syncConfigurationControls();
  recomputeRelevance();
  applyIncompleteFilter();
  renderProgress();
  saveState.textContent = "New checklist";
  showToast("Checklist reset");
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

/* ---------------------------------------------------------------------------
   Rendering
   ------------------------------------------------------------------------ */

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderChecklist() {
  const navMarkup = [];
  const railMarkup = [];
  const formMarkup = [];

  for (const section of CHECKLIST_SECTIONS) {
    const total = section.rows.length;
    const title = escapeText(section.title);

    navMarkup.push(
      `<li data-section-navigation="${section.id}">` +
        `<button class="nav-link" type="button" data-section-link="${section.id}">` +
        `<span class="nav-number">${section.number}</span>` +
        `<span class="nav-title">${title}</span>` +
        `<span class="nav-count" data-nav-count="${section.id}">0/${total}</span>` +
        `</button></li>`,
    );

    railMarkup.push(
      `<button class="rail-chip" type="button" data-section-link="${section.id}">` +
        `<span class="rail-number">${section.number}</span>` +
        `<span class="rail-title">${title}</span>` +
        `<span class="rail-count" data-rail-count="${section.id}">0/${total}</span>` +
        `</button>`,
    );

    const options = STATUS_OPTIONS[section.mode];
    const statusHeading =
      section.mode === "safety"
        ? "Yes / No / Stop"
        : section.mode === "passFail"
          ? "Pass / Fail"
          : "Status";

    const rows = section.rows.map((item, index) => {
      const id = rowId(section, index);
      const label = escapeAttribute(item);
      const selected = checklistState.statuses[id] || "";
      const measurement = checklistState.measurements[id] || "";
      const note = checklistState.notes[id] || "";
      const isChainWearRow = id === CHAIN_WEAR_ROW_ID;
      const isTyreConditionRow = TYRE_CONDITION_ROWS.has(id);
      const tyreSelections = checklistState.multiSelections[id] || [];

      const statusControl = isTyreConditionRow
        ? `<details class="multi-select" data-multi-select="${id}">` +
          `<summary data-multi-summary>${tyreSelections.length ? escapeText(tyreSelections.join(", ")) : "Select condition"}</summary>` +
          `<div class="multi-select-menu" role="group" aria-label="Tyre condition options for ${label}">` +
          TYRE_CONDITION_OPTIONS.map(
            (option) =>
              `<label><input type="checkbox" data-tyre-condition-id="${id}" value="${escapeAttribute(option)}"${tyreSelections.includes(option) ? " checked" : ""}>` +
              `<span>${escapeText(option)}</span></label>`,
          ).join("") +
          `</div></details>`
        : isChainWearRow
          ? `<details class="multi-select" data-chain-select="${id}">` +
          `<summary data-chain-summary>${measurement || "Select measurement"}</summary>` +
          `<div class="multi-select-menu" role="radiogroup" aria-label="Chain wear measurement">` +
          CHAIN_WEAR_OPTIONS.map(
            (option) =>
              `<label><input type="radio" name="chain-wear-measurement" data-chain-wear-id="${id}" value="${option}"${measurement === option ? " checked" : ""}>` +
              `<span>${option}</span></label>`,
          ).join("") +
          `</div></details>`
          : options
              .map(
                (option) =>
                  `<button class="status-button" type="button" data-row-id="${id}" data-status="${option}" ` +
                  `aria-pressed="${selected === option}" aria-label="${option} for ${label}">${option}</button>`,
              )
              .join("");

      return (
        `<div class="check-row${rowIsComplete(id) ? " is-complete" : ""}${note.trim() ? " has-entry" : ""}" data-row="${id}">` +
        `<div class="row-item"><span class="row-index" aria-hidden="true">${index + 1}</span>` +
        `<span>${escapeText(item)}</span></div>` +
        `<div class="row-status"${isChainWearRow || isTyreConditionRow ? "" : ` role="group" aria-label="Status for ${label}"`}>` +
        statusControl +
        `</div>` +
        `<label class="row-notes"><span class="visually-hidden">Finding or notes for ${escapeText(item)}</span>` +
        `<textarea data-note-id="${id}" aria-label="Finding or notes for ${label}" rows="1" ` +
        `autocapitalize="sentences" autocorrect="on" spellcheck="true" enterkeyhint="done">` +
        `${escapeText(note)}</textarea></label>` +
        `</div>`
      );
    });

    formMarkup.push(
      `<section class="checklist-section" id="${section.id}" data-section="${section.id}" ` +
        `style="--row-count:${total}">` +
        `<header class="section-heading"><span class="section-number">${section.number}</span>` +
        `<h2>${title}</h2>` +
        `<span class="section-counter" data-section-count="${section.id}">0 of ${total}</span></header>` +
        `<div class="table-header" aria-hidden="true"><span>Inspection point</span>` +
        `<span>${statusHeading}</span><span>Measurement / finding / required action</span></div>` +
        `<div class="section-rows">${rows.join("")}</div>` +
        `<div class="empty-filter-state">All items in this section are checked.</div>` +
        `</section>`,
    );
  }

  navigation.innerHTML = navMarkup.join("");
  if (rail) rail.innerHTML = railMarkup.join("");
  form.innerHTML = formMarkup.join("");

  cacheNodes();
  syncConfigurationControls();
  recomputeRelevance();
  applyIncompleteFilter();
  renderProgress();
  if (!supportsFieldSizing) {
    for (const nodes of rowNodes.values()) {
      if (nodes.note && nodes.note.value) autoGrow(nodes.note);
    }
  }
  initialiseSectionObserver();
  measureChrome();
}

/** One pass over the tree, then every later lookup is a Map hit. */
function cacheNodes() {
  rowNodes.clear();
  sectionNodes.clear();
  sectionStats.clear();

  for (const section of CHECKLIST_SECTIONS) {
    const el = form.querySelector(`[data-section="${section.id}"]`);
    const navLink = navigation.querySelector(
      `[data-section-link="${section.id}"]`,
    );
    sectionNodes.set(section.id, {
      el,
      counter: el.querySelector(`[data-section-count="${section.id}"]`),
      navItem: navigation.querySelector(
        `[data-section-navigation="${section.id}"]`,
      ),
      navLink,
      navCount: navigation.querySelector(`[data-nav-count="${section.id}"]`),
      chip: rail ? rail.querySelector(`[data-section-link="${section.id}"]`) : null,
      chipCount: rail
        ? rail.querySelector(`[data-rail-count="${section.id}"]`)
        : null,
    });
    sectionStats.set(section.id, { relevant: 0, complete: 0 });
  }

  for (const el of form.querySelectorAll(".check-row")) {
    rowNodes.set(el.dataset.row, {
      el,
      buttons: el.querySelectorAll(".status-button"),
      note: el.querySelector("textarea"),
      select: el.querySelector(".measurement-select"),
      conditionDropdown: el.querySelector(".multi-select"),
      multiSummary: el.querySelector("[data-multi-summary]"),
      multiOptions: el.querySelectorAll("[data-tyre-condition-id]"),
      chainSummary: el.querySelector("[data-chain-summary]"),
      chainOptions: el.querySelectorAll("[data-chain-wear-id]"),
    });
  }
}

function syncConfigurationControls() {
  for (const dropdown of configurationDropdowns) {
    const key = dropdown.dataset.configurationDropdown;
    const value = checklistState.configuration[key] || "";
    let selectedLabel = "";

    for (const option of dropdown.querySelectorAll("[data-configuration-option]")) {
      option.checked = option.value === value;
      if (option.checked && value) selectedLabel = option.dataset.optionLabel;
    }

    const summary = dropdown.querySelector("[data-configuration-summary]");
    if (summary) {
      summary.textContent =
        selectedLabel || summary.dataset.placeholder || "Select";
    }
  }
  showAllItems.checked = checklistState.showAllItems;
}

/* ---------------------------------------------------------------------------
   Interface helpers
   ------------------------------------------------------------------------ */

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function autoGrow(field) {
  if (supportsFieldSizing || !field) return;
  field.style.height = "auto";
  field.style.height = `${Math.min(field.scrollHeight, NOTE_MAX_HEIGHT)}px`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function preparePrintView() {
  for (const nodes of sectionNodes.values()) {
    const hasEntries = [...nodes.el.querySelectorAll(".check-row")].some(
      (row) =>
        !row.classList.contains("is-configuration-hidden") &&
        (row.classList.contains("is-complete") ||
          row.classList.contains("has-entry")),
    );
    nodes.el.classList.toggle("has-print-entries", hasEntries);
  }
}

/** Sticky header height drives anchor offsets, so measure it rather than guess. */
function measureChrome() {
  const root = document.documentElement.style;
  const topbarHeight = topbar ? topbar.offsetHeight : 0;
  const railHeight =
    railWrap && railWrap.offsetParent !== null ? railWrap.offsetHeight : 0;
  const sticky = window.getComputedStyle(topbar).position === "sticky";

  root.setProperty("--topbar-height", `${topbarHeight}px`);
  root.setProperty(
    "--chrome-height",
    `${(sticky ? topbarHeight : 0) + railHeight}px`,
  );
}

function initialiseSectionObserver() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;

      const activeId = visible[0].target.id;

      for (const [id, nodes] of sectionNodes) {
        const active = id === activeId;
        if (nodes.navLink) nodes.navLink.classList.toggle("active", active);
        if (nodes.chip) {
          nodes.chip.classList.toggle("active", active);
          if (active && Date.now() - railTouchedAt > 1200) {
            nodes.chip.scrollIntoView({ block: "nearest", inline: "center" });
          }
        }
      }
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
  );

  for (const nodes of sectionNodes.values()) observer.observe(nodes.el);
}

function jumpToSection(sectionId) {
  const nodes = sectionNodes.get(sectionId);
  if (!nodes) return;
  nodes.el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

/* ---------------------------------------------------------------------------
   Events. All delegated, so listener count stays flat as the list grows.
   ------------------------------------------------------------------------ */

form.addEventListener("click", (event) => {
  const button = event.target.closest(".status-button");
  if (!button) return;
  updateStatus(button.dataset.rowId, button.dataset.status);
});

form.addEventListener("input", (event) => {
  const field = event.target.closest("[data-note-id]");
  if (!field) return;
  autoGrow(field);
  updateNote(field.dataset.noteId, field.value);
});

form.addEventListener("change", (event) => {
  const tyreOption = event.target.closest("[data-tyre-condition-id]");
  if (tyreOption) {
    updateTyreCondition(
      tyreOption.dataset.tyreConditionId,
      tyreOption.value,
      tyreOption.checked,
    );
    return;
  }

  const chainOption = event.target.closest("[data-chain-wear-id]");
  if (chainOption) {
    updateMeasurement(chainOption.dataset.chainWearId, chainOption.value);
    if (chainOption.value === "OK") {
      closeConditionDropdowns();
    } else {
      const dropdown = chainOption.closest("details");
      if (dropdown) dropdown.open = false;
    }
    return;
  }

  const field = event.target.closest("[data-measurement-id]");
  if (!field) return;
  updateMeasurement(field.dataset.measurementId, field.value);
});

form.addEventListener(
  "focusout",
  (event) => {
    if (event.target.closest("[data-note-id]")) flushSave();
  },
  true,
);

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("[data-section-link]");
  if (link) jumpToSection(link.dataset.sectionLink);
});

if (rail) {
  rail.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-section-link]");
    if (chip) jumpToSection(chip.dataset.sectionLink);
  });
  rail.addEventListener(
    "pointerdown",
    () => {
      railTouchedAt = Date.now();
    },
    { passive: true },
  );
  rail.addEventListener(
    "scroll",
    () => {
      railTouchedAt = Date.now();
    },
    { passive: true },
  );
}

for (const option of configurationOptions) {
  option.addEventListener("change", () => {
    if (!option.checked) return;
    updateConfiguration(option.dataset.configurationOption, option.value);
    syncConfigurationControls();
    const dropdown = option.closest("details");
    if (dropdown) dropdown.open = false;
  });
}

showAllItems.addEventListener("change", () => {
  updateShowAllItems(showAllItems.checked);
});

incompleteFilter.addEventListener("change", applyIncompleteFilter);
printButton.addEventListener("click", () => {
  preparePrintView();
  window.print();
});
window.addEventListener("beforeprint", preparePrintView);

resetButton.addEventListener("click", () => {
  if (typeof resetDialog.showModal === "function") {
    resetDialog.showModal();
  } else if (window.confirm("Reset every status and note in this checklist?")) {
    resetChecklist();
  }
});

resetDialog.addEventListener("close", () => {
  if (resetDialog.returnValue === "confirm") resetChecklist();
  resetDialog.returnValue = "";
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushSave();
});
window.addEventListener("pagehide", flushSave);

if ("ResizeObserver" in window && topbar) {
  new ResizeObserver(measureChrome).observe(topbar);
} else {
  window.addEventListener("resize", measureChrome, { passive: true });
}
window.addEventListener("orientationchange", measureChrome, { passive: true });

renderChecklist();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Offline support is a bonus. The checklist works without it.
    });
  });
}
