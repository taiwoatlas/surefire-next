export interface EmpowermentValue {
  readonly name: string;
  readonly desc: string;
}

export interface EmpowermentJourneyStage {
  readonly num: number;
  readonly name: string;
  readonly strap: string;
  readonly items: readonly string[];
}

export interface EmpowermentDepartment {
  readonly key: string;
  readonly num: string;
  readonly name: string;
  readonly slug: string; // route segment under /[department]
  readonly theme: string;
  readonly vision: string;
  readonly summary: string;
  readonly functions: readonly string[];
  readonly pathway: readonly string[];
  /** Only present where the church has confirmed a caveat that must ship with this department (e.g. Grants: no guaranteed funding). */
  readonly note?: string;
}

export interface EmpowermentContent {
  readonly motto: string;
  readonly vision: string;
  readonly mission: string;
  readonly purpose: string;
  readonly values: readonly EmpowermentValue[];
  readonly journey: readonly EmpowermentJourneyStage[];
  readonly departments: readonly EmpowermentDepartment[];
}
