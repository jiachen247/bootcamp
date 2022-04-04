######################
# 2. Worker and Tool #
######################

class Tool:
  def __init__(self, name):
    # Tool has 2 attributes, name (set on initialisation) and owner (None by default)
    self.name = name
    self.owner = None

class Worker:
  def __init__(self, name):
    self.name = name
    # Initialise self.tools to empty array for every Worker instance
    self.tools = []

  def pickup(self, tool):
    ''' Put tool in self.tools list if tool does not have owner '''
    # Do nothing if tool already has owner
    if not tool.owner:
      self.tools.append(tool)
      # Set tool's owner to the current Worker instance
      tool.owner = self

  def show_tools(self):
    ''' Print all tools in self.tools '''
    result_string = self.name + " has "
    if not self.tools:
      result_string += "nothing"
    else:
      result_string += str(len(self.tools)) + " tools: "
      for tool in self.tools:
        result_string += tool.name + ", "
      result_string = result_string[:-2] # drop off extra ", "
    print(result_string) 
    
  def dropall(self):
    ''' Drop all tools in self.tools list '''
    for tool in self.tools:
      # Reset tool owner to nobody
      tool.owner = None
    self.tools.clear()


# Study the code execution
tool1 = Tool("Hammer")
tool2 = Tool("Screwdriver")
tool3 = Tool("Drill")
tool4 = Tool("Hammer")

a = Worker("Aly")
b = Worker("Bob")

a.pickup(tool1)
a.show_tools() # Prints "Aly has Hammer"
a.pickup(tool2)
a.pickup(tool3)
a.show_tools() # Prints "Aly has 3 tools: Hammer, Screwdriver, Drill"

b.pickup(tool1) # nothing happens because tool1 is owned by Aly
b.show_tools() # Prints "Bob has nothing"
b.pickup(tool4)
b.show_tools() # Prints "Bob has Hammer"

a.dropall()
a.show_tools() # Prints "Aly has nothing"
b.pickup(tool1)
b.show_tools() # Prints "Bob has 2 tools: Hammer, Hammer"