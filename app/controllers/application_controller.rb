class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :find_communities

  protected

  def find_communities
    @communities = Community.all.order(:title)
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :comment_subscription])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :comment_subscription])
  end
end
