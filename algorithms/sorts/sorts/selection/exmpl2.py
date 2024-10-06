numArr = [10, 3, 11, 15, 19, 1];
strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

def selection_sort(lst):
    for i, e in enumerate(lst):
        mn = min(range(i,len(lst)), key=lst.__getitem__)
        lst[i], lst[mn] = lst[mn], e
    return lst

print(selection_sort(numArr))
print(selection_sort(strArr))