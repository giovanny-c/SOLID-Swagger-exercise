import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {

    const emailAlreadyExists = this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {

      throw new Error("This email is already taken")

    }

    // retorna o usuario criado
    return this.usersRepository.create({ name, email })



  }
}

export { CreateUserUseCase };
