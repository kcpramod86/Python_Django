mylist = ['a','b','c']
# This will print the string located at the index number -1 since the index start from 0.
print("The list item at index -1 is:")
print(mylist[-1])
mylist = ["a","b","c","d",'e']
#This will insert a lnew list as a member of the list along with the strings.
#mylist.append(["x","y","z"])
#print(mylist)
listtwo = ["x","y","z"]
print("The new list after adding new items is:")
mylist.extend(listtwo)
print(mylist)


#How to delet a item on a list?
item = mylist.pop()
print("The pop item is:")
print(item)

#How to delet a specific item in a list?
item = mylist.pop(5)
print("The pop off item is:")
print(item)
print("The list after poping off the item at the index 5:")
print(mylist)

# How to reverse a list?
mylist.reverse()
print("The reverse list is:")
print(mylist)

# How to sort a list?
mylist_num = [1,45,34,23,12,7,3,9,32,676,2476,23,4]
mylist_num.sort()
print("The sorted list is:")
print(mylist_num)
