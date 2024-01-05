import java.io.*;
import java.util.Arrays;
import java.util.Stack;
public class popsicleStick{
	private int[] length;
	public popsicleStick(int[] l){
		int i=0, n = l.length;
		this.length = new int[n];
		for(i=0;i<n;i++)	this.length[i] = l[i];
	}
	public void printSticks(){
		int i=0, n=length.length;
		System.out.println("n = " + n);
		System.out.print("lengths: ");
		for(i=0;i<n;i++)	System.out.print(length[i] + "  ");
		System.out.println();
	}
	// public int maxArea(){
	// 	// Remove the following return statement and fill with source code here...
	// 	int max=0, sum=0;

	// 	for(int i=0; i<length.length; i++) {
	// 		sum = 0;
	// 		for(int j=i; j>=0; j--) {
	// 			if(length[i] > length[j]) break;
	// 			sum += length[i];
	// 		}
	// 		for(int j=i+1; j<length.length; j++) {
	// 			if(length[i] > length[j]) break;
	// 			sum += length[i];
	// 		}

	// 		if(sum > max) {
	// 			max = sum;
	// 		}
	// 	}

	// 	return max;
	// }
	public int maxArea(){
		// Remove the following return statement and fill with source code here...
		return getArea(0, length.length-1);
	}

	private int getArea(int l, int r) {
		if(l == r) return length[l];
		int c = (l+r)/2;
		int leftArea = getArea(l, c);
		int rightArea = getArea(c+1, r);

		int i=c, j=c;
		int height=length[c], maxArea=height;

		while(l<i && j<r) {
			if(length[i-1] < length[j+1]) {
				j++;
				height = Math.min(height, length[j]);
			}
			else {
				i--;
				height = Math.min(height, length[i]);
			}
			maxArea = Math.max(maxArea, height * (j-i+1));
		}

		while(l<i) {
			i--;
			height = Math.min(height, length[i]);
			maxArea = Math.max(maxArea, height * (j-i+1));
		}

		while(j<r) {
			j++;
			height = Math.min(height, length[j]);
			maxArea = Math.max(maxArea, height * (j-i+1));
		}

		return Math.max(Math.max(leftArea, rightArea), maxArea);
	}
}
