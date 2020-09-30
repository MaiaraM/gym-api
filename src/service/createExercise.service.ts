import DuplicationException from "../exceptions/duplication.exception";
import Exercise from "../models/exercise.model";
import ExerciseRepository from '../repositories/exercise.repository';


interface Request {
  name: string;
  member: string;
}

class CreateExerciseService {

  private exerciseRepository: ExerciseRepository;

  constructor(exerciseRepository: ExerciseRepository) {
    this.exerciseRepository = exerciseRepository;
  }

  public execute({ name, member }: Request): Exercise {
    if (this.exerciseRepository.findByName(name)) throw new DuplicationException("name")
    return this.exerciseRepository.create({ name, member });
  }
}

export default CreateExerciseService;
