import { Router } from 'express';
import Exercise from '../models/exercise.model';
import ExerciseRepository from '../repositories/exercise.repository';

const exercisesRouter = Router();

const exerciseRepository = new ExerciseRepository();

exercisesRouter.get('/', (req, resp) => resp.json({ mensagem: 'Hi' }));
exercisesRouter.post('/', (req, resp) => {
  const { name, member } = req.body;
  return resp.json(exerciseRepository.create({ name, member }));
});

export default exercisesRouter;
