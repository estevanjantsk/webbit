class Community < ApplicationRecord
  belongs_to :user
  has_many   :submissions

  before_save :format_name

  def format_name
    # the ! after gsub modifes the attribute.
    self.name.titleize
    self.name.gsub!(' ', '')
  end
end
