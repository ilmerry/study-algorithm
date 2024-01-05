import java.io.*;
import java.util.*;
public class sop{
	private int[] array;
	public sop(int[] a){
		int i=0, n = a.length;
		this.array = new int[n];
		for(i=0;i<n;i++)	this.array[i] = a[i];
	}
	public void printArray(){
		int i=0;
		for(i=0;i<array.length;i++)	System.out.print(array[i] + "  ");
		System.out.println();
	}
	public int maxSOP(){
		// Remove the following return statement and fill with source code here...
		if(array.length == 1) return array[0];
		if(array.length == 2) return Math.max(array[0] + array[1], array[0] * array[1]);
		//Arrays.sort(array);
		int sum = 0;

		// 양수 파트와 음수 파트를 나눈다
		int max = array[0];
		int i = -1;

		for(int j=0; j<array.length; j++) {
			if(max < Math.abs(array[j])) max = Math.abs(array[j]);
			if(array[j] <= 0) {
				i++;
				int tmp = array[i];
				array[i] = array[j];
				array[j] = tmp;
			}
		}

		int[] left = Arrays.copyOfRange(array, 0, i+1);
		int[] right = Arrays.copyOfRange(array, i+1, array.length);
		
		Arrays.sort(left);
		for(int j=0; j<left.length;) {
			if(j+1 < left.length) {
				sum += left[j] * left[j+1];
				j += 2;
			} else {
				sum += left[j];
				j++;
			}
		}

		Arrays.sort(right);
		for(int j=right.length-1; j>=0;) {
			if(j-1 > 0 && right[j] != 1 && right[j-1] != 1) {
				sum += right[j] * right[j-1];
				j -= 2;
			} else {
				sum += right[j];
				j--;
			}
		}

		return sum;
	}
}

// Declare and define your class here if you need...
