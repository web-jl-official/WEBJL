import React from 'react';
import Layout from "../../../../../components/layout/Layout";

const StackQueue = () => {
    const Stack_Queue = `
class Stack:
    def __init__(self, size):
        self.stack = []
        self.size = size

    def is_empty(self):
        return len(self.stack) == 0

    def is_full(self):
        return len(self.stack) == self.size

    def push(self, element):
        if self.is_full():
            print("\nStack is full!")
        else:
            self.stack.append(element)
            print("\nYour Element is Insterted ")

    def pop(self):
        if self.is_empty():
            print("\nStack is empty!")
        else:
            return self.stack.pop()
            

class Queue:
    def __init__(self, size):
        self.queue = []
        self.size = size

    def is_empty(self):
        return len(self.queue) == 0

    def is_full(self):
        return len(self.queue) == self.size

    def enqueue(self, element):
        if self.is_full():
            print("\nQueue is full!")
        else:
            self.queue.append(element)
            print("\nYour Element is Insterted ")
            

    def dequeue(self):
        if self.is_empty():
            print("\nQueue is empty!")
        else:
            return self.queue.pop(0)
            

def main():

    ch = int(input("Choice Your Option : \n1. Creat Stack \n2. Create Queue \nEnter Your Option : "))
    
    if ch == 1:
        size = int(input("Enter the size of Stack : "))
        stack = Stack(size)
        while True:
            print("\n*******************************************")
            print("\nStack Operations:")
            print("1. Push to Stack")
            print("2. Pop from Stack")
            print("3. Check if Stack is Empty")
            print("4. Check if Stack is Full")
            print("5. Exit")
            choice1 = int(input("Enter your choice: "))
            if choice1 == 1:
                element = int(input("\nEnter element to push to stack: "))
                stack.push(element)
                
            elif choice1 == 2:
                print("\nPopped element from stack:", stack.pop())
            elif choice1 == 3:
                print("\nStack is empty:", stack.is_empty())
            elif choice1 == 4:
                print("\nStack is full:", stack.is_full())
            elif choice1 == 5:
                break
            else:
                print("\nInvalid choice! Please try again.")

    elif ch ==2 :
        queue_size = int(input("Enter the size of the queue: "))
        queue = Queue(queue_size)
        while True:
            print("\n*******************************************")
            print("\nQueue Operations:")
            print("1. Enqueue to Queue")
            print("2. Dequeue from Queue")
            print("3. Check if Queue is Empty")
            print("4. Check if Queue is Full")
            print("5. Exit")
            choice2 = int(input("Enter your choice: "))
            if choice2 == 1:
                element = int(input("\n\nEnter element to enqueue to queue: "))
                queue.enqueue(element)
            elif choice2 == 2:
                print("\nDequeued element from queue:", queue.dequeue())
            elif choice2 == 3:
                print("\nQueue is empty:", queue.is_empty())
            elif choice2 == 4:
                print("\nQueue is full:", queue.is_full())
            elif choice2 == 5:
                break
            else:
                print("Invalid choice! Please try again.")
            
    else:
        print("Invalid Option")
    
               

if __name__ == "__main__":
    main()


  `;
    
    const Stack_Queue_Output = `

    ## Output Using Stack
    

Choice Your Option : 
1. Creat Stack 
2. Create Queue 
Enter Your Option : 1
Enter the size of Stack : 3

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 1

Enter element to push to stack: 95

Your Element is Insterted 

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 1

Enter element to push to stack: 85

Your Element is Insterted

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 1

Enter element to push to stack: 75

Your Element is Insterted

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 1

Enter element to push to stack: 85

Stack is full!

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 2

Popped element from stack: 75

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 2

Popped element from stack: 85

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 2

Popped element from stack: 95

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 2

Stack is empty!

Popped element from stack: None

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 3

Stack is empty: True

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 4

Stack is full: False

*******************************************

Stack Operations:
1. Push to Stack
2. Pop from Stack
3. Check if Stack is Empty
4. Check if Stack is Full
5. Exit
Enter your choice: 5


 ## Output Using Queue

Choice Your Option : 
1. Creat Stack 
2. Create Queue 
Enter Your Option : 2
Enter the size of the queue: 3

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 1


Enter element to enqueue to queue: 95

Your Element is Insterted 

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 1


Enter element to enqueue to queue: 85

Your Element is Insterted

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 1


Enter element to enqueue to queue: 75

Your Element is Insterted

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 1


Enter element to enqueue to queue: 65

Queue is full!

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 2

Dequeued element from queue: 95

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 2

Dequeued element from queue: 85

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 2

Dequeued element from queue: 75

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 2

Queue is empty!

Dequeued element from queue: None

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 3

Queue is empty: True

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 4

Queue is full: False

*******************************************

Queue Operations:
1. Enqueue to Queue
2. Dequeue from Queue
3. Check if Queue is Empty
4. Check if Queue is Full
5. Exit
Enter your choice: 5
  `;
    

    const Stack_Queue_GUI = `
import tkinter as tk
from tkinter import messagebox

class Stack:
    def __init__(self, size):
        self.stack = []
        self.size = size

    def is_empty(self):
        return len(self.stack) == 0

    def is_full(self):
        return len(self.stack) == self.size

    def push(self, element):
        if self.is_full():
            messagebox.showerror("Error", "Stack is full!")
        else:
            self.stack.append(element)
            messagebox.showinfo("Success", "Element added to stack")

    def pop(self):
        if self.is_empty():
            messagebox.showerror("Error", "Stack is empty!")
        else:
            return self.stack.pop()

class Queue:
    def __init__(self, size):
        self.queue = []
        self.size = size

    def is_empty(self):
        return len(self.queue) == 0

    def is_full(self):
        return len(self.queue) == self.size

    def enqueue(self, element):
        if self.is_full():
            messagebox.showerror("Error", "Queue is full!")
        else:
            self.queue.append(element)
            messagebox.showinfo("Success", "Element added to queue")

    def dequeue(self):
        if self.is_empty():
            messagebox.showerror("Error", "Queue is empty!")
        else:
            return self.queue.pop(0)

def create_stack():
    size = int(stack_size_entry.get())
    global stack
    stack = Stack(size)
    messagebox.showinfo("Success", "Stack created with size " + str(size))

def create_queue():
    size = int(queue_size_entry.get())
    global queue
    queue = Queue(size)
    messagebox.showinfo("Success", "Queue created with size " + str(size))

def push_stack():
    element = int(stack_element_entry.get())
    stack.push(element)

def pop_stack():
    element = stack.pop()
    if element is not None:
        messagebox.showinfo("Popped Element", "Popped element: " + str(element))

def enqueue_queue():
    element = int(queue_element_entry.get())
    queue.enqueue(element)

def dequeue_queue():
    element = queue.dequeue()
    if element is not None:
        messagebox.showinfo("Dequeued Element", "Dequeued element: " + str(element))

app = tk.Tk()
app.title("Stack and Queue Operations")

# Stack UI
tk.Label(app, text="Stack Size:").grid(row=0, column=0)
stack_size_entry = tk.Entry(app)
stack_size_entry.grid(row=0, column=1)
tk.Button(app, text="Create Stack", command=create_stack).grid(row=0, column=2)

tk.Label(app, text="Element to Push:").grid(row=1, column=0)
stack_element_entry = tk.Entry(app)
stack_element_entry.grid(row=1, column=1)
tk.Button(app, text="Push to Stack", command=push_stack).grid(row=1, column=2)

tk.Button(app, text="Pop from Stack", command=pop_stack).grid(row=2, column=1)

# Queue UI
tk.Label(app, text="Queue Size:").grid(row=3, column=0)
queue_size_entry = tk.Entry(app)
queue_size_entry.grid(row=3, column=1)
tk.Button(app, text="Create Queue", command=create_queue).grid(row=3, column=2)

tk.Label(app, text="Element to Enqueue:").grid(row=4, column=0)
queue_element_entry = tk.Entry(app)
queue_element_entry.grid(row=4, column=1)
tk.Button(app, text="Enqueue to Queue", command=enqueue_queue).grid(row=4, column=2)

tk.Button(app, text="Dequeue from Queue", command=dequeue_queue).grid(row=5, column=1)

app.mainloop()

  `;

    

    return (
      <Layout>
        <div className="text-white m-8">
          <div className="mb-4">
            <h1 className="text-3xl">
              Terminal Stack & Queue Program in Python{" "}
            </h1>

            <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
              {Stack_Queue}
            </pre>
            <br />
            <h2 className="text-3xl">OutPut</h2>
            <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
              {Stack_Queue_Output}
            </pre>
            <br />
            <h1 className="text-3xl">GUI(takinter library)</h1>
            <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
              {Stack_Queue}
            </pre>
            <br />
            <h2 className="text-3xl">OutPut</h2>
            <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl text-center items-center flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/Stack%20and%20Queue%20Operations%2008_30_2024%2020_08_46.png?alt=media&token=982c3e4c-954d-4923-8692-a83279d273b2"
                alt=""
              />
            </pre>
          </div>
          <hr />
        </div>
      </Layout>
    );
}

export default StackQueue;
