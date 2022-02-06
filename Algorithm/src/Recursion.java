class Factorial {
	public double getFactorial(double n) {
		if(n == 0)
			return 1;
		else
			return n * getFactorial(n-1);
	}
}

class GCD {
	public int getGCD(int a, int b) {
		if(b == 0)
			return a;
		else
			return getGCD(b-a, a);
	}
}

class BinarySearch {
	int[] list;
	int left, right;
	
	BinarySearch(int list[]){
		this.list = list;
		this.left = 0;
		this.right = list.length-1;
	}
	
	public int getSpecified(int item) {
		int mid=0;
		if(left < right) {
			// 비교할 데이터가 남아있을 때
			mid = (left+right) / 2;
			if(item == list[mid]) 
				// 찾았을 경우 해당 위치 리턴
				return mid;
			else if(item < list[mid]) {
				// 찾고자하는 수가 중앙값보다 작다면
				right = mid-1;
				getSpecified(item);
			} else {
				left = mid+1;
				getSpecified(item);
			}
		}
		// 찾지 못했을 경우
		return -1;
	}
}

class Hanoi {
	public void startHanoi(int n, String from, String tmp, String to) {
		// n은 원판의 개수
		if(n == 1)
			System.out.println("원판" + n +"을 " + from + "에서 " + to + "로 옮긴다.");
		else {
			startHanoi(n-1, from, to, tmp);
			System.out.println("원판" + n +"을 " +  from+ "에서 " +  to+ "로 옮긴다.");
			startHanoi(n-1, tmp, from, to);
		}
	}
}

class Permutation {
	String list[];
	
	Permutation(String list[]){
		this.list = list;
	}
	
	public void perm(int start, int end) {
		int i;
		if(start == end) {
			for(i=0; i<=end; i++) 
				System.out.print(list[i]);
			System.out.println();
		}else {
			for(i=start; i<=end; i++) {
				swap(start, i);	// 고정시킬 요소 바꿔주기
				perm(start+1, end);	// 부분범위끼리 자리바꾸기
				swap(start, i);	// 고정요소 다시 원위치
			}
		}
	}
	
	public void swap(int i, int j) {
		String tmp;
		
		tmp = list[i];
		list[i] = list[j];
		list[j] = tmp;
	}
}

public class Recursion {

	public static void main(String[] args) {
		String list[] = {"a", "b", "c"};
		Permutation permutation = new Permutation(list);
		permutation.perm(0, 2);
	}

}
