// 다항식 ADT 예제
class Poly{
	double coef;	// 계수
	int exp;	// 지수
	
	public Poly() {
		// 상수를 만드는 기본 생성자
		this.coef = 0;
		this.exp = 0;
	}

	public Poly(float coef) {
		// 계수만 받는 생성자
		this.coef = coef;
		this.exp = 1;
	}

	public Poly(double coef, int exp) {
		// 지수, 계수 모두 받는 생성자
		this.coef = coef;
		this.exp = exp;
	}
}

public class Polynomial {
	public static void setZero(Poly[] poly) {
		// 다항식을 0으로 만드는 연산자
		for(int i=0; i<poly.length; i++) 
			// 모든 항의 계수를 0으로 만듦
			poly[i].coef = 0;
		
	}
	
	public static boolean isZero(Poly[] poly) {
		// 다항식이 0인지 판별하는 연산자
		for(int i=0; i<poly.length; i++) 
			if(poly[i].coef != 0)
				// 계수가 0이 아닌 항이 있으면 다항식이 0이 아니므로 false 반환
				return false;
		return true;
		
	}

	public static double getCoef(Poly[] poly, int exp) {
		// 해당 항의 지수를 받아 계수를 반환하는 연산자
		for(int i=0; i<poly.length; i++) {
			if(poly[i].exp == exp) 
				return poly[i].coef;
		}
		return 0;
	}

	public static int getLeadExp(Poly[] poly) {
		// 다항식의 최고차항을 반환하는 연산자
		int maxExp = 0;
		for(int i=0; i<poly.length; i++) {
			if(poly[i].exp > maxExp) 
				maxExp = poly[i].exp;
		}
		return maxExp;
	}
	
	public static Poly[] attach(Poly[] poly, double coef, int exp) {
		// 항을 추가해주는 연산자
		final int NEW_POLY_SIZE = poly.length + 1;
		Poly[] newPoly = new Poly[NEW_POLY_SIZE];
		int position = 0;	// 항을 추가할 위치

		if(exp == 0) {
			// 지수가 0인 상수일 경우 맨끝에 추가
			position = NEW_POLY_SIZE - 1;
			newPoly[position] = new Poly(coef, exp);
		} else if(exp > getLeadExp(poly)) {
			// 최고차항보다 클 경우
			newPoly[position] = new Poly(coef, exp);
		}else {
			for(int i=1; i<poly.length; i++) {
				// 삽입 위치 찾기
				if(exp < poly[i-1].exp && exp > poly[i].exp) 
					position = i;
			}
			for(int i=0; i<NEW_POLY_SIZE; i++) {
				if(i < position)
					newPoly[i] = poly[i];
				else if(i == position)
					newPoly[position] = new Poly(coef, exp);
				else
					newPoly[i] = poly[i-1];
			}
		}
		
		return newPoly;
	}
	
	public static Poly[] remove(Poly[] poly, int exp) {
		// 항을 제거해주는 연산자
		final int NEW_POLY_SIZE = poly.length - 1;
		Poly[] newPoly = new Poly[NEW_POLY_SIZE];
		int position = 0;

		for(int i=0; i<poly.length; i++)
			if(exp == poly[i].exp)
				position = i;
		
		for(int i=0; i<NEW_POLY_SIZE; i++) {
			if(i < position)
				newPoly[i] = poly[i];
			else if(i >= position)
				newPoly[i] = poly[i+1];
		}
		
		return newPoly;
	}
	
	public static Poly[] monoMultiply(Poly[] poly, double coef, int exp) {
		// 하나의 항과 다항식을 곱해주는 연산자
		final int NEW_POLY_SIZE = poly.length;
		Poly[] newPoly = new Poly[NEW_POLY_SIZE];

		for(int i=0; i<NEW_POLY_SIZE; i++) {
			newPoly[i] = new Poly(poly[i].coef * coef, poly[i].exp + exp);
		}
		
		return newPoly;
	}
	
	public static Poly[] add(Poly[] poly1, Poly[] poly2) {
		final int NEW_POLY_SIZE = poly1.length + poly2.length;
		Poly[] newPoly = new Poly[NEW_POLY_SIZE];

		int poly1_start = 0, poly1_end = poly1.length - 1;
		int poly2_start = 0, poly2_end = poly2.length - 1;
		int position = 0;
		
		while(poly1_start <= poly1_end && poly2_start <= poly2_end) {
			// 비교할 항이 남아 있는 동안 반복
			if(poly1[poly1_start].exp < poly2[poly2_start].exp) {
				// poly2의 계수가 더 클 경우 poly2의 항이 먼저 나와야함
				newPoly[position++] = new Poly(poly2[poly2_start].coef, poly2[poly2_start].exp);
				poly2_start++;
			}
			if(poly1[poly1_start].exp > poly2[poly2_start].exp) {
				newPoly[position++] = new Poly(poly1[poly1_start].coef, poly1[poly1_start].exp);
				poly1_start++;
			}
			if(poly1[poly1_start].exp == poly2[poly2_start].exp){
				// 두 항의 지수가 같은 경우
				double coef = poly1[poly1_start].coef + poly2[poly2_start].coef;
				if(coef != 0)
					// 계수의 합이 0인 경우 포함시키지 않음
					newPoly[position++] = new Poly(coef, poly1[poly1_start].exp);
				poly1_start++; poly2_start++;
			}
		}
		// 남아있는 항 추가
		for(; poly1_start<=poly1_end; poly1_start++) {
			newPoly[position++] = new Poly(poly1[poly1_start].coef, poly1[poly1_start].exp);
		}
		for(; poly2_start<=poly2_end; poly2_start++) {
			newPoly[position++] = new Poly(poly1[poly2_start].coef, poly1[poly2_start].exp);
		}
		
		return newPoly;
	}
	
	public static Poly[] multiply(Poly[] poly1, Poly[] poly2) {
		final int NEW_POLY_SIZE = getLeadExp(poly1) + getLeadExp(poly2);
		Poly[] newPoly = new Poly[NEW_POLY_SIZE];

		if(getLeadExp(poly1) < getLeadExp(poly2)) {
			Poly[] temp;
			
			temp = poly1;
			poly1 = poly2;
			poly2 = temp;
		}
		
		newPoly = monoMultiply(poly1, poly2[0].coef, poly2[0].exp);
		for(int i=1; i<NEW_POLY_SIZE; i++) {
			Poly[] adder = monoMultiply(poly1, poly2[i].coef, poly2[i].exp);
			newPoly = add(newPoly, adder);
			printPoly(newPoly);
		}
		
		return newPoly;
	}
	
	public static void printPoly(Poly[] poly) {
		if(isZero(poly)) {
			// 다항식이 0일 경우 그냥 0출력
			System.out.println(0);
		} else {
			for(int i=0; i<poly.length; i++) {
				try {
					if(poly[i].exp == getLeadExp(poly))
						// 최고차항일 경우
						System.out.print(poly[i].coef + "x^" + poly[i].exp);
					else if(poly[i].exp == 1)
						// 지수가 1일 경우 지수 제외하고 출력
						System.out.print(" + " + poly[i].coef + "x");
					else if(poly[i].exp == 0)
						System.out.println(" + " + poly[i].coef);
					else
						System.out.print(" + " + poly[i].coef + "x^" + poly[i].exp);
				
				} catch (NullPointerException e){
					return;
				}
			}
		}
	}
	
	public static void main(String[] args) {
		// poly =  x + 1
		Poly[] poly1 = {new Poly(1, 1), new Poly(1, 0) };	
		// poly = x + 2
		Poly[] poly2 = {new Poly(1, 1), new Poly(2, 0) };
		
		Poly[] poly3 = multiply(poly1, poly2);
		printPoly(poly3);
	}
	
}
