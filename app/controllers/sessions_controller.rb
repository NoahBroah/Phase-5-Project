class SessionsController < ApplicationController
    def create
        employee = Employee.find_by(email: params[:email])
        employer = Employer.find_by(email: params[:email])

        if employee&.authenticate(params[:password])
            session[:user_id] = employee.id
            session[:is_employer] = false
            render json: employee, status: :created

        elsif employer&.authenticate(params[:password])
            session[:user_id] = employer.id
            session[:is_employer] = true
            render json: employer, status: :created
        else
            render json: { errors: "Invalid Username or Password"}, status: :unauthorized
        end
    end

    def delete
        session.delete :user_id
        head :no_content
    end
end
