class EmployersController < ApplicationController

    before_action :authorize, only: :show

    def create
        if Employee.where(email: params[:email]).exists?
            render json: { errors: "Oops, looks like you've already used this email. Please Login" }, status: :unprocessable_entity
        else
            employer = Employer.create(employer_params)
            session[:user_id] = employer.id
            session[:is_employer] = 1
            if employer.valid?
                render json: employer, status: :created
            else
                render json: { errors: employer.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end

    def update
        employer = Employer.find_by(id: params[:id])
        employer.update(employer_params)
        if employer.id == current_user.id
            render json: employer, status: :ok
        else
            render json: { errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def destroy
        employer = Employer.find_by(id: params[:id])
        if employer.id == current_user.id
            employer.delete
            head :no_content
        else
            render json: { errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def show
        render json: current_user, status: :ok
    end

    def index
        employers = Employer.all
         render json: employers
    end


    private

    def employer_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
