import { Router } from 'express';
import BaseException from '../exceptions/base.exception';
import Exercise from '../models/exercise.model';
import ExerciseRepository from '../repositories/exercise.repository';
import CreateExerciseService from '../service/createExercise.service';


const exercisesRouter = Router();

const exerciseRepository = new ExerciseRepository();

exercisesRouter.get('/', (req, resp) => resp.json(exerciseRepository.getAll()));
exercisesRouter.post('/', (req, resp) => {
  try {
    const { name, member } = req.body;
    const createExercise = new CreateExerciseService(exerciseRepository);
    return resp.json(createExercise.execute({ name, member }));
  } catch (err) {
    console.log(err)
    if (err instanceof BaseException) return resp.status(err.status).json({ "error": err })
    return resp.status(500).json({ "error": err })
  }
});
exercisesRouter.put('/:id', (req, resp) => {
  try {
    const { name, member } = req.body;
    const createExercise = new CreateExerciseService(exerciseRepository);
    return resp.json(createExercise.execute({ name, member }));
  } catch (err) {
    console.log(err)
    if (err instanceof BaseException) return resp.status(err.status).json({ "error": err })
    return resp.status(500).json({ "error": err })
  }
});

export default exercisesRouter;
