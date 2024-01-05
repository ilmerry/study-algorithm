import java.io.*;

public class grade{
	private int[] scores;
	private int numOfGroups;

	public grade(int []s, int g){
		int i=0, n = s.length;
		this.scores = new int[n];
		for(i=0;i<n;i++)	this.scores[i] = s[i];
		this.numOfGroups = g;
	}

	public void printScores(){
		int num = scores.length;
		if(num > 0){
			int i=0;
			System.out.println("Number of scores: " + num);
			System.out.println("Number of groups: " + numOfGroups);
			for(i=0;i<num-1;i++)    System.out.print(scores[i] + "  ");
			System.out.println(scores[num-1]);
		}
	}
	public int minimumError(){
		// Remove the following return statement and fill with source code here...
		int n = scores.length;
		quickSort(scores, 0, n-1);
        int[] sum = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            sum[i] = sum[i - 1] + scores[i - 1];
        }

        int[][] dp = new int[n + 1][numOfGroups + 1];
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= numOfGroups; j++) {
                dp[i][j] = Integer.MAX_VALUE;
            }
        }
        dp[0][0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= Math.min(i, numOfGroups); j++) {
                for (int k = 0; k < i; k++) {
					int mid = 0;
					if((i-k) % 2 == 0) {
						mid = k+(i-k)/2-1;
					} else {
						mid = k+(i-k+1)/2-1;
					}
                    int rightSum = sum[i] - sum[mid];
					int leftSum = sum[mid] - sum[k];
					int error = ((mid - k) * scores[mid] - leftSum) + (rightSum - (i - mid) * scores[mid]) + dp[k][j-1];
					if(error >= 0 && dp[i][j] > error) {
                    	dp[i][j] = error;
					}
                }
            }
        }

        return dp[n][numOfGroups];
	}
	// Define additional member functions here if you declared...
	private void quickSort(int[] arr, int p, int r) {
		if(p >= r) return;
		int q = partition(arr, p, r);
		quickSort(arr, p, q-1);
		quickSort(arr, q+1, r);
	}

	private int partition(int[] arr, int p, int r) {
		int x = arr[r], i = p - 1;
		int tmp = 0;

		for(int j=p; j<r; j++) {
			if(arr[j] <= x) {
				i++;
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
		tmp = arr[i+1];
		arr[i+1] = arr[r];
		arr[r] = tmp;

		return i+1;
	}
}

