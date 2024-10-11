export interface TaskObj {
  id: number;
  task: string;
  finished: boolean;
  created: number;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type FormEvent = React.FormEvent<HTMLFormElement>;
