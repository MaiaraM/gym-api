import Exercise from '../models/exercise.model';


interface CreateExerciseDTO {
  name: string;
  member: string;
}

class ExerciseRepository {
  private exercises: Exercise[];

  constructor() {
    this.exercises = [];
  }

  public getAll(): Exercise[] {
    return this.exercises;
  }

  public create({ name, member }: CreateExerciseDTO): Exercise {
    const newExercise = new Exercise(name, member);

    this.exercises.push(newExercise);

    return newExercise;
  }

  public findByName(name: string): Exercise | null {
    return this.exercises.find(e => e.name === name) || null;
  }
}

export default ExerciseRepository;
