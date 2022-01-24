type difficulty = "Easy" | "Medium" | "Hard";

declare global {
  interface Quiz {
    subject: string;
    difficulty: difficulty;
    numOfQuestions: number;
    result: number;
    time: string;
    userId?: string;
  }
}

export {};
