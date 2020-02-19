class AddSidebarToCommunities < ActiveRecord::Migration[6.0]
  def change
    add_column :communities, :sidebar, :text
  end
end
