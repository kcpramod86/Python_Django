#STRINGS
mystring  = "abcdefg"
print(mystring) # This is the way we write comments in python.

#Indexing
print(mystring[-1])
print(mystring[4])

#Slicing
print(mystring[3:])
print(mystring[5:]) #since the indexing start with 0 it print out  "FG"
print(mystring[:5])# sonce the indexing starts from 0.
# If you want to print "cnd"
print(mystring[2:5])
print(mystring[::2])# It jump the step
x = "Item One: {x} Item Two: {y}".format(x = "dog", y = "cat")
print(x)
