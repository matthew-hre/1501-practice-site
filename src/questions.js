export const comp_questions = [
  {
    id: 1,
    title: "Function Anatomy",
    body: "Given the following function:",
    snippet: "def funky(arg1: int) -> None:\n    print(arg1 ** 2)",
    question: "What line is known as the 'function head'?",
    answers: ["1"],
  },
  {
    id: 2,
    title: "Function Anatomy",
    body: "Given the following updated function:",
    snippet: `
      def funky(arg1: int) -> None:
    first_math = arg1 ** 2
	second_math = first_math / arg1
	third_math = second_math - first_math
	print(third_math + arg1)`,
    question: "At what line does the 'function body' begin?",
    answers: ["2"],
  },
  {
    id: 3,
    title: "Function Anatomy",
    body: "Given the same function as the last question:",
    snippet: `
		def funky(arg1: int) -> None:
	first_math = arg1 ** 2
	second_math = first_math / arg1
	third_math = second_math - first_math
	print(third_math + arg1)`,
    question: "How many variables are there? Careful with this one...",
    answers: ["4"],
  },
  {
    id: 4,
    title: "Function Anatomy",
    body: "Based on nothing but the given function head:",
    snippet: `
		  def my_really_really_massively_big_funny_funky_function_name(arg1: int, arg2: str, argument_the_third = None) -> int:`,
    question: "What type of data will this function return?",
    answers: ["int", "integer"],
  },
  {
    id: 5,
    title: "Function Anatomy",
    body: "",
    snippet: `# no code for this question`,
    question:
      "If a function doesn't return anything, it's known as a ___-returning function.",
    answers: ["void"],
  },

  {
    id: 6,
    title: "Stack Traces",
    body: "Given the following function:",
    snippet: `
	  	def triangles(width: float, height: int):
	width *= 2
	height -= 1
	a = 4
	b = 7.5
	width += (a - b)
	height = (height - a) + width
	return width * height`,
    question:
      "What would this function return, given the values 2.5 and 11 as arguments? If the code errors, please input what line the error is on",
    answers: ["11.25"],
  },
  {
    id: 7,
    title: "Stack Traces",
    body: "Given the following code:",
    snippet: `
		def format_real_nice(thingy: str):
	return f"The final answer is {thingy}!"
	
def do_some_math(num1: int, num2: float):
	a = 2
	b = num2 - num1
	c = 9
	a = c - b
	b -= 1
	return a + b + c
	
def crunch_some_numbers(number: int):
	my_var = 5
	your_var = number
	our_var = 0
	my_var = your_var
	your_var = my_var
	our_var = your_var + my_var
	return our_var
	
def main():
	first_number = 12
	second_number = 11
	third_number = 2
	second_number = do_some_math(first_number, second_number)
	first_number = crunch_some_numbers(third_number)
	third_number = first_number + second_number
	string_number = str(third_number + 1)
	print(format_real_nice(string_number))
	return third_number
	
main()`,
    question:
      "What is the return value of main? If the code errors, please input what line the error is on",
    answers: ["21"],
  },
  {
    id: 8,
    title: "Stack Traces",
    body: "Given the following code:",
    snippet: `
def make_a_big_list(width: int, height: int) -> list:
	for i in range(len(width)):
		for j in range(len(height)):
			my_list.append(1)

	return my_list

def add_up_the_big_list(big_list: list) -> int:
	total = 0
	for row in big_list:
		for number in row:
			total += number

	return total

def find_area()
	big_list = make_a_big_list(25, 25)
	area = add_up_the_big_list(big_list)
	return area
`,
    question:
      "What is the return value of find_area? If the code errors, please input what line the error is on",
    answers: ["4"],
  },
  {
    id: 9,
    title: "Stack Traces",
    body: "Given the following classes and functions:",
    snippet: `
class Dog:
	def __init__(self, name, age, good_boy):
		self.name = name
		self.age = age
		self.good_boy = good_boy


class Factory:
	def __init__(self):
		self.names = ["Winnie", "Pip", "Dylan", "Colton", "Matthew", "Cool Matthew"]
		self.ages = [3, 1, 4, 1, 5, 9]
		self.good_boy = False
		self.dogs = []

	def make_dogs(self):
		for idx in range(len(self.names)):
			name = self.names[idx]
			age = self.ages[idx]

			dog = Dog(name, age, self.good_boy)

			self.dogs.append(dog)

			if self.good_boy:
				self.good_boy = False
			else:
				self.good_boy = True


def dog_factory():
	factory = Factory()
	factory.make_dogs()

	ages = 0

	for dog in factory.dogs:
		if dog.good_boy:
			ages += dog.age

	return ages
  `,
    question:
      "What is the return value of dog_factory? If the code errors, please input what line the error is on",
    answers: ["11"],
  },
  {
    id: 10,
    title: "Errors",
    body: "Given the following broken code:",
    snippet: `
def test(a: int, b: int):
    return a * b

value_x = 3
value_y = 11

return test(a, b)
  `,
    question:
      "Identify which type of error is occuring (syntax, logic, compilation)",
    answers: ["syntax"],
  },
  {
    id: 11,
    title: "Errors",
    body: "Given the following broken function:",
    snippet: `
def get_area_of_square():
    width = input("please enter a width (in meters): ")
    height = input("please enter a height (in meters): ")

    if width > 10:
      	print("the width is too large!")
    else if width <= 0:
      	print("the width is too small!")

    if height > 12:
      	print("the width is too large!")
    else if width < 4:
      	print("the width is too small!")

    return width * height
  `,
    question:
      "Identify which type of error is occuring (syntax, logic, compilation)",
    answers: ["compilation"],
  },
  {
    id: 12,
    title: "Errors",
    body: "Given the following broken code:",
    snippet: `
def func1(test_num):
    test_num *= 2
    bigger_num = test_num + 5
    return bigger_num

def func2(test_num, second_test_num):
    test_num *= second_test_num
    second_test_num = test_num * 5
    return test_num / second_test_num

FIRST_NUMBER = 2
SECOND_NUMBER = 5
THIRD_NUMBER = 8

begin = func1(FIRST_NUMBER)
continue = func3(begin, SECOND_NUMBER)
end = func2(begin, continue)

def func3(test_num, second_test_num):
    test_num -= second_test_num
    second_test_num = test_num - 11
    return test_num + second_test_num - 2
  `,
    question:
      "Identify which type of error is occuring (syntax, logic, compilation)",
    answers: ["compilation"],
  },
  {
    id: 13,
    title: "Loops",
    body: "Considering the following code:",
    snippet: `
x = 0
while x < 10:
	x += 2
  `,
    question: "Is this a counted loop or a sentinel loop?",
    answers: ["counted"],
  },
  {
    id: 14,
    title: "Loops",
    body: "Considering the following code:",
    snippet: `
my_answer = input("should i stop? ")
while x != "nah":
	x = input("should i stop? ")
  `,
    question: "Is this a counted loop or a sentinel loop?",
    answers: ["sentinel"],
  },
  {
    id: 15,
    title: "Loops",
    body: "Consider the following code:",
    snippet: `
def loop_time(my_list):
	LIST_SIZE = len(my_list)
	item_index = 0
	
	while item_index < LIST_SIZE:
		print(my_list[item_index])
		item_index += 1

def cards():
	suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
	values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
	deck = []

	for suit in suits:
		for value in values:
			deck.append(f"{value} of {suit}")

	return deck

deck = cards()

loop_time(deck)
  `,
    question: "How many lines will be printed to the console when this runs?",
    answers: ["52"],
  },
  {
    id: 16,
    title: "Loops",
    body: "Consider the updated code:",
    snippet: `
def loop_time(my_list):
	LIST_SIZE = len(my_list)
	item_index = 0
	count = 0
	
	while item_index < LIST_SIZE:
		#
		# LOOK OUT! this changed!
		#
		if my_list[item_index][0] != "A" and my_list[item_index][0] != "J" and my_list[item_index][0] != "Q" and my_list[item_index][0] != "K":
			count += int(my_list[item_index][0]) # watch this...
		item_index += 1

	print(count)

def cards():
	suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
	values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
	deck = []

	for suit in suits:
		for value in values:
			deck.append(f"{value} of {suit}")

	return deck

deck = cards()

loop_time(deck)
  `,
    question: "What value will be printed to the console when this code runs?",
    answers: ["180"],
  },

  {
    id: 17,
    title: "Practice Coding Problems",
    body: 'The next few problems will contain a prompt, an input file, and a question. Feel free to read the input from a file, or manually parse it into a list or whatever you gotta do. A magic square is defined as a 3x3 square, where each element in the square is an integer greater than 0, and the sum of the numbers of each row and column are the same "magic number". Please write a program to validate the following magic squares. Then, multiply together all the "magic numbers" found. If a magic square is not valid, its "magic number" should be considered -1.',
    snippet: `
4 9 2
3 5 7
8 1 6

15 8 13
10 12 14
11 16 9

19 12 17
14 16 18
15 20 13

11 2 21
1 5 7
21 10 8

7 0 5
2 4 6
3 8 1

21 14 19
16 18 20
17 22 15

23 16 21
18 21 22
19 24 17

13 6 10
8 10 12
9 4 7

#
# This problem is a bit tricky, so here's a kind of step by step process:
# First, you'll need to turn these magic squares into workable data. Probably a 2d list.
# Next, you're gonna need to figure out if a square is magic or not. This means, every row and column needs to sum up to *some* value. You'll probably wanna keep track of this value somewhere.
# Once you figure out if a square is magic or not, you'll want to modify your final result/score/counter variable. Whatever you called it.
#
  `,
    question: "What value will be printed to the console when this code runs?",
    answers: ["-16796160"],
  },
];
