class Cat:
  def __init__(self, name, age, is_male, weight):
    print("making a new cat")
    self.name = name
  
  def get_name(self):
    # Return the .name attribute of the current instance
    return self.name

cat1 = Cat("Kai", 2, True, 20)
cat2 = Cat("Chee Kean", 3, False, 10)

print(cat1.get_name())
print(cat2.get_name())  