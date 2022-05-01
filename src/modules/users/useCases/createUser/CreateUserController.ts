import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const user = this.createUserUseCase.execute({ name, email });

      return response
        .status(201)
        .json({ name: user.name, email: user.email, admin: user.admin });
    } catch (error) {
      return response.status(400).send({
        error: error.message || 'Unexpected error.',
      });
    }
  }
}

export { CreateUserController };
