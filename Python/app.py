import os

'''
    CLI-based To-Do List

    Created by Jason Yi
'''

# DEV: Need to implement local file storage reading and writing

# opening the tasks.txt file
file = open('../tasks.txt', 'r')

tasks = []

# refreshes CLI with current information
def renderTasks():
    os.system('cls')

    print('------To-Do-----')

    if len(tasks) > 0:
        for task in tasks:
            print(task)
    else:
        print('(Nothing yet)')

    print()

# inserts a new task to the BEGINNING of the list of tasks
def addTask():
    renderTasks()

    newTask = input('Enter new task: ')
    
    tasks.insert(0, f'[ ] {newTask}')

# marks a task as completed or removes a task
def modifyTask(c):
    completing = c
    done = False

    while done == False:
        os.system('cls')

        print('------To-Do-----')

        # print tasks
        for num in range(len(tasks)):
            if tasks[num][1] == ' ':
                print(f'[{num + 1}] {tasks[num][4:]}')
            else:
                print(f'[X] {tasks[num][4:]}')

        print()

        # allows program to continue if input type is not castable to integer
        try:
            chosenTask = int(input('>>> '))
        except:
            errorScreen('INPUT MUST BE A NUMBER')
            continue

        # checks if a number not in the list is given
        if (chosenTask - 1) not in range(len(tasks)):
            errorScreen('NUMBER NOT IN LIST')
            continue
        else:

            if completing == True:
                # mark task as complete
                tasks[chosenTask - 1] = f'[X] {tasks[chosenTask - 1][4:]}'
            else:
                # remove task
                tasks.pop(chosenTask - 1)

            done = True

# invalid input screen
def errorScreen(message):
    os.system('cls')
    print(f'{message}\n')
    noneInput = input('Press the ENTER key to continue...')
    


# app loop
while True:

    # printing list of tasks to terminal
    renderTasks()

    actionInput = input("WHAT'S NEXT?\n[1] - Add a task\n[2] - Mark a task as completed\n[3] - Remove a task\n[exit]\n>>> ")

    if actionInput == '1':
        addTask()
    elif actionInput == '2':
        if len(tasks) > 0:
            modifyTask(True)
        else:
            errorScreen('LIST IS EMPTY')
    elif actionInput == '3':
        if len(tasks) > 0:
            modifyTask(False)
        else:
            errorScreen('LIST IS EMPTY')
    elif actionInput.lower() == 'exit': # breaks out of the loop and terminates the application
        file.close()
        break
    else: # invalid input catch
        errorScreen('INVALID INPUT')