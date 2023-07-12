class CreateAddressbooks < ActiveRecord::Migration[7.0]
  def change
    create_table :addressbooks do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.integer :age
      t.string :gender
      t.string :email

      t.timestamps
    end
  end
end
