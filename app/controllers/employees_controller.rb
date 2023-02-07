class EmployeesController < ApplicationController
    before_action :authorize, only: :show
    def create
        if Employer.where(email: params[:email]).exists?
            render json: { errors: "Oops, looks like you've already used this email. Please Login" }, status: :unprocessable_entity
        else
            employee = Employee.create(employee_params)
            session[:user_id] = employee.id
            session[:is_employer] = 0
            if employee.valid?
                render json: employee, status: :created
            else
                render json: { errors: employee.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end

    def update
        employee = Employee.find_by(id: params[:id])
        employee.update(employee_params)
        if employee.id == current_user.id
            render json: employee, status: :ok
        else
            render json: { errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def destroy
        employee = Employee.find_by(id: params[:id])
        if employee.id == current_user.id
            employee.delete
            head :no_content
        else
            render json: { errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def show
        render json: current_user, status: :ok
    end

    def index
        employees = Employee.all
         render json: employees
    end



    private

    def employee_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
