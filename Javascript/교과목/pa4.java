import java.io.*;

public class card{
	private int[] myDeck;
	private int[] enemy;

	public card(int []my, int[] en){
		int i=0, n = my.length;
                this.myDeck = new int[n];
		this.enemy = new int[n];
                for(i=0;i<n;i++){
			this.myDeck[i] = my[i];
			this.enemy[i] = en[i];
		}
	}

	public void printCards(){
		int i=0, num = myDeck.length;
		System.out.println("Total: " + num + " cards");
		for(i=0;i<num-1;i++)	System.out.print(myDeck[i] + ", ");
		if(num>0)	System.out.println(myDeck[num-1]);
		for(i=0;i<num-1;i++)	System.out.print(enemy[i] + ", ");
		if(num>0)	System.out.println(enemy[num-1]);
		return;
	}

	public int maxScore(){
		int score = 0;

		// Write your source code here...
		int n = myDeck.length;
		quickSort(myDeck, 0, n-1);
		quickSort(enemy, 0, n-1);
		//printCards();

		int j=enemy.length-1;
		for(int i=myDeck.length-1; i>=0;) {
			if(i < 0 || j < 0) break;
			if(myDeck[i] > enemy[j]) {
				score++;
				i--;
			}
			j--;
		}

		return score;
	}

	// Define additional member functions here if you need...
	private void quickSort(int[] arr, int p, int r) {
		if(p<r) {
			int q = partition(arr, p, r);
			quickSort(arr, p, q-1);
			quickSort(arr, q+1, r);
		}
	}

	private int partition(int[] arr, int p, int r) {
		int x = arr[r];
		int i = p-1;
		for(int j=p; j<r; j++) {
			if(arr[j] <= x) {
				i++;
				int tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}

		int tmp = arr[i+1];
		arr[i+1] = arr[r];
		arr[r] = tmp;
		return i+1;
	}
}
