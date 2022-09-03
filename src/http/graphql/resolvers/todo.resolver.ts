import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { AuthUser, CurrentUser } from '../../../http/auth/current-user';
import { TodoService } from '../../../services/todo.service';
import { CreateTodoInput } from '../inputs/create-todo-input';
import { Todo } from '../models/todo';

@Resolver()
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Todo)
  createTodo(
    @Args('data') data: CreateTodoInput,
    @CurrentUser() user: AuthUser,
  ) {
    return this.todoService.createTodo({
      ...data,
      userId: user.sub,
    });
  }

  @UseGuards(AuthorizationGuard)
  @Query(() => [Todo])
  todos(@CurrentUser() user: AuthUser) {
    return this.todoService.getTodosByUserId(user.sub);
  }
}
