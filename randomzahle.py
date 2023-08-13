import random

def generate_random_numbers(num_count, min_value, max_value):
    for _ in range(num_count):
        random_number = random.randint(min_value, max_value)
        print(random_number)

if __name__ == "__main__":
    num_count = int(input("Anzahl der Zufallszahlen: "))
    min_value = int(input("Kleinster Wert: "))
    max_value = int(input("Größter Wert: "))
    
    generate_random_numbers(num_count, min_value, max_value)
