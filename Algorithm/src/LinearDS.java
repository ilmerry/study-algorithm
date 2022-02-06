class Stack {
	final int STACK_SIZE = 100;
	int top = -1;
	int[] stack = new int[STACK_SIZE];
	
	void push(int item) {
		if(top >= STACK_SIZE - 1)
			System.out.println("stack full...");
		else
			stack[++top] = item;
	}
	
	int pop() {
		if(top < 0) {
			System.out.println("stack empty...");
			return -99;
		}
		return stack[top--];
	}
}

class Queue {
	final int QUEUE_SIZE = 100;
	int rear = -1;
	int front = -1;
	int[] queue = new int[QUEUE_SIZE];
	
	void add(int item) {
		if(rear == QUEUE_SIZE-1) 
			System.out.println("Queue is full...");
		else
			queue[++rear] = item;
	}
	
	int delete() {
		if(front == rear) {
			System.out.println("Queue is empty...");
			return -999;
		}
		return queue[++front];
	}
}

public class LinearDS {

	public static void main(String[] args) {
		Queue q = new Queue();
		q.add(3);				// 3(r)
		q.add(5);				// 3 5(r)
		int item = q.delete(); // 3(f) 5(r)
		System.out.println(item);
	}

}
