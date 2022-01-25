class Entry {
	int row;	// 행
	int col;	// 열
	int value;	// 담긴 값
	
	public Entry(int row, int col, int value) {
		this.row = row;
		this.col = col;
		this.value = value;
	}
}

public class SparseMatrixTest {
	final static int ARRSIZE = 10;
	final static int MTXSIZE = ARRSIZE * ARRSIZE;
	
	public static void printDenseMTX(Entry[] denseMTX) {
		System.out.println("row\tcol\tvalue");
		for(int i=0; i<denseMTX[0].value; i++) {
			System.out.println(denseMTX[i].row + "\t"
					+ denseMTX[i].col + "\t"
					+ denseMTX[i].value);
		}
	}
	
	public static Entry[] coordinate(int[][] sparseMTX) {
		int position=1;
		Entry[] denseMTX = new Entry[MTXSIZE];
		
		// 행렬관련 정보 저장
		denseMTX[0] = new Entry(ARRSIZE, ARRSIZE, 0);
		
		for(int i=0; i<ARRSIZE; i++) {
			for(int j=0; j<ARRSIZE; j++) {
				if(sparseMTX[i][j] != 0) {
					denseMTX[position] = new Entry(i, j, sparseMTX[i][j]);
					
					position++;
				}
			}
		}
		denseMTX[0].value = position-1;
		
		return denseMTX;
	}

	public static void main(String[] args) {
		int matrix[][] = new int[ARRSIZE][ARRSIZE];
		Entry[] denseMTX = new Entry[MTXSIZE];

		matrix[0][0] = 15;
		matrix[0][2] = 22;
		matrix[0][9] = 15;
		matrix[1][8] = 3;
		matrix[2][1] = 28;
		matrix[3][0] = 91;
		
		denseMTX = coordinate(matrix);
		printDenseMTX(denseMTX);
	}

}
