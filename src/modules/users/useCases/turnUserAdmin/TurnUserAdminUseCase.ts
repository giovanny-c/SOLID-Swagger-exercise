import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {

    const receivedUser = this.usersRepository.findById(user_id)

    if (!receivedUser) {

      throw new Error("This user does not exists")
    }

    return this.usersRepository.turnAdmin(receivedUser)


  }
}

export { TurnUserAdminUseCase };
