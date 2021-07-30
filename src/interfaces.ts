export interface IItem {
  name: string;
  time: number;
  id: number;
  url: string;
}

export interface IMinutes {
  id: number;
  time: number;
}

export interface RootState {
  courses: {
    blocks: string[];
    all: IItem[];
    minutes: IMinutes[];
    categories: string[];
  };
}
