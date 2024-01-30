def avg_array(numbers):
    total = sum(numbers)
    avg = total / len(numbers)
    return avg

# Пример использования
my_array = [1, 2, 3, 4, 5]
result = avg_array(my_array)
print(result)  # Выведет 3.0
