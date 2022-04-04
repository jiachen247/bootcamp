class Robot:
    def __init__(self, name):
        self.name = name
        
    def say_hi(self):
        print("Hi, I am " + self.name)

    def attack(self):
        print("attacking!!")
        
class PhysicianRobot(Robot):
    def say_hi(self):
        print("Everything will be okay! ") 
        print(self.name + " takes care of you!")

robot = PhysicianRobot("James")
robot.say_hi()
robot.attack()