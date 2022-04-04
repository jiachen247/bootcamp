from random import randint


class Player:
    def __init__(self):
        self.hit_points = 10

    def take_damage(self, damage):
        self.hit_points -= damage
        if self.hit_points <= 0:
            print("dead!")
            return False
        return True


class Game:
    def __init__(self):
        self.opponents = []
        self.opponent = None
        self.player = Player()

        opponents_count = int(
            input("how many opponents do you want to fight? "))

        for i in range(opponents_count):
            self.opponents.append(Player())

        self.battle()

    def battle(self):
        self.opponent = self.opponents.pop()
        opponent_dice_roll = randint(1, 6)

        while self.opponent.take_damage(opponent_dice_roll):
            print("he's still alive")

        keep_going = input("keep fighting? y/n ")
        if keep_going == 'y':
            self.battle()


game = Game()