'''
Define a class Person, that initializes (constructor) with 3 args: (name, age, is_male)
The object should contain the following attributes
1) name    (str)
2) age     (int)
3) is_male (bool)
4) weight  (int)
'''
class Person:
  # __init__ is the constructor method and used to initialise the class instance. Parameters passed to __init__ need to be passed in when we initialise the instance, for example Person('akira', '38', True)
  def __init__(self, name, age, is_male, weight):
    self.name = name       # set the .name attribute to name
    self.age = age         # set the .age attribute to age
    self.is_male = is_male # set the .is_male attribute to is_male
    self.weight = weight   # set the .weight attribute to weight
    # By the end of __init__, a new Person object is initialised. No need to return self.
  
  def get_name(self):
    # Return the .name attribute of the current instance
    return self.name 
  
  def get_age(self):
    return self.age
    
  def get_weight_pounds(self):
    return self.weight * 2.2
  
  def get_gender(self):
    if self.is_male == True:
      return "Male"
    else:
      return "Female"


p1 = Person("Koi", 18, True, 60)
p2 = Person("Jan", 21, False, 70)

print(p1.name)    # "Koi"
print(p1.age)     # 18
print(p1.is_male) # True

print(p1.get_name())   # "Koi"
print(p1.get_age())    # 18
print(p1.get_gender()) # "Male"

print(p2.get_gender()) # "Female"
print(p1.get_weight_pounds())    # 132.2