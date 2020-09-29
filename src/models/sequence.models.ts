import BaseModel from "./base.model";
import Exercise from "./exercise.model";

class Sequence extends BaseModel {
  private exercise: Exercise;

  private repetitions: number;

  private sequence: number;

  private weight: number;

  constructor({ exercise, repetitions, sequence, weight }: Sequence) {
    super();
    this.exercise = exercise;
    this.repetitions = repetitions;
    this.sequence = sequence;
    this.weight = weight;
  }
}

export default Sequence;
