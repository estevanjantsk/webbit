require 'active_support/concern'

module VotesCountable
  extend ActiveSupport::Concern

  included do
    def total_votes_count
      (self.get_upvotes.size - self.get_downvotes.size).to_s
    end
  end
end