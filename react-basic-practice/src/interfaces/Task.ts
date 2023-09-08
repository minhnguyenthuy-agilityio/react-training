export interface Task {
  name: string;
  description: string;
  category: string;
  progress: number;
  studentInvolved: string[];
  dueDateTime: Date;
  image: string;
}

export interface GetTask extends Task {
  id: string;
}

export interface TaskCardInformation extends Task {
  id: string;
  timeLeft: number;
}
