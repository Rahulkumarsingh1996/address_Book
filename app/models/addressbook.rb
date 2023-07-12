class Addressbook < ApplicationRecord
    validates :name, presence: true
    validates :address, presence: true
    validates :phone, presence: true
    validates :age, presence: true
    validates :gender, presence: true
    validates :email, presence: true
end
