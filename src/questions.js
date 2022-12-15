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
		for idx in len(self.names):
			name = self.names[idx]
			age = self.ages[idx]

			dog = Dog(name, age, self.good_boy)

			dogs.append(dog)

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
];
