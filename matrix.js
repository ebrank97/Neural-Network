class Matrix{

  //Matrix constructor function
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for(let i=0;i < this.rows;i++){
      this.data[i] = [];
      for(let j=0;j < this.cols;j++){
        this.data[i][j] = 0;
      }
    }
  }

  //array to matrix conversion
  static fromArray(arr){
    let m = new Matrix(arr.length, 1);
    for(let i=0;i < arr.length;i++){
      m.data[i][0] = arr[i];
    }
    return m;
  }

  //Matrix to array conversion
  toArray(){
    let arr = [];
    for(let i=0;i < this.rows;i++){
      for(let j=0;j < this.cols;j++){
        arr.push(this.data[i][j]);
      }
    }
    return arr;
  }

  //Randomize function
  randomize(){
    for(let i=0;i < this.rows;i++){
      for(let j=0;j < this.cols;j++){
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

//Addition of matrix
 add(n){
   if(n instanceof Matrix){
     for(let i=0;i < this.rows;i++){
       for(let j=0;j < this.cols;j++){
         this.data[i][j] += n.data[i][j];
       }
     }
   }else{
     for(let i=0;i < this.rows;i++){
       for(let j=0;j < this.cols;j++){
         this.data[i][j] += n;
       }
     }
   }
 }


 //console function- to print the matrix
 print(){
   console.table(this.data);
 }


//transpose the Matrix
transpose(){
  let result = new Matrix(this.cols, this.rows);
  for(let i=0;i < this.rows;i++){
    for(let j=0;j < this.cols;j++){
      result.data[j][i] = this.data[i][j];
    }
  }
  return result;
}

//static multiplication function
static multiply(a, b){
  //matrix product
  if(a.cols != b.rows){
    console.log("Column of First matrix have to match with Row of the other Matrix");
    return undefined;
  }
  let result = new Matrix(a.rows, b.cols);
  for(let i=0;i < result.rows;i++){
    for(let j=0;j < result.cols;j++){
      let sum = 0;
      for(let k=0;k < a.cols;k++){
        sum += a.data[i][k] * b.data[k][j]
      }
      result.data[i][j] = sum;
    }
  }
    return result;
}

 //Multiplication function
 multiply(n){
     //scalar product
     for(let i=0;i < this.rows;i++){
       for(let j=0;j < this.cols;j++){
         this.data[i][j] *= n;
       }
     }
 }

//map function
map(func){
  for(let i=0;i < this.rows;i++){
    for(let j=0;j < this.cols;j++){
      let val = this.data[i][j];
      this.data[i][j] = func(val);
    }
  }
}

}
