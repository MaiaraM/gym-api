import BaseModel from './base.model';
import DayOfWeek from './enums/day.enum';
import Sequence from './sequence.models';

class Training extends BaseModel {
  name: string;

  dayOfWeek: DayOfWeek[];

  sequences: Sequence[];

  constructor({ name, sequences, dayOfWeek }: Training) {
    super();
    this.name = name;
    this.sequences = sequences;
    this.dayOfWeek = dayOfWeek;
  }

  public addSequence(sequence: Sequence): Sequence[] {
    this.sequences.push(sequence);
    return this.sequences;
  }

  public removeSequence(sequence: Sequence): Sequence[] {
    this.sequences = this.sequences.filter(s => s.id !== sequence.id);
    return this.sequences;
  }
}

export default Training;
