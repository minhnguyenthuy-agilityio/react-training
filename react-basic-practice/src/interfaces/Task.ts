export interface TaskParam {
  name: string;
  description: string;
  category: string;
  progress: number;
  studentInvolved: string[];
  dueDateTime: Date;
  image: string;
}

export interface Task extends TaskParam {
  id: string;
}

export interface TaskCardInformation extends Task {
  timeLeft: number;
}
