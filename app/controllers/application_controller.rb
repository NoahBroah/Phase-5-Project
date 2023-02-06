class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize


  def current_user
    if (session[:is_employer] == 1)
      @current_user ||= Employer.find_by(id: session[:user_id])
    else
      @current_user ||= Employee.find_by(id: session[:user_id])
    end
  end
  
  def authorize
    render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end

end
