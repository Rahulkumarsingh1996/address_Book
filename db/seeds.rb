9.times do |i|
    Addressbook.create(
      name: "Rahul singh #{i + 1}",
      address: "Bihar",
      phone: 00,
      age:20,
      gender: "male",
      email: "rahul@gmail.com"
    )
  end