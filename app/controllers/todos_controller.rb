class TodosController < ApplicationController

  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.create todo_params
    status = @todo.errors.present? ? :unprocessable_entity : 200
    render json: @todo, status: status
  end

  def update
    @todo = Todo.find params[:id]
    status = @todo.update_attributes(todo_params) ? 200 : :unprocessable_entity
    render json: @todo, status: status
  end

  def destroy
    Todo.destroy params[:id]
    render json: "destroyed"
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end

end
