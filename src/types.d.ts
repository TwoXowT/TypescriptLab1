type Task = {
    id: number;
    text: string;
    done: boolean;
    description: string;
    tags: string[];
}

type completeTask = (selectedTask:Task) => void
