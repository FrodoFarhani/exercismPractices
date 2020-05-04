export default class Rational {
  constructor(private a: number, private b: number) {
    const gcd = this.GCD(a, b);
    this.a /= gcd;
    this.b /= gcd;
    [this.a, this.b] = this.b < 0 ? [-this.a, -this.b] : [this.a, this.b];
  }
  add(rationalObj: Rational): Rational {
    return new Rational(
      this.a * rationalObj.b + this.b * rationalObj.a,
      this.b * rationalObj.b
    );
  }
  sub(rationalObj: Rational): Rational {
    return new Rational(
      this.a * rationalObj.b - this.b * rationalObj.a,
      this.b * rationalObj.b
    );
  }
  mul(rationalObj: Rational): Rational {
    return new Rational(this.a * rationalObj.a, this.b * rationalObj.b);
  }
  div(rationalObj: Rational): Rational {
    return new Rational(this.a * rationalObj.b, this.b * rationalObj.a);
  }
  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }
  exprational(pow: number): Rational {
    return new Rational(Math.pow(this.a, pow), Math.pow(this.b, pow));
  }
  expreal(exp: number): number {
    return Math.pow(exp, this.a / this.b);
  }
  reduce(): Rational {
    return this;
  }
  private GCD(a: number, b: number): number {
    return b == 0 ? a : this.GCD(b, a % b);
  }
}
