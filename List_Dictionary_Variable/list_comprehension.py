#list
matrix = [[1,2,3],[4,5,6],[7,8,9]]
# How to print out the first elements of the each lists inside of the list Matrix?
#print(matrix[0][0])
#print(matrix[1][0])
#print(matrix[2][0])

first_col = [row[0] for row in matrix]
second_col = [row[1] for row in matrix]
third_col = [row[2] for row in matrix]
print(first_col,second_col,third_col)
