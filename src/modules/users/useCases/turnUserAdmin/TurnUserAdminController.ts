import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.json({
        name: user.name,
        email: user.email,
        admin: user.admin,
      });
    } catch (error) {
      return response.status(404).send({
        error: error.message || 'Unexpected error.',
      });
    }
  }
}

export { TurnUserAdminController };
