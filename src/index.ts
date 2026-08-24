export type ProjectSignal = { project: string; owner: string; profile: string; active: boolean };

export const signal: ProjectSignal = { project: "signal-monitor-o0ky", owner: "wardkenne19336", profile: "0033", active: true };

export function headline(value: ProjectSignal = signal): string {
  return value.project + " / " + value.owner;
}
